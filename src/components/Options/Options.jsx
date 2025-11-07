import style from "./Options.module.css";

export default function Options({ options }) {
	return (
		<ul className={style.options}>
			{Object.keys(options).map((option, i) => {
				return (
					<li key={i}>
						<button>{option}</button>
					</li>
				);
			})}
		</ul>
	);
}
