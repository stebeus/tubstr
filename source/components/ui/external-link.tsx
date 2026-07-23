import type { JSX, ParentComponent } from 'solid-js';

type ExternalLinkProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ExternalLink: ParentComponent<ExternalLinkProps> = (props) => (
	<a {...props} target="_blank" rel="noopener noreferrer">
		{props.children}
	</a>
);
