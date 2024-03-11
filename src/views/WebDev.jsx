import React from 'react';
import { Row, Col } from 'react-bootstrap';

import PortfolioCarousel from '../components/PortfolioCarousel';
import TruncatedArticle from '../components/TruncatedArticle';

import MembershipInformationViewImg from '../resources/images/REI/MembershipInformationView.webp';
import MembershipInformationViewImgPlaceholder from '../resources/images/REI/placeholders/MembershipInformationView.webp';
import MembershipInformationViewMobileImg from '../resources/images/REI/MembershipInformationViewMobile.webp';
import MembershipInformationViewMobileImgPlaceholder from '../resources/images/REI/placeholders/MembershipInformationViewMobile.webp';
import MembershipInformationEditImg from '../resources/images/REI/MembershipInformationEdit.webp';
import MembershipInformationEditImgPlaceholder from '../resources/images/REI/placeholders/MembershipInformationEdit.webp';
import MembershipInformationEditMobileImg from '../resources/images/REI/MembershipInformationEditMobile.webp';
import MembershipInformationEditMobileImgPlaceholder from '../resources/images/REI/placeholders/MembershipInformationEditMobile.webp';
import SudokuAccount from '../resources/images/Sudoku/SudokuAccount.webp';
import SudokuAccountPlaceholder from '../resources/images/Sudoku/placeholders/SudokuAccount.webp';
import SudokuAccountThemed from '../resources/images/Sudoku/SudokuAccountThemed.webp';
import SudokuAccountThemedPlaceholder from '../resources/images/Sudoku/placeholders/SudokuAccountThemed.webp';
import SudokuGame from '../resources/images/Sudoku/SudokuGame.webp';
import SudokuGamePlaceholder from '../resources/images/Sudoku/placeholders/SudokuGame.webp';
import SudokuHome from '../resources/images/Sudoku/SudokuHome.webp';
import SudokuHomePlaceholder from '../resources/images/Sudoku/placeholders/SudokuHome.webp';
import SudokuLogin from '../resources/images/Sudoku/SudokuLogin.webp';
import SudokuLoginPlaceholder from '../resources/images/Sudoku/placeholders/SudokuLogin.webp';
import REILogo from '../resources/logos/REILogo';
import VueLogo from '../resources/logos/VueLogo';
import ColormindLogo from '../resources/logos/ColormindLogo';
import ReactLogo from '../resources/logos/ReactLogo';
import SpringLogo from '../resources/logos/SpringLogo';
import GoogleCloudLogo from '../resources/logos/GoogleCloudLogo.png';
import AdviseItHome from '../resources/images/AdviseIt/AdviseItHome.webp';
import AdviseItHomePlaceholder from '../resources/images/AdviseIt//placeholders/AdviseItHome.webp';
import AdviseItAdmin from '../resources/images/AdviseIt/AdviseItAdmin.webp';
import AdviseItAdminPlaceholder from '../resources/images/AdviseIt//placeholders/AdviseItAdmin.webp';
import AdviseItPlan from '../resources/images/AdviseIt/AdviseItPlan.webp';
import AdviseItPlanPlaceholder from '../resources/images/AdviseIt//placeholders/AdviseItPlan.webp';
import AdviseItFooterLinks from '../resources/images/AdviseIt/AdviseItFooterLinks.webp';
import AdviseItFooterLinksPlaceholder from '../resources/images/AdviseIt//placeholders/AdviseItFooterLinks.webp';
import PHPLogo from '../resources/logos/PHPLogo';
import BootstrapLogo from '../resources/logos/bootstrap-logo.webp';
import MySQLLogo from '../resources/logos/MySQLLogo';
import LinkIcon from '../resources/icons/LinkIcon';

export default function WebDev({ scrollRef, mobileMode }) {
  return (
    <Row className='bg-gradient-down pb-10' ref={scrollRef}>
      <Col className='p-0'>
        <h1 className='route-header padding-margins mt-4'>/web</h1>

        {/* REI Membership Dashboard */}
        <Row className='portfolio__row padding-margins d-block d-xl-flex'>
          <Col className='py-4 px-0 col-12 col-xl-4 d-flex align-items-center'>
            <div>
              <h3>REI Membership Dashboard</h3>

              <TruncatedArticle
                uniqueID={'REIDescription'}
                visibleParagraph={
                  <p>
                    As a Software Engineer Intern with the Membership team at REI, I enabled the
                    editing of membership information for all 24.5 million members. Instead of
                    calling into an REI Service Center, members can now make changes from their
                    online account. Jumping in with no Vue.js experience, I quickly learned by
                    developing and examining the existing front-end application.
                  </p>
                }
                truncatedParagraphs={
                  <><p>
                    One of my favorite parts of the internship was getting to speak with all the
                    people involved in making the changes possible. I worked with the designer to
                    refine and clarify design details, I worked with the backend developer to
                    resolve API issues, I worked with QA to find and test edge-case user
                    interactions, and I got lots of feedback from senior front-end developers.
                  </p>
                  <p>
                    If you have an REI Membership, visit the <a href='https://www.rei.com/membership/dashboard' target='_blank' rel='noreferrer'>Membership Dashboard</a> to
                    see my changes live in production!
                  </p></>
                }
              />

              <div className='text-center m-4'>
                <REILogo className='logo-dark portfolio-logo' />
                <VueLogo className='portfolio-logo' />
                <SpringLogo className='portfolio-logo' />
              </div>
            </div>
          </Col>
          <Col className='p-0 py-xl-4 ps-xl-5 col-12 col-xl-8 d-flex align-items-center'>
            <PortfolioCarousel
              desktopImages={[
                {
                  src: MembershipInformationViewImg, placeholder: MembershipInformationViewImgPlaceholder,
                  alt: 'REI Membership dashboard showing membership Name, email, phone number, and address.'
                },
                {
                  src: MembershipInformationEditImg, placeholder: MembershipInformationEditImgPlaceholder,
                  alt: 'REI Membership dashboard edit form with Name, email, phone number, and address.'
                }
              ]}
              mobileImages={[
                {
                  src: MembershipInformationViewMobileImg, placeholder: MembershipInformationViewMobileImgPlaceholder,
                  alt: 'REI Membership dashboard showing membership Name, email, phone number, and address.'
                },
                {
                  src: MembershipInformationEditMobileImg, placeholder: MembershipInformationEditMobileImgPlaceholder,
                  alt: 'REI Membership dashboard edit form with Name, email, phone number, and address.'
                }
              ]}
              showMobile={mobileMode}
            />
          </Col>
        </Row>

        {/* Sudoku */}
        <Row className='portfolio__row padding-margins d-flex'>
          <Col className='py-4 px-0 col-12 col-xl-4 d-flex align-items-end align-items-xl-center order-1 order-xl-2'>
            <div>
              <h3>Sudoku In the Clouds</h3>

              <TruncatedArticle
                uniqueID={'SudokuDescription'}
                visibleParagraph={
                  <p>
                    Powered by my own <a href='https://github.com/lindsaypj/Sudoku-API' target='_blank' rel='noreferrer'>Sudoku API</a>,
                    I designed a front-end application
                    called <a href='https://github.com/lindsaypj/Sudoku-in-the-Clouds' target='_blank' rel='noreferrer'>Sudoku In the Clouds</a>.
                    You can play 4x4, 9x9, or 16x16 board
                    sizes. With an account, you can also save your settings, preferences, and game progress.
                  </p>
                }
                truncatedParagraphs={
                  <p>
                    In addition to the Sudoku API that enables the gameplay, I used an API
                    called <a href='http://colormind.io/' target='_blank' rel='noreferrer'>Colormind</a> that
                    generates themes using color theory. These colors are used to style the
                    application and are stored in the user's preferences.
                  </p>
                }
              />

              <p className='mt-3'>
                Demo: <a href='http://34.122.23.24:8080/' target='_blank' rel='noreferrer'>Sudoku In the Clouds</a>
              </p>

              <div className='text-center m-4'>
                <ColormindLogo />
                <ReactLogo className='portfolio-logo' />
                <SpringLogo className='portfolio-logo' />
                <a href='https://cloud.google.com/' target='_blank' rel='noreferrer' title='Google Cloud Platform' >
                  <img src={GoogleCloudLogo} className='portfolio-logo h-100' alt='Google Cloud Platform' />
                </a>
              </div>
            </div>
          </Col>
          <Col className='p-0 py-xl-4 pe-xl-5 col-12 col-xl-8 d-flex align-items-center order-2 order-xl-1'>
            <PortfolioCarousel
              desktopImages={[
                {
                  src: SudokuHome, placeholder: SudokuHomePlaceholder,
                  alt: 'Sudoku In the Clouds home page with Menu, Login, and Play buttons.'
                },
                {
                  src: SudokuLogin, placeholder: SudokuLoginPlaceholder,
                  alt: 'Login page with an option to create a free account. With an account, you can track completed games and save game preferences.'
                },
                {
                  src: SudokuAccount, placeholder: SudokuAccountPlaceholder,
                  alt: 'Example account page. Review and edit player stats, settings, and preferences.'
                },
                {
                  src: SudokuAccountThemed, placeholder: SudokuAccountThemedPlaceholder,
                  alt: 'Example accunt page with custom prefernces that change the colors of the page.'
                },
                {
                  src: SudokuGame, placeholder: SudokuGamePlaceholder,
                  alt: 'An partially complete game of Sudoku. The page colors match the custom preferences.'
                }
              ]}
            />
          </Col>
        </Row>
        
        {/* Advise It */}
        <Row className='portfolio__row padding-margins d-block d-xl-flex'>
          <Col className='py-4 px-0 col-12 col-xl-4 d-flex align-items-center'>
            <div>
              <h3>
                Advise IT
                <a href='https://github.com/lindsaypj/advise-it-capstone' target='_blank' rel='noreferrer' title='Advise IT Github repo' className='p-2'>
                  <LinkIcon />
                </a>
              </h3>
              <TruncatedArticle
                uniqueID={'AdviseITDescription'}
                visibleParagraph={
                  <p>
                    Working with Green River College Advisors, I led a team of 4 in the technical
                    design and implementation of Advise IT. Our tool allows advisors to accelerate the
                    process of creating academic plans for current and prospective students.
                  </p>
                }
                truncatedParagraphs={
                  <><p>
                    Each advisor has their own methods of plan development and management with their students.
                    Advise IT serves to standardize and centralize plans in one place for easier maintenance
                    and data analytics.
                  </p>
                  <p>
                    I contributed to many aspects of the product; I advocated for an atomic data storage
                    solution using SQL; I used PHP to securely interface with the database; I helped construct 
                    a custom router and controller; And I worked on injecting the data onto the page using
                    a combination of PHP templating and Asynchronous JavaScript.
                  </p></>
                }
              />

              <div className='text-center m-4'>
                <PHPLogo className='logo-dark portfolio-logo' />
                <a href='https://getbootstrap.com/' target='_blank' rel='noreferrer' title='Bootstrap'>
                  <img src={BootstrapLogo} className='portfolio-logo' alt='Bootstrap logo'/>
                </a>
                <MySQLLogo />
              </div>
            </div>
          </Col>
          <Col className='p-0 py-xl-4 ps-xl-5 col-12 col-xl-8 d-flex align-items-center'>
            <PortfolioCarousel
              desktopImages={[
                {
                  src: AdviseItHome, placeholder: AdviseItHomePlaceholder,
                  alt: 'Advise it new plan page. Create a blank, or standard plan.'
                },
                {
                  src: AdviseItPlan, placeholder: AdviseItPlanPlaceholder,
                  alt: 'Blank advising plan with fall, winter, spring, and summer quarters. You can add additional school years, add an advisor, or save.'
                },
                {
                  src: AdviseItAdmin, placeholder: AdviseItAdminPlaceholder,
                  alt: 'Table of academic schedules. Shows advisor, last saved date, and a URL to each plan.'
                },
                {
                  src: AdviseItFooterLinks, placeholder: AdviseItFooterLinksPlaceholder,
                  alt: 'Table of footer links that can be edited or deleted. New links can be added.'
                }
              ]}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}