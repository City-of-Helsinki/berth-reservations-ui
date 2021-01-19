export const stripLeadingSlash = (value: string) => (value.charAt(0) === '/' ? value.substr(1) : value);

/**
 * Generates a valid CSS selector from a string by replacing invalid characters.
 * @param selector A string to be checked.
 * @returns A valid CSS selector.
 */
export const genValidSelector = (selector: string) => selector.replace(/^[^a-z]+|[^\w:.-]+/gi, 'x');
