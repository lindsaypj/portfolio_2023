import React from "react";
import { Col, Row } from "react-bootstrap";

import PortfolioCarousel from "../components/PortfolioCarousel";

import Gen16 from '../resources/images/MazeSolver/16x16-generation.png';
import Solved16 from '../resources/images/MazeSolver/16x16-solved.png';
import Gen300 from '../resources/images/MazeSolver/300x300-generation.png';
import Solved300 from '../resources/images/MazeSolver/300x300-solved.png';
import Solved1000 from '../resources/images/MazeSolver/1000x1000-solved.png';
import JavaLogo from "../resources/logos/JavaLogo";
import IntelliJLogo from "../resources/logos/IntelliJLogo";


export default function SoftwareDev() {
  return (
    <Row className='bg-black bg-opacity-75'>
      <Col className='p-0'>
        <h1 className='route-header padding-margins'>/software_development</h1>

        {/* Maze Solver */}
        <Row className='portfolio__row padding-margins d-block d-xl-flex pb-4'>
          <Col className='py-4 px-0 col-12 col-xl-4 d-flex align-items-center'>
            <div>
                <h3>Maze Solver</h3>
                <p>
                  This program was developed as an assignment to practice using graphs and graph
                  traversal algorithms. The maze is randomly generated using a size from 4x4 to
                  1000x1000.
                </p>
                <p>
                  You can solve the maze using either Depth-First Search (DFS) or Breadth-First
                  Search (BFS). The time it takes to solve and render the resulting path is
                  displayed in the bottom right.
                </p>
                <p>
                  The maze generation is fast even for large mazes because it maintains disjoint
                  sets with the Union-Find algorithm. The resulting spanning tree has one solution,
                  and no cycles.
                </p>
                <div className='text-center p-4'>
                  <JavaLogo className='portfolio-logo' />
                  <IntelliJLogo className='portfolio-logo' />
                </div>
              </div>
          </Col>
          <Col className='p-0 p-xl-4 pe-xl-0 col-12 col-xl-8 d-flex align-items-center'>
            <PortfolioCarousel
              desktopImages={[
                {src: Gen16, alt: 'Unsolved maze that is 16 by 16 grid tiles. The maze generated in 0.0000 seconds.'},
                {src: Solved16, alt: 'Solved 16 by 16 maze with the path highlighted. The maze was solved using DFS in 0.0000 seconds.'},
                {src: Gen300, alt: 'Unsolved maze that is 302 by 302 grid tiles. The maze generated in 0.0529 seconds.'},
                {src: Solved300, alt: 'Solved 302 by 302 maze with the path highlighted. The maze was solved using BFS in 0.0120 seconds.'},
                {src: Solved1000, alt: 'Solved 1000 by 1000 maze with the path highlighted. The maze was solved using DFS in 0.0466 seconds.'}
              ]}
            />
          </Col>
        </Row>

        {/* Autocomplete */}
        <Row className='portfolio__row padding-margins d-block d-xl-flex'>
          <Col className='py-4 px-0 col-12 col-xl-4 d-flex align-items-center'>

          </Col>
        </Row>
      </Col>
    </Row>
  );
}