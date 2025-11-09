import style from "./Feedback.module.css";

export default function Feedback({ marks, totalFeedback, positiveFeedback }) {
	return (
		<ul className={style.feedback}>
			{Object.keys(marks).map((mark, i) => {
				return (
					<li key={i}>
						<p>
							{mark}: {marks[mark]}
						</p>
					</li>
				);
			})}
			<li>
				<p>Total: {totalFeedback}</p>
			</li>
			<li>
				<p>Positive: {positiveFeedback}</p>
			</li>
		</ul>
	);
}
