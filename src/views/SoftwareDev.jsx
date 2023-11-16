import React from 'react';
import { Col, Row } from 'react-bootstrap';

import PortfolioCarousel from '../components/PortfolioCarousel';
import TruncatedArticle from '../components/TruncatedArticle';

import Gen16 from '../resources/images/MazeSolver/16x16-generation.png';
import Gen16Placeholder from '../resources/images/MazeSolver/placeholders/16x16-generation.png';
import Solved16 from '../resources/images/MazeSolver/16x16-solved.png';
import Solved16Placeholder from '../resources/images/MazeSolver/placeholders/16x16-solved.png';
import Gen300 from '../resources/images/MazeSolver/300x300-generation.png';
import Gen300Placeholder from '../resources/images/MazeSolver/placeholders/300x300-generation.png';
import Solved300 from '../resources/images/MazeSolver/300x300-solved.png';
import Solved300Placeholder from '../resources/images/MazeSolver/placeholders/300x300-solved.png';
import Solved1000 from '../resources/images/MazeSolver/1000x1000-solved.png';
import Solved1000Placeholder from '../resources/images/MazeSolver/placeholders/1000x1000-solved.png';
import JavaLogo from '../resources/logos/JavaLogo';
import IntelliJLogo from '../resources/logos/IntelliJLogo';
import AutoCompleteBlank from '../resources/images/Autocomplete/auto-complete-blank.png';
import AutoCompleteBlankPlaceholder from '../resources/images/Autocomplete/placeholders/auto-complete-blank.png';
import AutoCompleteSearch from '../resources/images/Autocomplete/auto-complete-search.png';
import AutoCompleteSearchPlaceholder from '../resources/images/Autocomplete/placeholders/auto-complete-search.png';
import AutoComplete from '../resources/images/Autocomplete/auto-complete.png';
import AutoCompletePlaceholder from '../resources/images/Autocomplete/placeholders/auto-complete.png';
import LinkIcon from '../resources/icons/LinkIcon';


export default function SoftwareDev({ scrollRef }) {
  return (
    <Row className='bg-gradient-down pb-10' ref={scrollRef}>
      <Col className='p-0'>
        <h1 className='route-header padding-margins mt-4'>/software_development</h1>

        {/* Maze Solver */}
        <Row className='portfolio__row padding-margins d-block d-xl-flex pb-4'>
          <Col className='py-4 px-0 col-12 col-xl-4 d-flex align-items-center'>
            <div>
              <h3>
                Maze Solver
                <a href='https://github.com/lindsaypj/maze_generation' target='_blank' rel='noreferrer' title='Maze Generation Github repo' className='p-2'>
                  <LinkIcon />
                </a>
              </h3>

              <TruncatedArticle
                uniqueID={'mazeDescription'}
                visibleParagraph={
                  <p>
                    This program was developed as an assignment to practice using graphs and graph
                    traversal algorithms. The maze is randomly generated using an adjustable size from 4x4 to
                    1000x1000.
                  </p>
                }
                truncatedParagraphs={
                  <><p>
                    You can solve the maze using either Depth-First Search (DFS) or Breadth-First
                    Search (BFS). The time it takes to solve and render the resulting path is
                    displayed in the bottom right.
                  </p>
                  <p>
                    The maze generation is fast even for large mazes because it maintains disjoint
                    sets with the Union-Find algorithm. The resulting spanning tree has one solution,
                    and no cycles.
                  </p></>
                }
              />

              <div className='text-center m-4'>
                <JavaLogo className='portfolio-logo' />
                <IntelliJLogo className='portfolio-logo' />
              </div>
            </div>
          </Col>
          <Col className='p-0 py-xl-4 ps-xl-5 col-12 col-xl-8 d-flex align-items-center'>
            <PortfolioCarousel
              desktopImages={[
                {
                  src: Gen16, placeholder: Gen16Placeholder,
                  alt: 'Unsolved maze that is 16 by 16 grid tiles. The maze generated in 0.0000 seconds.'
                },
                {
                  src: Solved16, placeholder: Solved16Placeholder,
                  alt: 'Solved 16 by 16 maze with the path highlighted. The maze was solved using DFS in 0.0000 seconds.'
                },
                {
                  src: Gen300, placeholder: Gen300Placeholder,
                  alt: 'Unsolved maze that is 302 by 302 grid tiles. The maze generated in 0.0529 seconds.'
                },
                {
                  src: Solved300, placeholder: Solved300Placeholder,
                  alt: 'Solved 302 by 302 maze with the path highlighted. The maze was solved using BFS in 0.0120 seconds.'
                },
                {
                  src: Solved1000, placeholder: Solved1000Placeholder,
                  alt: 'Solved 1000 by 1000 maze with the path highlighted. The maze was solved using DFS in 0.0466 seconds.'
                }
              ]}
            />
          </Col>
        </Row>

        {/* Autocomplete */}
        <Row className='portfolio__row padding-margins d-flex'>
          <Col className='py-4 px-0 col-12 col-xl-4 d-flex align-items-end align-items-xl-center order-1 order-xl-2'>
            <div>
              <h3>Autocomplete</h3>

              <TruncatedArticle
                uniqueID={'AutocompleteDescription'}
                visibleParagraph={
                  <p>
                    This small program was developed to practice working with a tree structure and
                    writing recursive methods. The program stores a dictionary of 80,000 words and
                    displays a definition when a word is entered.
                  </p>
                }
                truncatedParagraphs={
                  <><p>
                    When the user types in the text box, a list of words that start with the input
                    string are shown. If search is pressed and the word is found, the definition
                    will be shown.
                  </p>
                  <p>
                    You may or may not have noticed that a version of Autocomplete has been
                    implemented on the page as part of the terminal.
                  </p></>
                }
              />

              {/* Logos */}
              <div className='text-center m-4'>
                <JavaLogo className='portfolio-logo' />
                <IntelliJLogo className='portfolio-logo' />
              </div>
            </div>
          </Col>
          <Col className='p-0 py-xl-4 pe-xl-5 col-12 col-xl-8 d-flex align-items-center order-2 order-xl-1'>
            <PortfolioCarousel
              desktopImages={[
                {
                  src: AutoCompleteBlank, placeholder: AutoCompleteBlankPlaceholder,
                  alt: 'Autocomplete Search program showing empty text field and search button.'
                },
                {
                  src: AutoComplete, placeholder: AutoCompletePlaceholder,
                  alt: 'Autocomplete Search program with e a g in text field. Autocomplete options are displayed. Eager, eagerly, eagle, etc.'
                },
                {
                  src: AutoCompleteSearch, placeholder: AutoCompleteSearchPlaceholder,
                  alt: 'Autocomplete Search program with "Eagle" in the text input. The definition is displayed under the search button.'
                }
              ]}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}