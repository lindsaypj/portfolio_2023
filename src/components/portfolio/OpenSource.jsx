import React from "react";
import { Col, Row } from "react-bootstrap";

import PortfolioProject from './PortfolioProject';

import DartLogo from '../../resources/logos/DartLogo';
import FlutterLogo from "../../resources/logos/FlutterLogo";
import FlutterCommit from '../../resources/images/Flutter/FlutterCommit.webp';
import FlutterCommitPlaceholder from '../../resources/images/Flutter/placeholders/FlutterCommit.webp';
import FlutterDesignDiscussion from '../../resources/images/Flutter/FlutterDesignDiscussion.webp';
import FlutterDesignDiscussionPlaceholder from '../../resources/images/Flutter/placeholders/FlutterDesignDiscussion.webp';


export default function OpenSource({ scrollRef }) {
  return (
    <Row className='bg-gradient-down pb-10' ref={scrollRef}>
      <Col className='p-0'>
        <h1 className='portfolio-header padding-margins mt-4 mb-5'>/open_source</h1>

        {/* Flutter */}
        <PortfolioProject
          title={"Flutter"}
          id={'flutterDescription'}
          repoLink={"https://github.com/flutter/flutter"}
          description={[
            `During my coursework, I had the opportunity to learn about contributing to
              open source projects. We were paired with mentor from Google who works
              on the Flutter Framework. Flutter is a cross-platform app development framework that
              allows you to create one app for all the major platforms. Flutter uses
              the Dart programming language, which we had to learn.`,
            `The issue I took on was a feature request for a month/year mode to the  Cupertino (Apple's
              design system) Date Picker. I got to dive deep into the functionality and testing
              pipelines that exist for the Date Picker. I added in the new mode with its own tests.
              I created a Pull Request, recieved some feedback. Eventually, the changes merged!`,
            `I also joined a group of peers in starting a design discussion to resolve some conflicting
              issues regarding the Date Picker's functionality and how it differs from the Native IOS
              functionallity. Our mentor presented our findings during a meeting with other Googlers
              for feedback.`
          ]}
          logos={<>
            <DartLogo className='portfolio-logo' />
            <FlutterLogo className='portfolio-logo' />
          </>}
          images={{
            desktopImages: [
              {
                src: FlutterCommit, placeholder: FlutterCommitPlaceholder,
                alt: 'My merged pull request: Added Cupertino Date Picker month year mode.',
                ratio: 'ar-542-305'
              },
              {
                src: FlutterDesignDiscussion, placeholder: FlutterDesignDiscussionPlaceholder,
                alt: 'Cupertino Date Picker Refactor pubilc document.',
                ratio: 'ar-542-305'
              }
            ]
          }}
        />
      </Col>
    </Row>
  );
}