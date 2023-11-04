import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypingText from '../components/TypingText';

import '../styles/Portfolio.css';
import WebDev from './WebDev';
import useWindowWidth from '../hooks/useWindowWidth';
import SoftwareDev from './SoftwareDev';
import OpenSource from './OpenSource';
import HeroNavigation from '../components/HeroNavigaion';

import WebDevNavImg from '../resources/images/PortfolioNav/WebDevNavImg.jpg';
import SoftwareDevNavImg from '../resources/images/PortfolioNav/JavaNavImg.jpg';
import OpenSourceNavImg from '../resources/images/PortfolioNav/OpenSourceNavImg.png';
import AutomotiveNavImg from '../resources/images/PortfolioNav/AutomotiveNavImg.jpg';
import PhotographyNavImg from '../resources/images/PortfolioNav/PhotographyNavImg.png';

const mobileBreakpoint = 768; // Aligns with Bootstrap MD breakpoint

export default function Portfolio({ scrollRef, headingTypedCallback }) {
  const [mobileMode, setMobileMode] = useState(true);
  const windowWidth = useWindowWidth();

  const webDevRef = useRef();
  const softwareDevRef= useRef();
  const openSourceRef = useRef();
  const automotiveRef = useRef();
  const photographyRef = useRef();

  useEffect(() => {
    if (windowWidth > mobileBreakpoint) setMobileMode(false);
    else setMobileMode(true);
  }, [windowWidth]);

  const onNavSelect = (link) => {
    switch(link) {
      case '/web':
        webDevRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case '/software':
        softwareDevRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case '/open_source':
        openSourceRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case '/automotive':
        automotiveRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case '/photography':
        photographyRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default: 
        console.log('Link not recognized ['+link+']');
    }
  }

  return (
    <Container fluid className='p-0' ref={scrollRef}>
      <Row className='portfolio__row bg-gradient-down'>
        <Col className='p-0 col-12'>
          <Row>
            <Col className='p-0 col-12'>
              <h1 className='route-header padding-margins mb-4'>
                <TypingText text='/portfolio' doneTypingCallback={headingTypedCallback} />
              </h1>
            </Col>
          </Row>
          <Row>
            <Col className='col-12 padding-margins-n2'>
              <HeroNavigation
                navLinks={[
                  {text: '/web', img: WebDevNavImg},
                  {text: '/software', img: SoftwareDevNavImg},
                  {text: '/open_source', img: OpenSourceNavImg},
                  {text: '/automotive', img: AutomotiveNavImg},
                  {text: '/photography', img: PhotographyNavImg}
                ]}
                navLinkCallback={onNavSelect}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Web Development */}
      <WebDev scrollRef={webDevRef} mobileMode={mobileMode} />

      {/* Object oreineted programming */}
      <SoftwareDev scrollRef={softwareDevRef} />

      {/* Open Source */}
      <OpenSource scrollRef={openSourceRef} />

      {/* Automotive */}

      {/* Photography */}
    </Container>
  );
};