type DomMutationFunc = (element: Element) => void;

const pendingActions: WeakMap<Element, DomMutationFunc[]> = new WeakMap<Element, DomMutationFunc[]>();

const onIntersection = (entries: IntersectionObserverEntry[]): void => {
	for (const entry of entries) {
		if (!entry.isIntersecting) {
			continue;
		}

		const element: Element = entry.target;
		observer.unobserve(element);

		const callbacks: DomMutationFunc[] | undefined = pendingActions.get(element);
		if (!callbacks) {
			continue;
		}

		while (true) {
			const callback: DomMutationFunc | undefined = callbacks.shift(); // FIFO
			if (!callback) {
				break;
			}
			callback(element);
		}
	}
};

// Optimization: lazily execute pending actions once an element is visible
const observer: IntersectionObserver = new IntersectionObserver(onIntersection);

const queueDomMutation = (element: Element, callback: DomMutationFunc): void => {
	if (!pendingActions.has(element)) {
		pendingActions.set(element, []);
	}

	if (pendingActions.get(element) !== undefined) {
		(pendingActions.get(element) as DomMutationFunc[])[(pendingActions.get(element) as DomMutationFunc[]).length] =
			callback;
	}
	observer.observe(element);
};

export {queueDomMutation};
