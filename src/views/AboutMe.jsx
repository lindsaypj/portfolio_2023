import React, { useEffect, useRef, useState, useCallback } from "react";
import useScrollPos from '../hooks/useScrollPos';

import TypingText from '../components/TypingText';
import AsciiPortrait from '../components/ascii-portrait';
import { Badge, Col, Container, Row } from "react-bootstrap";

import '../styles/AboutMe.css';
import GRCLogo from '../resources/logos/GRCLogo';
import { aboutMeSkills } from "../resources/text/skills";

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
        <Row className='hero-row'>
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
        <Row className='about-me__row bg-black bg-opacity-75'>
          <Col
            className='p-0'
            xs={12} xl={6} xxl={5}
          >
            <div className='about-me__bio padding-margins pe-xl-0'>
              <div ref={textSection}>
                <p>
                  <TypingText
                    text='I just received my Bachelor of Applied Science in Software Development,
                    but I am more eager than ever to keep learning.'
                    charInterval={10}
                    shouldType={paragraphsTyped >= 1}
                    doneTypingCallback={handleParagraphTyped}
                  />
                </p>
                <p>
                  <TypingText
                    text='I quickly adopt new skills and software. I am confident with Full-stack web
                          development, database management, and object oriented programming. I love 
                          pushing the limits of what I know.'
                    charInterval={10}
                    shouldType={paragraphsTyped >= 2}
                    doneTypingCallback={handleParagraphTyped}
                  />
                </p>
                <p>
                  <TypingText
                    text='My interests extend beyond software development to automotive and rock climbing.
                          One exciting achievement that still inspires me to this day was converting my car
                          from using an automatic transmission to using a manual transmission.'
                    charInterval={10}
                    shouldType={paragraphsTyped >= 3}
                    doneTypingCallback={handleParagraphTyped}
                  />
                </p>
                <p>
                  <TypingText
                    text='I am confident I can adapt to any technology, however I am currently comfortable
                          with agile development and the following tools and languages:'
                    charInterval={10}
                    shouldType={paragraphsTyped >= 4}
                  />
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