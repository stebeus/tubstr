import { createContext, createUniqueId, type ParentComponent } from 'solid-js';

import { useSafeContext } from '#root/utilities/context.ts';

import { Button, type ButtonProps } from './ui/index.ts';

type Dropdown = {
	id: string;
};

const DropdownContext = createContext<Dropdown>();

const useDropdownContext = () => useSafeContext(DropdownContext, 'Dropdown');

const DropdownProvider: ParentComponent = (props) => (
	<DropdownContext.Provider value={{ id: createUniqueId() }}>
		{props.children}
	</DropdownContext.Provider>
);

const DropdownButton: ParentComponent<ButtonProps> = (props) => {
	const { id } = useDropdownContext();

	return (
		<Button command="toggle-popover" commandfor={id}>
			{props.children}
		</Button>
	);
};

const DropdownMenu: ParentComponent = (props) => {
	const { id } = useDropdownContext();

	return (
		<div id={id} popover>
			{props.children}
		</div>
	);
};

export const Dropdown = Object.assign(DropdownProvider, {
	Button: DropdownButton,
	Menu: DropdownMenu,
});
