import { useState } from "react";
import TypingText from "./TypingText";
import Cursor from "./Cursor";

export default function RevolvingTypingText({ texts = [], shouldType, wordInterval, charInterval = 50, useCursor = true }) {

  ////    INITIALIZATION    ////
  
  const [title, setTitle] = useState(texts[0] || '');
  const [nextTitle, setNextTitle] = useState('');


  ////    STATE MANAGMENT    ////

  async function titleTypedCallback() {
    const nextTitlePormise = new Promise((resolve, reject) => {
      const nextTitle = texts[(texts.indexOf(title) + 1) % texts.length]
      setTimeout(() => resolve(nextTitle), wordInterval)
    })

    if (title === '') {
      setTitle(nextTitle);
      setNextTitle('');
    }
    else {
      const next = await nextTitlePormise;
      setNextTitle(next);
      setTitle('');
    }
  }


  ////    RENDERING    ////

  return (
  <>
    <TypingText
      text={title}
      charInterval={charInterval}
      shouldType={shouldType}
      doneTypingCallback={titleTypedCallback}
      fillUnrenderedSpace={false}
    />
    <Cursor hide={!shouldType || !useCursor} />
  </>
  )
}

