import { type Context, useContext } from 'solid-js';

export const useSafeContext = <Type>(context: Context<Type>, name: string) => {
	const safeContext = useContext(context);
	if (safeContext == null) throw new Error(`${name}Context is missing`);
	return safeContext;
};
