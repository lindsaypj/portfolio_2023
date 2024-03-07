import React from 'react';
import { Accordion, Button } from 'react-bootstrap';

import '../styles/AccordionNav.css';

export default function AccordionNav({ accordionKey, setAccordionKey, topics, selectedTopic, handleTopicSelection }) {

  const handleClickAccordionItem = (accordionItem) => {
    const nextAccordionKey = accordionItem === accordionKey ? '' : accordionItem;
    setAccordionKey(nextAccordionKey);
  }

  return (
    <Accordion
      className='accordion-nav'
      activeKey={accordionKey}
      flush
    >
    {/* Sections */}
    {topics.map(( section ) => (
      <Accordion.Item
        eventKey={section.name}
        key={section.name}
        className='accordion-nav__item'
      >
        <Accordion.Header
          className='accordion-nav__header padding-margins pe-0'
          onClick={() => {handleClickAccordionItem(section.name)}}
        >
          {section.name}
        </Accordion.Header>

        <Accordion.Body className='p-0'>
          {/* Topics */}
          {section.contents.map((topic) => (
            <Button
              key={topic}
              variant='dark'
              className={'accordion-nav__topic padding-margins pe-0' + (topic === selectedTopic ? ' selected' : '')}
              onClick={() => { handleTopicSelection(topic) }}
            >{topic}</Button>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    ))}
    </Accordion>
  )
}