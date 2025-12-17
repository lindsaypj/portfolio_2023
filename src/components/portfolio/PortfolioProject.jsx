import React from "react";
import PortfolioCarousel from "./PortfolioCarousel";
import LinkIcon from "../../resources/icons/LinkIcon";

import "../../styles/PortfolioProject.css"


export default function PortfolioProject({ title, repoLink = null, id, description, images, logos, mobileMode = false, descriptionFirst = false }) {

  // Add links to descriptions?

  // Dynamically switch between fade-top, fade-bottom, and fade-both
  
  return (
  <div className='portfolio-project padding-margins'>
    <h3 className='mb-4'>
      {title}
      { repoLink &&
        <a href={repoLink} target='_blank' rel='noreferrer' title={title+' Github repo'} className='p-2'>
          <LinkIcon />
        </a>
      }
    </h3>
    <div className='portfolio-project__content'>
      <div className={'portfolio-project__description pb-3 pb-lg-0 ' + (descriptionFirst? 'pe-lg-4':'ps-lg-4 end-0')}>
          {description.map((paragraph, index) => (
            <p key={id + index}>
              {paragraph}
            </p>
          ))}

        <div className='my-4 text-center text-lg-start'>
          {logos}
        </div>
      </div>
      <div className={'portfolio-project__images p-0 ' + (descriptionFirst? 'ps-lg-4 float-lg-end':'pe-lg-4 float-lg-start')}>
        <PortfolioCarousel
          desktopImages={images.desktopImages}
          mobileImages={images.mobileImages}
          showMobile={mobileMode}
        />
      </div>
    </div>
  </div>
  )
}