import React from "react";
import { Col, Row } from "react-bootstrap";

import PortfolioProject from "./PortfolioProject";

import BMWLogo from "../../resources/logos/BMWLogo";
import ShifterImg from '../../resources/images/TransSwap/shifter.webp';
import ShifterImgPlaceholder from '../../resources/images/TransSwap/placeholders/shifter.webp';
import InteriorBeforeImg from '../../resources/images/TransSwap/interiorBefore.webp';
import InteriorBeforeImgPlaceholder from '../../resources/images/TransSwap/placeholders/interiorBefore.webp';
import InteriorAfterImg from '../../resources/images/TransSwap/interiorAfter.webp';
import InteriorAfterImgPlaceholder from '../../resources/images/TransSwap/placeholders/interiorAfter.webp';
import AutoAndManualImg from '../../resources/images/TransSwap/autoAndManual.webp';
import AutoAndManualImgPlaceholder from '../../resources/images/TransSwap/placeholders/autoAndManual.webp';


export default function Automotive({ scrollRef }) {
  return (
    <Row className='bg-gradient-down pb-10' ref={scrollRef}>
      <Col className='p-0'>
        <h1 className='portfolio-header padding-margins mt-4 mb-5'>/automotive</h1>

        {/* Transmission Swap */}
        <PortfolioProject
          title={"Transmission Swap"}
          id={'automotiveDescription'}
          description={[
            `I've been driving it since 2022, and I'm extremely happy with my new
              transmission. When I bought the car, I didn't think I was capable of something
              as technical as swapping the transmission. But now I am confident I could do it 
              again. When facing new challenges, I remember how my perspective changed before
              and after the transmission swap. What seems near impossible may not always be.`
          ]}
          logos={<>
            <BMWLogo />
          </>}
          images={{
            desktopImages: [
              {
                src: InteriorBeforeImg, placeholder: InteriorBeforeImgPlaceholder,
                alt: 'Vehicle interior before conversion. Has two pedals and an automatic gear selector.',
                ratio: 'ar-4-3'
              },
              {
                src: AutoAndManualImg, placeholder: AutoAndManualImgPlaceholder,
                alt: 'Automatic and manual transmission on the ground next to eachother.',
                ratio: 'ar-4-3'
              },
              {
                src: ShifterImg, placeholder: ShifterImgPlaceholder,
                alt: 'Manual gear selector with and without the interior trim. With the trim, it looks like it came as a manual from the factory.',
                ratio: 'ar-4-3'
              },
              {
                src: InteriorAfterImg, placeholder: InteriorAfterImgPlaceholder,
                alt: 'Vehicle interior after conversion. Has three pedals and a manual gear selector.',
                ratio: 'ar-4-3'
              }
            ]
          }}
        />
      </Col>
    </Row>
  );
}