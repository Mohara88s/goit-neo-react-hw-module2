import { useState, useEffect } from "react";
import Section from "../Section/Section";
import Container from "../Container/Container";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const INIT_MARKS = {
	good: 0,
	neutral: 0,
	bad: 0,
};

export default function App() {
	const [marks, setMarks] = useState(() => {
		const savedMarks = window.localStorage.getItem("saved-marks");
		if (savedMarks !== null) {
			try {
				const parsedMarks = JSON.parse(savedMarks);
				if (typeof parsedMarks === "object" && parsedMarks !== null) {
					return parsedMarks;
				}
			} catch (error) {
				console.error("Error parsing saved marks from localStorage:", error);
				return INIT_MARKS;
			}
		}
		return INIT_MARKS;
	});

	const updateFeedback = (feedbackType) => {
		setMarks((prevState) => ({
			...prevState,
			[feedbackType]: prevState[feedbackType] + 1,
		}));
	};

	const resetMarks = () => {
		setMarks(INIT_MARKS);
	};

	useEffect(() => {
		window.localStorage.setItem("saved-marks", JSON.stringify(marks));
	}, [marks]);

	const totalFeedback = marks.good + marks.bad + marks.neutral;
	const positiveFeedback = totalFeedback
		? Math.round((marks.good / totalFeedback) * 100)
		: 0;

	return (
		<>
			<Section>
				<Container>
					<Description />
				</Container>
			</Section>

			<Section>
				<Container>
					<Options
						options={marks}
						totalFeedback={totalFeedback}
						updateFeedback={updateFeedback}
						resetMarks={resetMarks}
					/>
				</Container>
			</Section>

			<Section>
				<Container>
					{totalFeedback ? (
						<Feedback
							marks={marks}
							totalFeedback={totalFeedback}
							positiveFeedback={positiveFeedback}
						/>
					) : (
						<Notification />
					)}
				</Container>
			</Section>
		</>
	);
}
