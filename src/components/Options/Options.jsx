import style from "./Options.module.css";

export default function Options({
	options,
	totalFeedback,
	updateFeedback,
	resetMarks,
}) {
	return (
		<ul className={style.options}>
			{Object.keys(options).map((option, i) => {
				return (
					<li key={i}>
						<button
							onClick={() => {
								updateFeedback(option);
							}}
						>
							{option}
						</button>
					</li>
				);
			})}
			{totalFeedback ? (
				<li className={style.reset_btn_item}>
					<button onClick={() => resetMarks()}>Reset</button>
				</li>
			) : (
				""
			)}
		</ul>
	);
}
