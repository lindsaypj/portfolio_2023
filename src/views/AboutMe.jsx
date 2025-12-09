import React, { useReducer } from "react";

import TypingText from '../components/TypingText';
import AsciiPortrait from '../components/ascii-portrait';
import RevolvingTypingText from "../components/RevolvingTypingText";
import { Col, Container, Row } from "react-bootstrap";

import '../styles/AboutMe.css';
import { aboutMeTitles } from '../resources/text/subtitles';
import GitHubLogo from '../resources/logos/GitHubLogo';
import LinkedInLogo from '../resources/logos/LinkedInLogo';


function typedReducer(state, action) {
  const nextState = {...state}
  switch(action.text) {
    case 'header':
      nextState.header = action.typed
      break;
    case 'name':
      nextState.name = action.typed
      break;
    case 'title':
      nextState.title = action.typed
      break;
    case 'desc':
      nextState.desc = action.typed
      break;
    case 'github':
      nextState.github = action.typed
      break;
    case 'linkedin':
      nextState.linkedin = action.typed
      break;
    default:
      return state
  }
  return nextState
}


export default function AboutMe({ mobileMode, terminalHasFocus }) {

  ////    INITIALIZATION    ////

  const [headersTyped, setHeadersTyped] = useReducer(typedReducer, {header: false, name: false, title: false, github: false, linkedin: false, desc: false});


  ////    RENDERING    ////

  return (
    <>
    <Container fluid className='p-0'>
      {/* Hero Section */}
      <Row className='hero-row'>
        <Col className="p-0">
        
          <AsciiPortrait visible={headersTyped.header} mobileMode={mobileMode} />

          <h1 className='about-me__header route-header padding-margins bg-gradient-down'>
            <TypingText
              text="/about_me"
              doneTypingCallback={() => { setHeadersTyped({text: 'header', typed: true}) }}
              useCursor
            />
          </h1>
          
          <div className='about-me__title padding-margins'>
            <h2>
              <TypingText
                text={'Patrick Lindsay'}
                charInterval={50}
                shouldType={headersTyped.header}
                doneTypingCallback={() => { setHeadersTyped({text: 'name', typed: true}) }}
                fillUnrenderedSpace={false}
                useCursor
              />
            </h2>
            <h3>
              <RevolvingTypingText
                texts={aboutMeTitles}
                wordInterval={5000}
                charInterval={50}
                init={headersTyped.name}
                shouldType={headersTyped.desc && !terminalHasFocus}
                firstTypedCallback={() => { setTimeout(() => {setHeadersTyped({text: 'title', typed: true})}, 0) }}
                useCursor={!terminalHasFocus}
              />
            </h3>
            <div>
              <div className='about-me__link--typing'>
                <TypingText
                  text={"Github----LinkedIn-"}
                  charInterval={50}
                  shouldType={headersTyped.title}
                  doneTypingCallback={() => { setTimeout(() => {setHeadersTyped({text: 'github', typed: true})}, 200) }}
                  fillUnrenderedSpace={false}
                  useCursor
                />
              </div>
              <a className='about-me__link me-2 me-md-3' href='https://github.com/lindsaypj' target='_blank' rel='noreferrer'>
                <div className='d-inline-block'>
                  <TypingText
                    text={'Github'}
                    charInterval={50}
                    shouldType={headersTyped.title}
                    doneTypingCallback={() => { setTimeout(() => {setHeadersTyped({text: 'github', typed: true})}, 200) }}
                    fillUnrenderedSpace={false}
                  />
                  <GitHubLogo className='ms-1 fs-1' />
                </div>
              </a>
              <a className='about-me__link' href='https://www.linkedin.com/in/lindsaypj/' target='_blank' rel='noreferrer'>
                <div className='d-inline-block'>
                  <TypingText
                    text={'LinkedIn'}
                    charInterval={50}
                    shouldType={headersTyped.github}
                    doneTypingCallback={() => { setTimeout(() => {setHeadersTyped({text: 'linkedin', typed: true})}, 100) }}
                    fillUnrenderedSpace={false}
                  />
                  <LinkedInLogo className='ms-1 fs-1' />
                </div>
              </a>
            </div>
            

            <p className="pt-4 col-xxl-5 col-lg-6 col-md-8 col-12">
              <TypingText
                text={'With a Bachelor of Applied Science in Software Development, I am more eager than ever to keep learning.'}
                charInterval={30}
                shouldType={headersTyped.linkedin}
                doneTypingCallback={() => { setTimeout(() => {setHeadersTyped({text: 'desc', typed: true})}, 1000) }}
                fillUnrenderedSpace={true}
                useCursor
              />
            </p>
          </div>

        </Col>
      </Row>
    </Container>
    </>
  );
}