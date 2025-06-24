import { useEffect, useRef } from "react";
import { Badge } from "react-bootstrap";

import GRCLogo from "../../resources/logos/GRCLogo";
import { aboutMeSkills } from '../../resources/text/skills';
import '../../styles/Bio.css';


export default function Bio() {

  ////    INITIALIZATION    ////

  const bioRef = useRef();
  
  ////    STATE MANAGMENT    ////

  // Show Bio when visible
  useEffect(() => {
    const bioInstance = bioRef.current;
    const bioObserver = new IntersectionObserver((entries, observer) => {
      const trigger = entries[0];
      if (trigger.isIntersecting) {
        showBio();
        observer.unobserve(bioInstance);
        observer.disconnect();
      }
    });
    bioObserver.observe(bioInstance);

    return () => {
      bioObserver.unobserve(bioInstance);
      bioObserver.disconnect();
    }
  }, []);


  ////    RENDERING    ////

  const showBio = () => {
    bioRef.current.classList.add('show');
  }

  return (
    <div className='bio'>
      <div ref={bioRef}>

        <div className="text-center">
          <GRCLogo />  
        </div>

        <hr className="my-4"></hr>

        <p>
          I'm confident I can adapt to any technology, however I'm currently comfortable
          with these tools and languages.
        </p>

        <hr className="my-4"></hr>

        <div className=''>
          {aboutMeSkills.map((skill) => (
            <Badge key={skill} pill bg='light' text='dark' className='p-2 me-1'>{ skill }</Badge>
          ))}
        </div>
      </div>
    </div>
  )
}