import { useEffect, useState } from "react";
import css from "./Clock.module.css";

export function Clock(): JSX.Element {
	const [currentTime, setCurrentTime] = useState(
		new Date().toLocaleTimeString()
	);

	useEffect(() => {
		const timerID = setInterval(() => {
			setCurrentTime(new Date().toLocaleTimeString());
		}, 1000);

		return () => clearInterval(timerID);
	}, []);

	return (
		<div className={css.Clock}>
			<p>{currentTime}</p>
		</div>
	);
}
