import React from "react";
import { Col, Row } from "react-bootstrap";

import TruncatedArticle from "../components/TruncatedArticle";
import PortfolioCarousel from "../components/PortfolioCarousel";

import BMWLogo from "../resources/logos/BMWLogo";
import ShifterImg from '../resources/images/TransSwap/shifter.jpg';
import ShifterImgPlaceholder from '../resources/images/TransSwap/placeholders/shifter.jpg';
import InteriorBeforeImg from '../resources/images/TransSwap/interiorBefore.jpg';
import InteriorBeforeImgPlaceholder from '../resources/images/TransSwap/placeholders/interiorBefore.jpg';
import InteriorAfterImg from '../resources/images/TransSwap/interiorAfter.jpg';
import InteriorAfterImgPlaceholder from '../resources/images/TransSwap/placeholders/interiorAfter.jpg';
import AutoAndManualImg from '../resources/images/TransSwap/autoAndManual.jpg';
import AutoAndManualImgPlaceholder from '../resources/images/TransSwap/placeholders/autoAndManual.jpg';


export default function Automotive({ scrollRef }) {
  return (
    <Row className='bg-gradient-down pb-10' ref={scrollRef}>
      <Col className='p-0'>
        <h1 className='route-header padding-margins mt-4'>/automotive</h1>

        {/* Transmission Swap */}
        <Row className='portfolio__row padding-margins d-block d-xl-flex pb-4'>
          <Col className='py-4 px-0 col-12 col-xl-4 d-flex align-items-center'>
            <div>
              <h3>
                Transmission Swap
              </h3>

              <TruncatedArticle
                uniqueID={'flutterDescription'}
                visibleParagraph={
                  <p>
                    When buying my first car, I decided to get a manual transmission to learn how
                    to drive it. At first it was annoying, but as I got better it became fun and
                    satisfying. It wasn't until I sold it that I realized how much I loved driving
                    with a manual transmission.
                  </p>
                }
                truncatedParagraphs={
                  <><p>
                    I enjoyed driving the replacement, but there was something missing. Despite
                    being faster, it wasn't as engaging. Then, the automatic transmission was
                    starting to wear out. Needing to be replaced soon, rather than putting in
                    another transmission I didn't really want, I decided to convert my car to manual.
                  </p>
                  <p>
                    Using original BMW parts, the conversion was surprisingly straightforward. I
                    found many others online who completed the same conversion. With their detailed
                    videos and write-ups, I was able to learn everything I needed to about removing
                    the automatic, servicing the new transmission, and installing the manual
                    accessories. After a few days of wrenching and some minor wiring, it was done.
                  </p>
                  <p>
                    I've been driving it for the 2 years, and I am extremely happy with my new
                    transmission. When I first got my car, I didn't think I was capable of something
                    as technical as swapping the transmission. But now I am confident I could do it 
                    again. When facing new challenges, I remind myself how my perspective changed before
                    and after the transmission swap. What seems near impossible may not always be.
                  </p></>
                }
              />  
              
              <div className='text-center m-4'>
                <BMWLogo />
              </div>
            </div>
          </Col>
          <Col className='p-0 py-xl-4 ps-xl-5 col-12 col-xl-8 d-flex align-items-center'>
            <PortfolioCarousel
              desktopImages={[
                {
                  src: InteriorBeforeImg, placeholder: InteriorBeforeImgPlaceholder,
                  alt: 'Vehicle interior before conversion. Has two pedals and an automatic gear selector.'
                },
                {
                  src: AutoAndManualImg, placeholder: AutoAndManualImgPlaceholder,
                  alt: 'Automatic and manual transmission on the ground next to eachother.'
                },
                {
                  src: ShifterImg, placeholder: ShifterImgPlaceholder,
                  alt: 'Manual gear selector with and without the interior trim. With the trim, it looks like it came as a manual from the factory.'
                },
                {
                  src: InteriorAfterImg, placeholder: InteriorAfterImgPlaceholder,
                  alt: 'Vehicle interior after conversion. Has three pedals and a manual gear selector.'
                }
              ]}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}