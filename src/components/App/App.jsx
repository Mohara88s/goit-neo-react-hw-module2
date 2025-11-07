import { useState } from "react";
import Section from "../Section/Section";
import Container from "../Container/Container";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

export default function App() {
	const [marks, setMarks] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});

	const updateFeedback = (feedbackType) => {
		setMarks((prevState) => ({
			...prevState,
			[feedbackType]: prevState[feedbackType] + 1,
		}));
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
					<Options options={marks} updateFeedback={updateFeedback} />
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
