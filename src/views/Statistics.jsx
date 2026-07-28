import React, { useReducer } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypingText from '../components/TypingText';

import '../styles/Statistics.css'

function typedReducer(state, action) {
  const nextState = {...state}
  switch(action.text) {
    case 'title':
      nextState.title = action.typed
      break;
    case 'course':
      nextState.course = action.typed
      break;
    case 'date':
      nextState.date = action.typed
      break;
    case 'name':
      nextState.name = action.typed
      break;
    default:
      return state
  }
  return nextState
}

export default function Statistics() {

    ////    INITIALIZATION    ////

    const [headersTyped, setHeadersTyped] = useReducer(typedReducer, {title: false, course: false, date: false, name: false});


    ////    RENDERING    ////

    return (
        <Container fluid className='p-0'>
            {/* Cover */}
            <Row className={'stats-cover-row'  + (headersTyped.name ? '' : ' outline-black') }>
                <Col className='p-0 text-center bg-black'>
                    <h1 className='cover-title'>
                        <TypingText
                            text='PORTFOLIO'
                            doneTypingCallback={() => { setHeadersTyped({text: 'title', typed: true}) }}
                            useCursor
                        />
                    </h1>
                    <h2 className='cover-course stats-h2'>
                        <TypingText
                            text='MATH 146: STATISTICS'
                            shouldType={headersTyped.title}
                            doneTypingCallback={() => { setHeadersTyped({text: 'course', typed: true}) }}
                            useCursor
                        />
                    </h2>
                    <h2 className='cover-course stats-h2'>
                        <TypingText
                            text='SUMMER 2026'
                            shouldType={headersTyped.course}
                            doneTypingCallback={() => { setHeadersTyped({text: 'date', typed: true}) }}
                            useCursor
                        />
                    </h2>
                    <h4 className={'cover-name' + (headersTyped.name ? '' : ' border-black') }>
                        <TypingText
                            text='Patrick Lindsay'
                            charInterval={50}
                            shouldType={headersTyped.date}
                            doneTypingCallback={() => { setHeadersTyped({text: 'name', typed: true}) }}
                            useCursor
                        />
                    </h4>
                </Col>
            </Row>

            {/* Table of Contents */}
            <Row className='stats-toc-row'>
                <Col className='stats-margins d-flex flex-column'>
                    <h2 className='stats-h2'>TABLE OF CONTENTS</h2>
                    <Row className='p-5 bg-black'>
                        <table className='stats-toc'>
                            <tr>
                                <td className='stats-h3'><span className='stats-toc-hoverable'>Project 2: Textile Waste</span></td>
                            </tr>
                            <tr>
                                <td className='stats-toc-indent'><span className='stats-toc-hoverable'>Part 1: Fast Fashion Videos</span></td>
                            </tr>
                            <tr>
                                <td className='stats-toc-indent'><span className='stats-toc-hoverable'>Part 2: Clircular Economy and Sustainability</span></td>
                            </tr>
                            <tr>
                                <td className='stats-toc-indent'><span className='stats-toc-hoverable'>Part 3: Textile Waste PSA</span></td>
                            </tr>
                            <tr>
                                <td className='stats-h3 pt-3'><span className='stats-toc-hoverable'>Project 2 Reflection</span></td>
                            </tr>
                            <tr>
                                <td className='stats-h3'><span className='stats-toc-hoverable'>Project 3</span></td>
                            </tr>
                            <tr>
                                <td className='stats-h3'><span className='stats-toc-hoverable'>Project 3 Reflection</span></td>
                            </tr>
                            <tr>
                                <td className='stats-h3'><span className='stats-toc-hoverable'>Project 4</span></td>
                            </tr>
                            <tr>
                                <td className='stats-h3'><span className='stats-toc-hoverable'>Project 4 Reflection</span></td>
                            </tr>
                            <tr>
                                <td className='stats-h3'><span className='stats-toc-hoverable'>MyOpenMath Reflection Assessment</span></td>
                            </tr>
                            <tr>
                                <td className='stats-h3'><span className='stats-toc-hoverable'>Weekly Videos Reflection Assessment</span></td>
                            </tr>
                            <tr>
                                <td className='stats-h3'><span className='stats-toc-hoverable'>Overall Course Self-Reflection</span></td>
                            </tr>
                        </table>
                    </Row>
                </Col>
            </Row>

            <Row>
                {/* SIDE NAV */}
                <Col className='p-0 bg-black' xs='auto'>
                    <div className='stats-side-nav'>
                        <p className='stats-toc-hoverable'>Project 2: Textile Waste</p>
                        <p className='stats-toc-hoverable stats-toc-indent active'>Part 1: Fast Fashion Videos</p>
                        <p className='stats-toc-hoverable stats-toc-indent'>Part 2: Clircular Economy and Sustainability</p>
                        <p className='stats-toc-hoverable stats-toc-indent'>Part 3: Textile Waste PSA</p>
                        <p className='stats-toc-hoverable'>Project 2 Reflection</p>
                        <p className='stats-toc-hoverable'>Project 3</p>
                        <p className='stats-toc-hoverable'>Project 3 Reflection</p>
                        <p className='stats-toc-hoverable'>Project 4</p>
                        <p className='stats-toc-hoverable'>Project 4 Reflection</p>
                        <p className='stats-toc-hoverable'>MyOpenMath Reflection Assessment</p>
                        <p className='stats-toc-hoverable'>Weekly Videos Reflection Assessment</p>
                        <p className='stats-toc-hoverable'>Overall Course Self-Reflection</p>
                    </div>
                </Col>

                {/* PORTFOLIO CONTENT */}
                <Col className='p-0'>

                    {/* Project 2 */}
                    <Row className='stats-project2'>
                        <Col>
                            <h3>Project 2 – Textile Waste (Part 1)</h3>
                            <p>Patrick Lindsay, Nick Walker, Cameron Price 3 points</p>
                            <h4>Part 1 – Watch and discuss the following Videos: 12 points</h4>
                            <ol type='1' className='ms-5'>
                                <li>
                                    <a href='https://www.youtube.com/watch?v=uou_223HFns' target='_blank' rel='noreferrer'>
                                        Ghana becomes dumping ground for the world’s unwanted used clothes
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.youtube.com/watch?v=2RPq_v8WEkA' target='_blank' rel='noreferrer'>
                                        FABSCRAP Helps Fashion Brands Recycle Textile Waste/ One Small Step
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.youtube.com/watch?v=F6R_WTDdx7I' target='_blank' rel='noreferrer'>
                                        Fast Fashion is hot garbage
                                    </a>
                                </li>
                            </ol>
                            <p>
                                Everyone in the group must participate in this discussion. You can respond to the prompts below or you can let your discussion meander a bit based on the interests of the group.  Your discussion must show that you watched all the videos so you should be talking about the situation in Ghana, how small companies are trying to help solve the textile waste problem, and the role of fast fashion in the problem.</p>
                            <p>
                                Prompt 1: In your own words describe the textile pollution problem in Ghana.  What images did you find disturbing, or what did you learn from the video?  Is there anything that you could do differently in your own life? How does textile waste affect global equity?
                            </p>
                            <p>
                                Prompt 2: What part of the FABSCRAP operation did you find most enlightening?  Did seeing the volunteers in that company inspire you to find something locally to get involved with? Do you know of other companies that are trying to help with a similar problem?  What can we, as consumers, do when we contribute 1 pound of waste for every 40 pounds of waste created by industry?
                            </p>
                            <p>
                                Prompt 3:  What would you tell someone who says, “I am not part of the problem, I always donate my used clothing?”  How did fast fashion evolve over time and why is it difficult to get rid of that culture?  How does money and greed play a part in the fashion industry?  How have you personally been involved with this industry? 
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
        </Container>
    )
}