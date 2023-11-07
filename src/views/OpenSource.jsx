import React from "react";
import { Col, Row } from "react-bootstrap";

import PortfolioCarousel from "../components/PortfolioCarousel";
import TruncatedArticle from "../components/TruncatedArticle";

import DartLogo from '../resources/logos/DartLogo';
import FlutterLogo from "../resources/logos/FlutterLogo";
import FlutterCommit from '../resources/images/Flutter/FlutterCommit.png';
import FlutterDesignDiscussion from '../resources/images/Flutter/FlutterDesignDiscussion.png';
import LinkIcon from "../resources/icons/LinkIcon";

export default function OpenSource({ scrollRef }) {
  return (
    <Row className='bg-gradient-down pb-10' ref={scrollRef}>
      <Col className='p-0'>
        <h1 className='route-header padding-margins'>/open_source</h1>

        {/* Flutter */}
        <Row className='portfolio__row padding-margins d-block d-xl-flex pb-4'>
          <Col className='py-4 px-0 col-12 col-xl-4 d-flex align-items-center'>
            <div>
              <h3>
                Flutter
                <a href='https://github.com/flutter/flutter' target='_blank' rel='noreferrer' title='Flutter Github repo' className='p-2'>
                  <LinkIcon />
                </a>
              </h3>

              <TruncatedArticle
                uniqueID={'flutterDescription'}
                visibleParagraph={
                  <p>
                    During my coursework, I had the opportunity to learn about contributing to
                    open source projects. As a team of 4, we were paired with mentor who works at Google
                    on the Flutter Framework. <a href="https://flutter.dev/" target='_blank' rel='noreferrer'>Flutter</a> is a cross platform app development framework that
                    allows you to create one app for all the major platforms. Flutter uses
                    the <a href="https://dart.dev/" target='_blank' rel='noreferrer'>Dart</a> programming
                    language, which we had to learn.
                  </p>
                }
                truncatedParagraphs={
                  <><p>
                    After getting our environments set up, reading all the documentation, and learning
                    about Dart, we started working on open issues. The issue I took on was a <a href="https://github.com/flutter/flutter/issues/93508" target='_blank' rel='noreferrer'>feature request</a> for
                    a month/year mode to the  Cupertino (Apple's
                    design system) Date Picker. I got to dive deep into the functionality and testing
                    pipelines that exist for the Date Picker and add in the new mode with its own tests.
                    I created a <a href="https://github.com/flutter/flutter/pull/125603" target='_blank' rel='noreferrer'>PR</a>,
                    recieved feedback, and ultimatly the changes merged!
                  </p>
                  <p>
                    Finally, as a group we started a <a href="https://docs.google.com/document/d/1Ib5ztLzc19e1Uggz16BFlrJMg1TOdYLyP-WqtTpDltM/edit?resourcekey=0-11oVmOsTHLD5fqxdAHZqNg#heading=h.pub7jnop54q0#enable-force-dark" target='_blank' rel='noreferrer'>design discussion</a> to
                    resolve some conflicting issues regarding the Date Picker's functionality and how
                    it differs from the Native IOS functionallity. Our mentor presented our findings
                    during a meeting with other Googlers for feedback.
                  </p></>
                }
              />  
              
              <div className='text-center p-4'>
                <DartLogo className='portfolio-logo' />
                <FlutterLogo className='portfolio-logo' />
              </div>
            </div>
          </Col>
          <Col className='p-0 py-xl-4 ps-xl-5 col-12 col-xl-8 d-flex align-items-center'>
            <PortfolioCarousel
              desktopImages={[
                {src: FlutterCommit, alt: 'My merged pull request: Added Cupertino Date Picker month year mode.'},
                {src: FlutterDesignDiscussion, alt: 'Cupertino Date Picker Refactor pubilc document.'}
              ]}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}