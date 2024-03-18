import "./Loading.css";

export function Loading(): JSX.Element {
	return (
		<div className="Loading">
			<div className="lds-ellipsis">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
