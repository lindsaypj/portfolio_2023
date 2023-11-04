import React, { useRef, useState } from "react";
import { Collapse } from "react-bootstrap";

import '../styles/TruncatedArticle.css';

export default function TruncatedArticle({ visibleParagraph, truncatedParagraphs, uniqueID }) {

  const [expanded, setExpanded] = useState(false);

  const readMore = useRef();
  const showLess = useRef();
  const article = useRef();

  const handleTruncateToggle = () => {
    const isExpanding = !expanded;
    setExpanded(isExpanding);

    if (isExpanding) {
      article.current.className = 'expanded-article';
      readMore.current.classList.add('hide');
      readMore.current.ariaHidden = 'true';
      showLess.current.classList.remove('hide');
      showLess.current.ariaHidden = 'false';
    }
    else {
      article.current.className = 'truncated-article';
      readMore.current.classList.remove('hide');
      readMore.current.ariaHidden = 'false';
      showLess.current.classList.add('hide');
      showLess.current.ariaHidden = 'true';
    }
  };

  return (
    <div ref={article} className='truncated-article'>
      {visibleParagraph}
      <span
        ref={readMore}
        className='link-primary'
        onClick={handleTruncateToggle}
        role='button'
        aria-expanded={expanded}
        aria-controls={'#'+uniqueID}
      >
        {' Read more...'}
      </span>

      <Collapse in={expanded} className='mt-3'>
        <div id={uniqueID}>
          {truncatedParagraphs}
          <span
            ref={showLess}
            className='link-primary hide'
            onClick={handleTruncateToggle}
            role='button'
            aria-expanded={expanded}
            aria-controls={'#'+uniqueID}
          >
            {' Show less.'}
          </span>
        </div>
      </Collapse>
    </div>
    
  )
}