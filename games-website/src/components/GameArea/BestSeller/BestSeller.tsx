import { SyntheticEvent, useState } from "react";
import css from "./BestSeller.module.css";
import { log } from "console";

export function BestSeller(): JSX.Element {
	const [bestSeller, setBestSeller] = useState<String>();

	function show(): void {
		setBestSeller("THE FUCKING SHIT");
	}

	function hide(): void {
		setBestSeller("");
	}

	function showIcon(icon: String) {
		alert(icon);
	}
	return (
		<div>
			<div className={css.BestSeller}>
				<button onClick={show}>Show Best Seller</button>
				<br />
				<span>Best Seller: {bestSeller}</span>
				<br />
				<button onClick={hide}>Hide Best Seller</button>
			</div>
			<div className={css.BestSeller}>
				<button
					onClick={() => {
						showIcon("🎯");
					}}>
					🎯
				</button>
				<button
					onClick={() => {
						showIcon("🎮");
					}}>
					🎮
				</button>
				<button
					onClick={() => {
						showIcon("🎲");
					}}>
					🎲
				</button>
			</div>
		</div>
	);
}
