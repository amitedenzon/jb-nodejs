import { SyntheticEvent, useState } from "react";
import css from "./Search.module.css";

export function Search(): JSX.Element {
	const [text, setText] = useState<string>();

	function handleChange(args: SyntheticEvent) {
		const text = (args.target as HTMLInputElement).value;
		setText(text);
	}

	function searchInWebsite() {
		alert(`searching for: ${text}`);
		setText("");
	}

	return (
		<div className={css.Search}>
			<span>Search: </span>
			<input
				type="search"
				onChange={handleChange}
				value={text}
				style={{ color: text }}
			/>
			<button onClick={searchInWebsite}>🔎</button>
		</div>
	);
}
