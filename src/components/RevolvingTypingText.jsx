import { useEffect, useState } from "react";
import TypingText from "./TypingText";
import Cursor from "./Cursor";

export default function RevolvingTypingText({ texts = [], init, shouldType, wordInterval, charInterval = 50, useCursor = true, firstTypedCallback }) {

  ////    INITIALIZATION    ////
  
  const [title, setTitle] = useState(texts[0] || '');
  const [nextTitle, setNextTitle] = useState('');
  const [initState, setInitState] = useState(init);

  useEffect(() => {
    if (init) {
      setInitState(init);
    }
  }, [init])


  ////    STATE MANAGMENT    ////

  async function titleTypedCallback() {
    const nextTitlePormise = new Promise((resolve, reject) => {
      const nextTitle = texts[(texts.indexOf(title) + 1) % texts.length];
      setTimeout(() => resolve(nextTitle), wordInterval);
    })

    if (initState) {
      setInitState(false);
      firstTypedCallback();
    }
    else if (title === '') {
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
      shouldType={shouldType || initState}
      doneTypingCallback={titleTypedCallback}
      fillUnrenderedSpace={false}
    />
    <Cursor hide={(!initState && !shouldType) || !useCursor} />
  </>
  )
}

