import React from 'react';
import { Row, Col } from 'react-bootstrap';

import PortfolioProject from './PortfolioProject';

import MembershipInformationViewImg from '../../resources/images/REI/MembershipInformationView.webp';
import MembershipInformationViewImgPlaceholder from '../../resources/images/REI/placeholders/MembershipInformationView.webp';
import MembershipInformationViewMobileImg from '../../resources/images/REI/MembershipInformationViewMobile.webp';
import MembershipInformationViewMobileImgPlaceholder from '../../resources/images/REI/placeholders/MembershipInformationViewMobile.webp';
import MembershipInformationEditImg from '../../resources/images/REI/MembershipInformationEdit.webp';
import MembershipInformationEditImgPlaceholder from '../../resources/images/REI/placeholders/MembershipInformationEdit.webp';
import MembershipInformationEditMobileImg from '../../resources/images/REI/MembershipInformationEditMobile.webp';
import MembershipInformationEditMobileImgPlaceholder from '../../resources/images/REI/placeholders/MembershipInformationEditMobile.webp';
import SudokuAccount from '../../resources/images/Sudoku/SudokuAccount.webp';
import SudokuAccountPlaceholder from '../../resources/images/Sudoku/placeholders/SudokuAccount.webp';
import SudokuAccountThemed from '../../resources/images/Sudoku/SudokuAccountThemed.webp';
import SudokuAccountThemedPlaceholder from '../../resources/images/Sudoku/placeholders/SudokuAccountThemed.webp';
import SudokuGame from '../../resources/images/Sudoku/SudokuGame.webp';
import SudokuGamePlaceholder from '../../resources/images/Sudoku/placeholders/SudokuGame.webp';
import SudokuHome from '../../resources/images/Sudoku/SudokuHome.webp';
import SudokuHomePlaceholder from '../../resources/images/Sudoku/placeholders/SudokuHome.webp';
import SudokuLogin from '../../resources/images/Sudoku/SudokuLogin.webp';
import SudokuLoginPlaceholder from '../../resources/images/Sudoku/placeholders/SudokuLogin.webp';
import REILogo from '../../resources/logos/REILogo';
import VueLogo from '../../resources/logos/VueLogo';
import ColormindLogo from '../../resources/logos/ColormindLogo';
import ReactLogo from '../../resources/logos/ReactLogo';
import SpringLogo from '../../resources/logos/SpringLogo';
import GoogleCloudLogo from '../../resources/logos/GoogleCloudLogo.png';
import AdviseItHome from '../../resources/images/AdviseIt/AdviseItHome.webp';
import AdviseItHomePlaceholder from '../../resources/images/AdviseIt//placeholders/AdviseItHome.webp';
import AdviseItAdmin from '../../resources/images/AdviseIt/AdviseItAdmin.webp';
import AdviseItAdminPlaceholder from '../../resources/images/AdviseIt//placeholders/AdviseItAdmin.webp';
import AdviseItPlan from '../../resources/images/AdviseIt/AdviseItPlan.webp';
import AdviseItPlanPlaceholder from '../../resources/images/AdviseIt//placeholders/AdviseItPlan.webp';
import AdviseItFooterLinks from '../../resources/images/AdviseIt/AdviseItFooterLinks.webp';
import AdviseItFooterLinksPlaceholder from '../../resources/images/AdviseIt//placeholders/AdviseItFooterLinks.webp';
import PHPLogo from '../../resources/logos/PHPLogo';
import BootstrapLogo from '../../resources/logos/bootstrap-logo.webp';
import MySQLLogo from '../../resources/logos/MySQLLogo';


export default function WebDev({ scrollRef, mobileMode }) {
  return (
    <Row className='bg-gradient-down pb-10' ref={scrollRef}>
      <Col className='p-0'>
        <h1 className='portfolio-header padding-margins mt-4 mb-5'>/web</h1>

        {/* REI Membership Dashboard */}
        <PortfolioProject
          title={"REI Membership Dashboard"}
          id={'REIDescription'}
          description={[
            `As a Software Engineer Intern with the Membership team at REI, I helped enable the
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
          
          mobileMode={mobileMode}
        />
        
        {/* Advise It */}
        <PortfolioProject
          title={"Advise IT"}
          id={'AdviseITDescription'}
          repoLink={"https://github.com/lindsaypj/advise-it-capstone"}
          description={[
            `Working with Green River College Advisors, I led a team of 4 in the technical
              design and implementation of Advise IT. Our tool allows advisors to accelerate the
              process of creating academic plans for current and prospective students.`,
            `Each advisor has their own methods of plan development and management with their students.
              Advise IT serves to standardize and centralize plans in one place for easier maintenance
              and data analytics.`,
            `I contributed to many aspects of the product; I advocated for an atomic data storage
              solution using SQL; I used PHP to securely interface with the database; I helped construct 
              a custom router and controller; And I worked on injecting the data onto the page using
              a combination of PHP templating and Asynchronous JavaScript.`
          ]}
          logos={<>
            <PHPLogo className='logo-dark portfolio-logo' />
            <a href='https://getbootstrap.com/' target='_blank' rel='noreferrer' title='Bootstrap'>
              <img src={BootstrapLogo} className='portfolio-logo' alt='Bootstrap logo'/>
            </a>
            <MySQLLogo />
          </>}
          images={{
            desktopImages: [
              {
                src: AdviseItHome, placeholder: AdviseItHomePlaceholder,
                alt: 'Advise it new plan page. Create a blank, or standard plan.',
                ratio: 'ar-3103-1907'
              },
              {
                src: AdviseItPlan, placeholder: AdviseItPlanPlaceholder,
                alt: 'Blank advising plan with fall, winter, spring, and summer quarters. You can add additional school years, add an advisor, or save.',
                ratio: 'ar-3103-1907'
              },
              {
                src: AdviseItAdmin, placeholder: AdviseItAdminPlaceholder,
                alt: 'Table of academic schedules. Shows advisor, last saved date, and a URL to each plan.',
                ratio: 'ar-3103-1907'
              },
              {
                src: AdviseItFooterLinks, placeholder: AdviseItFooterLinksPlaceholder,
                alt: 'Table of footer links that can be edited or deleted. New links can be added.',
                ratio: 'ar-3103-1907'
              }
            ]
          }}
          descriptionFirst={true}
        />

        {/* Sudoku */}
        <PortfolioProject
          title={"Sudoku In the Clouds"}
          id={'SudokuDescription'}
          description={[
            `Powered by my own Sudoku API, I designed a front-end application called Sudoku In the
              Clouds. You can play 4x4, 9x9, or 16x16 board sizes. With an account, you can also
              save your settings, preferences, and game progress.`,
            `In addition to the Sudoku API that enables the gameplay, I used an API called
              Colormind that generates themes using color theory. These colors are used to style
              the application and are stored in the user's preferences.`
          ]}
          logos={<>
            <ColormindLogo />
            <ReactLogo className='portfolio-logo' />
            <SpringLogo className='portfolio-logo' />
            <a href='https://cloud.google.com/' target='_blank' rel='noreferrer' title='Google Cloud Platform' >
              <img src={GoogleCloudLogo} className='portfolio-logo h-100' alt='Google Cloud Platform' />
            </a>
          </>}
          images={{
            desktopImages: [
              {
                src: SudokuHome, placeholder: SudokuHomePlaceholder,
                alt: 'Sudoku In the Clouds home page with Menu, Login, and Play buttons.',
                ratio: 'ar-640-321'
              },
              {
                src: SudokuLogin, placeholder: SudokuLoginPlaceholder,
                alt: 'Login page with an option to create a free account. With an account, you can track completed games and save game preferences.',
                ratio: 'ar-640-321'
              },
              {
                src: SudokuAccount, placeholder: SudokuAccountPlaceholder,
                alt: 'Example account page. Review and edit player stats, settings, and preferences.',
                ratio: 'ar-640-321'
              },
              {
                src: SudokuAccountThemed, placeholder: SudokuAccountThemedPlaceholder,
                alt: 'Example accunt page with custom prefernces that change the colors of the page.',
                ratio: 'ar-640-321'
              },
              {
                src: SudokuGame, placeholder: SudokuGamePlaceholder,
                alt: 'An partially complete game of Sudoku. The page colors match the custom preferences.',
                ratio: 'ar-640-321'
              }
            ]
          }}
        />
      </Col>
    </Row>
  );
}