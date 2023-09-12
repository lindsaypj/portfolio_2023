import React from "react";
import { Row, Col } from "react-bootstrap";

import '../styles/WebDev.css';
import MembershipInformationViewImg from '../resources/images/MembershipInformationView.png';
import MembershipInformationViewMobileImg from '../resources/images/MembershipInformationViewMobile.png';
import MembershipInformationEditImg from '../resources/images/MembershipInformationEdit.png';
import MembershipInformationEditMobileImg from '../resources/images/MembershipInformationEditMobile.png';
import PortfolioCarousel from "../components/PortfolioCarousel";

export default function WebDev({ mobileMode }) {
  return (
    <Row className='bg-black bg-opacity-75'>
      <Col className='p-0'>
        <h1 className='route-header padding-margins'>/web_development</h1>

        {/* REI Membership Dashboard */}
        <Row className='web-dev__row padding-margins'>
          <Col className='d-flex py-4 px-0 col-12 col-lg-6 col-xl-4 align-items-center'>
            <div>
              <h4>REI Membership Dashboard</h4>
              <p>
                As a Software Engineer Intern with the Membership team at REI, I enabled all 24.5
                million members to edit their membership information. Jumping in with no Vue.js
                experience, I learned by developing and examining the existing front-end applicaion.
              </p>
              <p>
                The proposed technical design would reuse existing form utilities, but this led to
                unexpeced complexity. The new design had key differences which did not translate well.
                I took the initiative to rethink and advocate for a modified technical design with 
                the team lead. They ultimately agreed and I completed the changes on schedule.
              </p>
            </div>
          </Col>
          <Col className='d-flex p-0 p-lg-4 col-12 col-lg-6 col-xl-8 align-items-center'>
            <PortfolioCarousel
              desktopImages={[
                {src: MembershipInformationViewImg, alt: 'REI Membership dashboard showing membership Name, email, phone number, and address'},
                {src: MembershipInformationEditImg, alt: 'REI Membership dashboard edit form with Name, email, phone number, and address'}
              ]}
              mobileImages={[
                {src: MembershipInformationViewMobileImg, alt: 'REI Membership dashboard showing membership Name, email, phone number, and address'},
                {src: MembershipInformationEditMobileImg, alt: 'REI Membership dashboard edit form with Name, email, phone number, and address'}
              ]}
              showMobile={mobileMode}
            />
          </Col>
        </Row>

        {/* Sudoku */}
        <Row className='web-dev__row padding-margins'>
          <Col className='py-4 px-0 col-12 col-md-6 col-lg-4'>
            <h4>Sudoku API</h4>
            <p>
              
            </p>
            <p>
              
            </p>
          </Col>
          <Col className='p-4 col-12 col-md-6 col-lg-8'>
            
          </Col>
        </Row>
        {/* Neurian */}
      </Col>
    </Row>
  );
}