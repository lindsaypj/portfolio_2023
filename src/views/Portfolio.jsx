import React, { useCallback, useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypingText from '../components/TypingText';

import '../styles/Portfolio.css';

import WebDev from './WebDev';
import SoftwareDev from './SoftwareDev';
import OpenSource from './OpenSource';
import HeroNavigation from '../components/HeroNavigaion';

import WebDevNavImg from '../resources/images/PortfolioNav/WebDevNavImg.jpg';
import SoftwareDevNavImg from '../resources/images/PortfolioNav/JavaNavImg.jpg';
import OpenSourceNavImg from '../resources/images/PortfolioNav/OpenSourceNavImg.png';
import AutomotiveNavImg from '../resources/images/PortfolioNav/AutomotiveNavImg.jpg';
import PhotographyNavImg from '../resources/images/PortfolioNav/PhotographyNavImg.png';
import Automotive from './Automotive';
import Photography from './Photography';

export default function Portfolio({ shouldScroll, page, setShouldScrollToRoute, headingTypedCallback, mobileMode }) {
  const portfolioRef = useRef();
  const webDevRef = useRef();
  const softwareDevRef= useRef();
  const openSourceRef = useRef();
  const automotiveRef = useRef();
  const photographyRef = useRef();

  const scrollToPortfolio = useCallback(() => {
    let scrollDistance;
    switch(page) {
      case '/portfolio/web':
        scrollDistance = webDevRef.current.getBoundingClientRect().top + window.scrollY;
        break;
      case '/portfolio/software':
        scrollDistance = softwareDevRef.current.getBoundingClientRect().top + window.scrollY;
        break;
      case '/portfolio/open_source':
        scrollDistance = openSourceRef.current.getBoundingClientRect().top + window.scrollY;
        break;
      case '/portfolio/automotive':
        scrollDistance = automotiveRef.current.getBoundingClientRect().top + window.scrollY;
        break;
      case '/portfolio/photography':
        scrollDistance = photographyRef.current.getBoundingClientRect().top + window.scrollY;
        break;
      default:
        scrollDistance = portfolioRef.current.getBoundingClientRect().top + window.scrollY;
    }
    
    window.scroll({
      top: scrollDistance,
      behavior: "smooth"
    });
    window.removeEventListener ('load', scrollToPortfolio);
  }, [page]);

  useEffect(() => {
    if (shouldScroll) {
      setTimeout(scrollToPortfolio, 50);
      setShouldScrollToRoute(false);
    }
  }, [shouldScroll, setShouldScrollToRoute, page, scrollToPortfolio]);

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
    <Container fluid className='p-0' ref={portfolioRef}>
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
                  {text: '/web', img: WebDevNavImg, imgAlt: 'Code'},
                  {text: '/software', img: SoftwareDevNavImg, imgAlt: 'Gears'},
                  {text: '/open_source', img: OpenSourceNavImg, imgAlt: 'Unlocked lock'},
                  {text: '/automotive', img: AutomotiveNavImg, imgAlt: 'Check engine light'},
                  {text: '/photography', img: PhotographyNavImg, imgAlt: 'Camera'}
                ]}
                navLinkCallback={onNavSelect}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <WebDev scrollRef={webDevRef} mobileMode={mobileMode} />

      <SoftwareDev scrollRef={softwareDevRef} />

      <OpenSource scrollRef={openSourceRef} />

      <Automotive scrollRef={automotiveRef} />

      <Photography scrollRef={photographyRef} />
    </Container>
  );
};