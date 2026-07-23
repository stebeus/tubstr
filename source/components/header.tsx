import { Dropdown } from './dropdown.tsx';
import { Search } from './forms/index.ts';

export const Header = () => (
	<header>
		<a href="/">Tubstr</a>
		<Search />
		<Dropdown>
			<Dropdown.Button>User</Dropdown.Button>
			<Dropdown.Menu>
				<ul></ul>
			</Dropdown.Menu>
		</Dropdown>
	</header>
);
