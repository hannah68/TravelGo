import React, {useState} from 'react'
import {Question, Header, QTitle, Btn, Answer} from './SingleFAQElements';
import {FaAngleDown, FaAngleUp} from 'react-icons/fa';

function SingleFAQ({title,info}) {
    const [showAnswer, setShowAnswer] = useState(false);

    const showAnswerHandler = () =>{
        setShowAnswer(!showAnswer);
    }

    const iconStyle = {width: '1.5em', height: '1.5em', color:'#0F0178'};

    return (
        <Question>
            <Header>
                <QTitle>{title}</QTitle>
                <Btn onClick={showAnswerHandler}>
                    {showAnswer ? <FaAngleUp style={iconStyle}/> : <FaAngleDown style={iconStyle}/>}
                </Btn>
            </Header>

            {showAnswer && <Answer>{info}</Answer>}
        </Question>
    )
}

export default SingleFAQ
