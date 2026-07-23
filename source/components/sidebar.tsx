import { For } from 'solid-js';

// todo: remove mock data
const follows = ['Mock data 1', 'Mock data 2'];

export const Sidebar = () => (
	<aside>
		<nav>
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
			</ul>

			<h2>Follows</h2>
			<ul>
				<For each={follows}>
					{(follow) => (
						<li>
							<a href={follow}>{follow}</a>
						</li>
					)}
				</For>
			</ul>
		</nav>
	</aside>
);
