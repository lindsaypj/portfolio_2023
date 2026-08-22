import React from "react";
import { Col, Row } from "react-bootstrap";

import '../../styles/GroupReflection.css';


////    CONSTATNS    ////

const QUESTIONS = [
    {
        'q':'The experience I had while working with my group on this project was:', 
        'a':['FUN', 'FRUSTRATING', 'COOPERATIVE', 'STRESSFUL', 'ENERGIZING', 'GOOD', '']
    },
    {
        'q':'The amount of effort I put into this project was:',
        'a':['INADEQUATE', 'OKAY', 'ACCEPTABLE', 'VERY GOOD', '']
    },
    {
        'q':'The difficulty level of this project was:',
        'a':['EASY', 'MEDIUM', 'HARD', '']
    },
    {
        'q':'The most difficult part of this project was:',
        'a':['MY GROUP', 'THE TECHNOLOGY', 'THE CONTENT', 'TIME TO COMPLETE', '']
    },
    {
        'q':'The help and guidance for the project was:',
        'a':['ADEQUATE', 'INADEQUATE', 'CONFUSING', 'HELPFUL', 'JUST ENOUGH', '']
    },
    {
        'q':'The point of this project was to introduce you to statistical papers and vocabulary. This project was:',
        'a':['NOT USEFUL', 'USEFUL', 'INTERESTING', 'BORING', '']
    },
];

export default function GroupReflection({
    projectTitle,
    groupNumber,
    timeSpent,
    highlighted = [{'a': '', 'other': ''}],
    reflection,
    mobileMode
}) {
    
    ////    INITIALIZATION    ////

    
    ////    RENDERING    ////
    
    return (
        <div className='stats-group-reflection mt-5 pt-5'>
            <Row>
                <Col className={mobileMode ? '' : 'text-nowrap'} xs={mobileMode ? '12' : ''}>
                    <h3>Group Project Reflection Math 146</h3>
                </Col>
                <Col className='text-nowrap' xs={'auto'}>
                    <h3 className='stats-h3'>Name: <u>Patrick Lindsay</u></h3>
                </Col>
            </Row>
            <Row className='mt-3 text-nowrap'>
                <Col xs>
                    <h4>Project: <u>{projectTitle}</u></h4>
                </Col>
                <Col className='text-nowrap' xs={'auto'}>
                    <h4 className={'stats-h4'}>Group Number: <u>{groupNumber}</u></h4>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    <p className='stats-ms-5'>
                        <span className='pe-2'>1.</span>
                        The total time that I spent on this project, rounded to the nearest half hour: <u>{timeSpent}</u>
                    </p>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    <p className='mb-0'><b>For each question below, highlight all of the words that apply or insert your own work in the last blank.</b></p>
                </Col>
            </Row>

            {QUESTIONS.map((question, qIndex) => (
                <div key={'q' + qIndex}>
                    <Row className='mt-5'>
                        <Col>
                            <p className='stats-ms-5 mb-0'>
                                <span className='pe-2'>{qIndex + 2}.</span>
                                {question.q}
                            </p>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col>
                            <table className='group-reflection-table'>
                                <tbody>
                                    <tr>
                                        {question.a.map((answer, aIndex) => (
                                            <td
                                                key={'a' + aIndex}
                                                className={highlighted[qIndex]['a'] === (aIndex + 1) ? 'highlight':''}>{answer || highlighted[qIndex].other}
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </div>
            ))}

            <Row className='mt-5'>
                <Col>
                    <p className='stats-ms-5 mb-0'>
                        8. <b>Describe the project in your own words</b>, and briefly explain the process your group went through to complete the work.  Explain any positive or negative experiences you had while completing the assignment and something that you learned from the experience.  To receive full credit, please answer in 3 to 7 complete, well-formed sentences.
                    </p>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                    {reflection}
                </Col>
            </Row>
        </div>
    )
}