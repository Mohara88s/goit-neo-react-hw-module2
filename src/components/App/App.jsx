import Section from "../Section/Section";
import Container from "../Container/Container";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

export default function App() {
	const marks = {
		good: 0,
		neutral: 0,
		bad: 0,
	};
	return (
		<>
			<Section>
				<Container>
					<Description />
				</Container>
			</Section>
			<Section>
				<Container>
					<Options options={marks} />
				</Container>
			</Section>
			<Section>
				<Container>
					<Feedback marks={marks} />
				</Container>
			</Section>
		</>
	);
}
