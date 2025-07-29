import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import TypingText from "../components/TypingText";
import PortfolioProject from "../components/portfolio/PortfolioProject";

import MembershipInformationViewImg from '../resources/images/REI/MembershipInformationView.webp';
import MembershipInformationViewImgPlaceholder from '../resources/images/REI/placeholders/MembershipInformationView.webp';
import MembershipInformationViewMobileImg from '../resources/images/REI/MembershipInformationViewMobile.webp';
import MembershipInformationViewMobileImgPlaceholder from '../resources/images/REI/placeholders/MembershipInformationViewMobile.webp';
import MembershipInformationEditImg from '../resources/images/REI/MembershipInformationEdit.webp';
import MembershipInformationEditImgPlaceholder from '../resources/images/REI/placeholders/MembershipInformationEdit.webp';
import MembershipInformationEditMobileImg from '../resources/images/REI/MembershipInformationEditMobile.webp';
import MembershipInformationEditMobileImgPlaceholder from '../resources/images/REI/placeholders/MembershipInformationEditMobile.webp';

import "../styles/Portfolio.css"
import REILogo from "../resources/logos/REILogo";
import VueLogo from "../resources/logos/VueLogo";
import SpringLogo from "../resources/logos/SpringLogo";
import SudokuDev from "../components/sudoku/SudokuDev";

export default function DevPage({ content }) {

  ////   RENDERING   ////

  switch (content) {
    case '/sudoku':
      return (
        <SudokuDev />
      );
    default:
      return (
        <Container fluid className='p-0 bg-gradient-down'>
          <Row className='portfolio__row--hero p-0'>
            <Col className='p-0 col-12'>
              <Row>
                <Col className='p-0 col-12'>
                  <h1 className='portfolio-header padding-margins mb-4'>
                    <TypingText text='/portfolio' />
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col className='col-12 padding-margins-n2'>
                  
                </Col>
              </Row>
            </Col>
          </Row>

          <PortfolioProject
            title={"REI Membership Dashboard"}
            id={'REIDescription'}
            description={[
              `As a Software Engineer Intern with the Membership team at REI, I enabled the
              editing of membership information for all 24.5 million members. Instead of
              calling into an REI Service Center, members can now make changes from their
              online account. Jumping in with no Vue.js experience, I quickly learned by
              developing and examining the existing front-end application.`,
              `One of my favorite parts of the internship was getting to speak with all the
              people involved in making the changes possible. I worked with the designer to
              refine and clarify design details, I worked with the backend developer to
              resolve API issues, I worked with QA to find and test edge-case user
              interactions, and I got lots of feedback from senior front-end developers.`,
              `If you have an REI Membership, visit the Membership Dashboard to see my
              changes live in production!`
            ]}
            images={{
              desktopImages: [
                {
                  src: MembershipInformationViewImg, placeholder: MembershipInformationViewImgPlaceholder,
                  alt: 'REI Membership dashboard showing membership Name, email, phone number, and address.',
                  ratio: 'ar-3-2'
                },
                {
                  src: MembershipInformationEditImg, placeholder: MembershipInformationEditImgPlaceholder,
                  alt: 'REI Membership dashboard edit form with Name, email, phone number, and address.',
                  ratio: 'ar-3-2'
                }
              ],
              mobileImages: [
                {
                  src: MembershipInformationViewMobileImg, placeholder: MembershipInformationViewMobileImgPlaceholder,
                  alt: 'REI Membership dashboard showing membership Name, email, phone number, and address.',
                  ratio: 'ar-16-33'
                },
                {
                  src: MembershipInformationEditMobileImg, placeholder: MembershipInformationEditMobileImgPlaceholder,
                  alt: 'REI Membership dashboard edit form with Name, email, phone number, and address.',
                  ratio: 'ar-16-33'
                }
              ]
            }}
            logos={<>
              <VueLogo className='portfolio-logo' />
              <REILogo className='logo-dark portfolio-logo' />
              <SpringLogo className='portfolio-logo' />
            </>}
            mobileMode={false}
          />
        </Container>
      );
    
  }
}