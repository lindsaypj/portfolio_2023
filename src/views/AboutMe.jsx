import React, { useEffect, useReducer, useRef } from "react";

import TypingText from '../components/TypingText';
import AsciiPortrait from '../components/ascii-portrait';
import RevolvingTypingText from "../components/RevolvingTypingText";
import { Badge, Col, Container, Row } from "react-bootstrap";

import '../styles/AboutMe.css';
import GRCLogo from '../resources/logos/GRCLogo';
import { aboutMeSkills } from '../resources/text/skills';
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
    default:
      return state
  }
  return nextState
}


export default function AboutMe({ mobileMode }) {

  ////    INITIALIZATION    ////

  const textSection = useRef();
  const [headersTyped, setHeadersTyped] = useReducer(typedReducer, {header: false, name: false});


  ////    STATE MANAGMENT    ////

  // Show Bio when visible
  useEffect(() => {
    const textSelectionInstance = textSection.current;
    const textObserver = new IntersectionObserver((entries, observer) => {
      const trigger = entries[0];
      if (trigger.isIntersecting) {
        showBio();
        observer.unobserve(textSelectionInstance);
        observer.disconnect();
      }
    });
    textObserver.observe(textSelectionInstance);

    return () => {
      textObserver.unobserve(textSelectionInstance);
      textObserver.disconnect();
    }
  }, []);


  ////    RENDERING    ////

  const showBio = () => {
    textSection.current.classList.add('show');
  }

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
                wordInterval = {5000}
                charInterval= {50}
                shouldType={headersTyped.name}
              />
            </h3>
            <a className='about-me__link me-2 me-md-3' href='https://github.com/lindsaypj' target='_blank' rel='noreferrer'>
              <div className='d-inline-block'>
                GitHub
                <GitHubLogo className='ms-1' />
              </div>
            </a>
            <a className='about-me__link' href='https://www.linkedin.com/in/lindsaypj/' target='_blank' rel='noreferrer'>
              <div className='d-inline-block'>
                LinkedIn
                <LinkedInLogo className='ms-1' />
              </div>
            </a>
          </div>

        </Col>
      </Row>

      {/* Brief Bio */}
      <Row className='about-me__row bg-black bg-opacity-75'>
        <Col
          className='p-0'
          xs={12} xl={6} xxl={5}
        >
          <div className='about-me__bio padding-margins pe-xl-0'>
            <div ref={textSection}>
              <p>
                With a Bachelor of Applied Science in Software Development,
                I am more eager than ever to keep learning.
              </p>
              <p>
                I am confident I can adapt to any technology, however I am currently comfortable
                with agile development and the following tools and languages:
              </p>
            </div>
          </div>
        </Col>
        <Col
          className='p-0 text-center'
          xs={12} xl={6} xxl={7}
        >
          <div className='about-me__details padding-margins mx-xl-auto'>
            <div>
              <GRCLogo />

              <hr></hr>

              <div className='p-4'>
                {aboutMeSkills.map((skill) => (
                  <Badge key={skill} pill bg='light' text='dark' className='p-2 me-1'>{ skill }</Badge>
                ))}
              </div>
              
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}