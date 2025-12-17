import React, { useCallback, useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypingText from '../components/TypingText';

import '../styles/Portfolio.css';

import WebDev from '../components/portfolio/WebDev';
import SoftwareDev from '../components/portfolio/SoftwareDev';
import OpenSource from '../components/portfolio/OpenSource';
import Automotive from '../components/portfolio/Automotive';
import Photography from '../components/portfolio/Photography';
import HeroNavigation from '../components/nav/HeroNavigaion';

import Bio from '../components/portfolio/Bio';
import { PORTFOLIO_HERO_SECTIONS } from '../resources/text/routes';


export default function Portfolio({ shouldScroll, page, setShouldScrollToRoute, mobileMode }) {
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
      <Row className='portfolio__row--hero bg-black bg-opacity-75'>
        <Col className='p-0 col-12'>
          <Row>
            <Col className='p-0 col-12'>
              <h1 className='portfolio-header padding-margins mb-4'>
                <TypingText text='/portfolio' />
              </h1>
            </Col>
          </Row>
          <Row>
            <Col className='padding-margins-n2 pe-lg-0' xs={12} lg={6} xl={7}>
              <HeroNavigation
                navLinks={PORTFOLIO_HERO_SECTIONS}
                navLinkCallback={onNavSelect}
              />
            </Col>

            {/* Bio/Skills */}
            <Col
              className='padding-margins'
              xs={12} lg={6} xl={5}
            >
              <Bio />
            </Col>
          </Row>
        </Col>
      </Row>

      <WebDev scrollRef={webDevRef} mobileMode={mobileMode} />

      <OpenSource scrollRef={openSourceRef} />

      <SoftwareDev scrollRef={softwareDevRef} />

      <Automotive scrollRef={automotiveRef} />

      <Photography scrollRef={photographyRef} />
    </Container>
  );
};