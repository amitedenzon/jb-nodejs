import { useEffect, useState } from "react";
import css from "./RandomGames.module.css";
import garlicPepper from "../../../Assets/Garlic_pepper.png";
import egg from "../../../Assets/egg_poster.png";
import pizza from "../../../Assets/giuseppe_poster.png";
import mascot from "../../../Assets/mascot_circle.png";
import wife from "../../../Assets/Nofar.png";

export function RandomGames(): JSX.Element {
	const images = [garlicPepper, egg, pizza, mascot, wife];
	const [poster, setPoster] = useState<string>(garlicPepper);

	useEffect(() => {
		const timerID = setInterval(() => {
			const random = Math.floor(Math.random() * images.length);

			setPoster(images[random]);
		}, 3000);

		return () => clearInterval(timerID);
	}, []);

	return (
		<span className={css.RandomGames}>
			<p>The random poster of now is:</p>
			<img src={poster} />
		</span>
	);
}
