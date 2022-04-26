import React, { useState, useEffect } from 'react'
import {FooterSection, FaqSection, FaqTitle, SingleQuestionContainer} from './FAQElements';
import SingleFAQ from './SingleFAQ';
import FooterContact from './FooterContact';

function FAQ() {
    const [questions, setQuestions] = useState();

    useEffect(() => {
        const fetchTourInfo = async() => {
            const tourRes = await fetch('http://localhost:3030/questions')
            const tourData = await tourRes.json()
            setQuestions(tourData)
        }
        fetchTourInfo()
      }, []);

    return (
        <FooterSection>
            <FaqSection>
                <FaqTitle>Vacation Travel FAQ</FaqTitle>
                
                <SingleQuestionContainer>
                    {questions && (
                        questions.map((question) => {
                            return <SingleFAQ key={question.id} {...question}/>
                        })
                    )}
                </SingleQuestionContainer>
            </FaqSection>
            
            <FooterContact/>
        </FooterSection>
    )
}

export default FAQ
