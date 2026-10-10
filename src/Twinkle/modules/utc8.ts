/**
 * Beijing time (UTC+8) helpers.
 *
 * Twinkle consistently treats user-entered absolute dates as Beijing time
 * and displays all absolute dates in Beijing time, so that "September 10"
 * means September 10, 00:00 Beijing time for both the UI and the API.
 */
export const UTC8_OFFSET_MINUTES = 8 * 60;

/**
 * Convert a `yyyymmddhhmm` compact string (previously interpreted as UTC)
 * to an ISO 8601 timestamp representing the same wall-clock time in
 * Beijing (UTC+8).
 *
 * @param input
 */
export const beijingCompactToISO = (input: string): string => {
	const match = /^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})$/.exec(input.trim());
	if (!match) {
		return input;
	}
	const year = Number(match[1]);
	const month = Number(match[2]);
	const day = Number(match[3]);
	const hour = Number(match[4]);
	const minute = Number(match[5]);
	const utcMillis = Date.UTC(year, month - 1, day, hour, minute) - UTC8_OFFSET_MINUTES * 60_000;
	const date = new Date(utcMillis);
	// Keep out-of-range components (e.g. month 13) untouched rather than
	// silently rolling them over.
	if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) {
		return input;
	}
	return date.toISOString();
};

/**
 * Convert a `YYYY-MM-DD` date string to an ISO 8601 timestamp representing
 * that date at 00:00 Beijing time.
 *
 * @param input
 */
export const beijingDateToISO = (input: string): string => {
	const match = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(input.trim());
	if (!match) {
		return input;
	}
	const year = Number(match[1]);
	const month = Number(match[2]);
	const day = Number(match[3]);
	const utcMillis = Date.UTC(year, month - 1, day) - UTC8_OFFSET_MINUTES * 60_000;
	return new Date(utcMillis).toISOString();
};

/**
 * Normalize a user-entered expiry value: a 12-digit compact date
 * (`yyyymmddhhmm`) is converted to Beijing-time ISO 8601 before being sent
 * to the API; relative values such as `1 week` pass through unchanged.
 *
 * @param value
 */
export const normalizeExpiry = (value: string): string => {
	const trimmed = value.trim();
	return /^\d{12}$/.test(trimmed) ? beijingCompactToISO(trimmed) : value;
};
