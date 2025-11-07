import style from "./Options.module.css";

export default function Options({ options, updateFeedback }) {
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
		</ul>
	);
}
