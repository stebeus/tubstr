import { type JSX, mergeProps, type ParentComponent } from 'solid-js';

export type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: ParentComponent<ButtonProps> = (props) => {
	const merged = mergeProps({ type: 'button' as const }, props);
	return <button {...merged}>{merged.children}</button>;
};

export const SubmitButton: ParentComponent<ButtonProps> = (props) => (
	<button type="submit" {...props}>
		{props.children}
	</button>
);
