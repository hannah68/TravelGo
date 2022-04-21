// import React, { useState } from 'react'
import {FooterSection, FaqSection, FaqTitle, SingleQuestionContainer} from './FAQElements';
// import SingleFAQ from './SingleFAQ';
// import data from './data';
import FooterContact from './FooterContact';

function FAQ() {
    // const [questions, setQuestions] = useState(data);

    return (
        <FooterSection>
            <FaqSection>
                <FaqTitle>Vacation Travel FAQ</FaqTitle>
                
                <SingleQuestionContainer>
                    {/* {questions.map((question) => {
                        return <SingleFAQ key={question.id} {...question}/>
                    })} */}
                </SingleQuestionContainer>
            </FaqSection>
            
            <FooterContact/>
        </FooterSection>
    )
}

export default FAQ
