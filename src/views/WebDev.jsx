import React from 'react';
import { Row, Col } from 'react-bootstrap';

import PortfolioCarousel from '../components/PortfolioCarousel';

import '../styles/WebDev.css';
import MembershipInformationViewImg from '../resources/images/MembershipInformationView.png';
import MembershipInformationViewMobileImg from '../resources/images/MembershipInformationViewMobile.png';
import MembershipInformationEditImg from '../resources/images/MembershipInformationEdit.png';
import MembershipInformationEditMobileImg from '../resources/images/MembershipInformationEditMobile.png';
import SudokuAccount from '../resources/images/SudokuAccount.png';
import SudokuAccountThemed from '../resources/images/SudokuAccountThemed.png';
import SudokuGame from '../resources/images/SudokuGame.png';
import SudokuHome from '../resources/images/SudokuHome.png';
import SudokuLogin from '../resources/images/SudokuLogin.png';
import REILogo from '../resources/images/REILogo';
import VueLogo from '../resources/images/VueLogo';
import ColormindLogo from '../resources/images/ColormindLogo';
import ReactLogo from '../resources/images/ReactLogo';
import SpringLogo from '../resources/images/SpringLogo';
import GoogleCloudLogo from '../resources/images/GoogleCloudLogo.png';


export default function WebDev({ mobileMode }) {
  return (
    <Row className='bg-black bg-opacity-75'>
      <Col className='p-0'>
        <h1 className='route-header padding-margins'>/web_development</h1>

        {/* REI Membership Dashboard */}
        <Row className='web-dev__row padding-margins'>
          <Col className='py-4 px-0 col-12 col-xl-4 d-flex align-items-center'>
            <div>
              <h3>REI Membership Dashboard</h3>
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
              <p>
                If you have an REI Membership, visit the <a href='https://www.rei.com/membership/dashboard' target='_blank' rel='noreferrer'>Membership Dashboard</a> to
                see my changes live in production!
              </p>
              <div className='text-center p-4'>
                <REILogo className='logo-dark portfolio-logo' />
                <VueLogo className='portfolio-logo' />
                <SpringLogo className='portfolio-logo' />
              </div>
            </div>
          </Col>
          <Col className='p-0 p-xl-4 pe-xl-0 col-12 col-xl-8 d-flex align-items-center'>
            <PortfolioCarousel
              desktopImages={[
                {src: MembershipInformationViewImg, alt: 'REI Membership dashboard showing membership Name, email, phone number, and address.'},
                {src: MembershipInformationEditImg, alt: 'REI Membership dashboard edit form with Name, email, phone number, and address.'}
              ]}
              mobileImages={[
                {src: MembershipInformationViewMobileImg, alt: 'REI Membership dashboard showing membership Name, email, phone number, and address.'},
                {src: MembershipInformationEditMobileImg, alt: 'REI Membership dashboard edit form with Name, email, phone number, and address.'}
              ]}
              showMobile={mobileMode}
            />
          </Col>
        </Row>

        {/* Sudoku */}
        <Row className='web-dev__row padding-margins'>
          <Col className='py-4 px-0 col-12 col-xl-4 d-flex align-items-center'>
            <div>
              <h4>Sudoku In the Clouds</h4>
              <p>
                Powered by my own <a href='https://github.com/lindsaypj/Sudoku-API' target='_blank' rel='noreferrer'>Sudoku API</a>,
                I designed a front-end application
                called <a href='https://github.com/lindsaypj/Sudoku-in-the-Clouds' target='_blank' rel='noreferrer'>Sudoku In the Clouds</a>.
                You can play 4x4, 9x9, or 16x16 board
                sizes. With an account, you can also save your settings, preferences, and game progress.
              </p>
              <p>
                In addition to the Sudoku API that enables the gameplay, I used an API
                called <a href='http://colormind.io/' target='_blank' rel='noreferrer'>Colormind</a> that
                generates themes using color theory. These colors are used to style the
                application and are stored in the user's preferences.
              </p>
              <div className='text-center p-4'>
                <ColormindLogo />
                <ReactLogo className='portfolio-logo' />
                <SpringLogo className='portfolio-logo' />
                <a href='https://cloud.google.com/' target='_blank' rel='noreferrer' >
                  <img src={GoogleCloudLogo} className='portfolio-logo h-100' alt='Google Cloud Platform' />
                </a>
              </div>
            </div>
          </Col>
          <Col className='p-0 p-xl-4 pe-xl-0 col-12 col-xl-8 d-flex align-items-center'>
          <PortfolioCarousel
              desktopImages={[
                {src: SudokuHome, alt: 'Sudoku In the Clouds home page with Menu, Login, and Play buttons.'},
                {src: SudokuLogin, alt: 'Login page with an option to create a free account. With an account, you can track completed games and save game preferences.'},
                {src: SudokuAccount, alt: 'Example account page. Review and edit player stats, settings, and preferences.'},
                {src: SudokuAccountThemed, alt: 'Example accunt page with custom prefernces that change the colors of the page.'},
                {src: SudokuGame, alt: 'An partially complete game of Sudoku. The page colors match the custom preferences.'}
              ]}
            />
          </Col>
        </Row>
        
        {/* Neurian */}
      </Col>
    </Row>
  );
}