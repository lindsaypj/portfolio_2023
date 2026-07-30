import React from "react";
import { Col, Row } from "react-bootstrap";


export default function ProjectQuestion({ questionNum = '0', credit = ['',''], questions = [{q: '', a: ['']}] }) {

    const getQuestionChar = (index) => {
        return (String.fromCharCode('a'.charCodeAt(0) + index) + '.')
    }

    const formatQustions = () => {
        if (questions.length <= 1) {
            return (<>
                <p>
                    {questions[0]?.q}
                </p>
                {questions[0]?.a.map( (answer, index) => 
                    <p key={index} className='fst-italic'>
                        {answer}
                    </p>
                )}
            </>)
        }
        else {
            return (<>
                <p>
                    {questions[0]?.q}
                </p>
                {questions.map((question, qIndex) => {
                    if (qIndex > 0) {
                        return (
                            <Row key={qIndex}>
                                <Col className='p-0' xs='auto'>
                                    <p className='ps-3'>{getQuestionChar(qIndex - 1)}</p>
                                </Col>
                                <Col className='p-0'>
                                    <p className='ps-3'>
                                        {question.q}
                                    </p>
                                </Col>
                                {question.a.map( (answer, aIndex) => (
                                    <p key={aIndex} className='fst-italic'>
                                        {answer}
                                    </p>
                                ))}
                            </Row>
                        )
                    }
                    return <div key={qIndex}></div>
                })}
            </>)
        }
    }

    return (
        <Row className='ps-4 my-4'>
            <Col xs='auto' className='p-0'>
                <span>{questionNum}.</span>
            </Col>
            <Col>
                <p className='mb-2'>
                    Student who completed the work: <b><u>{credit[0]}</u></b> Student who checked it: <b><u>{credit[1]}</u></b>
                </p>
                {formatQustions()}
            </Col>
        </Row>
    )
}