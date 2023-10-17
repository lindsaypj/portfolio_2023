import React, { useEffect, useRef, useState, useCallback } from "react";
import useScrollPos from '../hooks/useScrollPos';

import TypingText from '../components/TypingText';
import AsciiPortrait from '../components/ascii-portrait';
import { Col, Container, Row } from "react-bootstrap";

import '../styles/AboutMe.css';

export default function AboutMe({ headingTypedCallback, setTerminalHero, headingTyped }) {
  // HOOKS
  const textSection = useRef();

  const [paragraphsTyped, setParagraphsTyped] = useState(0);
  const scrollPos = useScrollPos();

  /* Observers for dynamic content */
  useEffect(() => {
    /* Observer to start typing about me text when visible */
    const textObserver = new IntersectionObserver((entries, observer) => {
      const trigger = entries[0];
      if (trigger.isIntersecting) {
        setParagraphsTyped(1);
        observer.unobserve(textSection.current);
      }
    });
    textObserver.observe(textSection.current);

    return () => {
      setTerminalHero(false);
    }
  }, [setTerminalHero]);

  useEffect(() => {
    if (scrollPos > 0) {
      setTerminalHero(false);
    }
    else {
      setTerminalHero(true);
    }
  }, [scrollPos, setTerminalHero]);

  const handleParagraphTyped = useCallback(() => {
    setParagraphsTyped(paragraphsTyped + 1);
  }, [paragraphsTyped]);

    return (
      <>
      <Container fluid className='p-0'>
        {/* Hero Section */}
        <Row className="hero-row">
          <Col className="p-0">
          
            <AsciiPortrait visible={headingTyped} />

            <h1 className='route-header padding-margins'>
              <TypingText text="/about_me" doneTypingCallback={headingTypedCallback} />
            </h1>
            
            <div className='p-2'>
              <h3 className='about-me__title'>
                Software Engineer
              </h3>
            </div>
          </Col>
        </Row>

        {/* Brief Bio */}
        <Row className='about-me__row'>
          <Col className='p-0 bg-black bg-opacity-75'>
            <div className='about-me__text padding-margins'>
              <div ref={textSection}>
                <p>
                  <TypingText
                    text='I just received my Bachelor of Applied Science in Software Development from
                          Green River College, but I am more eager than ever to keep learning.'
                    charInterval={10}
                    shouldType={paragraphsTyped >= 1}
                    doneTypingCallback={handleParagraphTyped}
                  />
                </p>
                <p>
                  <TypingText
                    text='I quickly adopt new skills and software. There is nothing more satisfying than
                          facing a challenge, finding a solution, and realizing what you thought was near
                          impossible, is in fact achievable.'
                    charInterval={10}
                    shouldType={paragraphsTyped >= 2}
                    doneTypingCallback={handleParagraphTyped}
                  />
                </p>
                <p>
                  <TypingText
                    text='I question everything, and learn anything.'
                    charInterval={10}
                    shouldType={paragraphsTyped >= 3}
                  />
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </>
    );
}