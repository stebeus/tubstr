import { SubmitButton } from '#root/components/ui/index.ts';

const isHtmlFormElement = (target: EventTarget) => target instanceof HTMLFormElement;

const query = (event: Event) => {
	const { target } = event;
	if (target == null || !isHtmlFormElement(target)) return;

	const formData = Object.fromEntries(new FormData(target));

	// todo: implement search functionality
	console.log(formData);
};

export const Search = () => (
	<search>
		<form action="search" onSubmit={query}>
			<textarea name="query" placeholder="Search"></textarea>
			<SubmitButton>Search</SubmitButton>
		</form>
	</search>
);
