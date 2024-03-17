import css from "./GameList.module.css";

export function GameList(): JSX.Element {
	const games = [
		{ id: 1, name: "Chess", price: 39 },
		{ id: 2, name: "Catan", price: 59 },
		{ id: 3, name: "Lego", price: 99 },
	];

	return (
		<div className={css.GameList}>
			<ul>
				{games.map((game) => (
					<li key={game.id}>
						{game.name}, <s>{game.price}₪</s>, SALE:
						{Math.floor(game.price * 0.8)}₪
					</li>
				))}
			</ul>
		</div>
	);
}
