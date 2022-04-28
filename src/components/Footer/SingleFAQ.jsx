import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import { Question, Header, QTitle, Btn, Answer } from "./SingleFAQElements";

import { iconquestion } from "../../utils";

const SingleFAQ = ({ title, info }) => {
	const [showAnswer, setShowAnswer] = useState(false);

	const showAnswerHandler = () => {
		setShowAnswer(!showAnswer);
	};

	return (
		<Question>
			<Header>
				<QTitle>{title}</QTitle>
				<Btn onClick={showAnswerHandler}>
					{showAnswer ? (
						<FaAngleUp style={iconquestion} />
					) : (
						<FaAngleDown style={iconquestion} />
					)}
				</Btn>
			</Header>

			{showAnswer && <Answer>{info}</Answer>}
		</Question>
	);
};

export default SingleFAQ;
