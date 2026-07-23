import { createContext } from 'solid-js';
import { describe, expect, it } from 'vitest';

import { useSafeContext } from './context.ts';

describe('useSafeContext', () => {
	it('rejects missing contexts', () => {
		const Context = createContext();
		expect(() => useSafeContext(Context, '')).toThrow(/Context is missing/);
	});

	it('returns a non-nullable context', () => {
		// Arrange
		const Context = createContext({ message: 'Hello, world!' });

		// Act
		const { message } = useSafeContext(Context, '');

		// Assert
		expect(message).toBe('Hello, world!');
	});
});
