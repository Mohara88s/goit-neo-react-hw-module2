import style from "./Feedback.module.css";

export default function Feedback({ marks }) {
	return (
		<ul className={style.feedback}>
			{Object.keys(marks).map((mark, i) => {
				return (
					<li key={i}>
						<p>
							{mark} : {marks[mark]}
						</p>
					</li>
				);
			})}
		</ul>
	);
}
