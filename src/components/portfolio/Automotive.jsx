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
            `When buying my first car, I decided to get a manual transmission. It wasn't until
              I sold it that I realized how much I loved driving with a manual. When driving an
              automatic, there is always something missing. Despite being faster, it's not as
              engaging. When my automatic transmission started to wear out, I decided to
              convert the car to manual.`,
            `I researched the process extensively: part differences, removal of the automatic,
              and installation of the manual. I slowly ordered everything I needed,
              accumulating a mountain of parts. After a few days of wrenching and some minor
              wiring, it was done. Using original BMW parts, the conversion was surprisingly
              straightforward.`,
            `I've been driving it since 2022, and I'm extremely happy with my new
              transmission. When I bought the car, I didn't think I was capable of something
              as technical as swapping the transmission. But now I am confident I could do it 
              again. When facing new challenges, I remind myself how my perspective changed before
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