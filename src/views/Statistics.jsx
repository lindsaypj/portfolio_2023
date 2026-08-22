import React, { useEffect, useMemo, useReducer, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import GroupReflection from '../components/statistics/GroupReflection';
import ProjectQuestion from '../components/statistics/ProjectQuestion';
import SideNav from '../components/statistics/SideNav';
import StudentCredit from '../components/statistics/StudentCredit';
import TypingText from '../components/TypingText';

import '../styles/Statistics.css';

import PSA1 from '../resources/images/Statistics/PSA/PSA-1.webp';
import PSA2 from '../resources/images/Statistics/PSA/PSA-2.webp';
import PSA3 from '../resources/images/Statistics/PSA/PSA-3.webp';
import PSA4 from '../resources/images/Statistics/PSA/PSA-4.webp';
import PSA5 from '../resources/images/Statistics/PSA/PSA-5.webp';
import PSA6 from '../resources/images/Statistics/PSA/PSA-6.webp';
import PSAPlaceholder1 from '../resources/images/Statistics/PSA/placeholders/PSA-1.webp';
import PSAPlaceholder2 from '../resources/images/Statistics/PSA/placeholders/PSA-2.webp';
import PSAPlaceholder3 from '../resources/images/Statistics/PSA/placeholders/PSA-3.webp';
import PSAPlaceholder4 from '../resources/images/Statistics/PSA/placeholders/PSA-4.webp';
import PSAPlaceholder5 from '../resources/images/Statistics/PSA/placeholders/PSA-5.webp';
import PSAPlaceholder6 from '../resources/images/Statistics/PSA/placeholders/PSA-6.webp';
import Project3Data from '../resources/images/Statistics/Project3/Co2Data.webp';
import Project3DataPlaceholder from '../resources/images/Statistics/Project3/Placeholders/Co2Data.webp';
import Project3Q2 from '../resources/images/Statistics/Project3/Question2.webp';
import Project3Q2Placeholder from '../resources/images/Statistics/Project3/Placeholders/Question2.webp';
import OregonHistogram from '../resources/images/Statistics/Project3/OregonHistogram.webp';
import OregonHistogramPlaceholder from '../resources/images/Statistics/Project3/Placeholders/OregonHistogram.webp';
import OhioHistogram from '../resources/images/Statistics/Project3/OhioHistogram.webp';
import OhioHistogramPlaceholder from '../resources/images/Statistics/Project3/Placeholders/OhioHistogram.webp';
import Project3BoxPlot from '../resources/images/Statistics/Project3/BoxPlot.webp';
import Project3BoxPlotPlaceholder from '../resources/images/Statistics/Project3/Placeholders/BoxPlot.webp';
import Project3ScatterPlot from '../resources/images/Statistics/Project3/ScatterPlot.webp';
import Project3ScatterPlotPlaceholder from '../resources/images/Statistics/Project3/Placeholders/ScatterPlot.webp';
import Project4Game from '../resources/images/Statistics/Project4/project4Game.webp';
import Project4GamePlaceholder from '../resources/images/Statistics/Project4/Placeholders/project4Game.webp';
import Project4Caclulations from '../resources/images/Statistics/Project4/project4Calculations.webp';
import Project4CalculationsPlaceholder from '../resources/images/Statistics/Project4/Placeholders/project4Calculations.webp';
import IndividualReflection from '../components/statistics/IndividualReflection';


////    CONSTANTS    ////

const SECTIONS = [
    {
        startID: 'strRef0', endID: 'endRef0', title: 'Project 2: Textile Waste',
        subsections: [
            {startID: 'strRef1', endID: 'endRef1', title: 'Part 1: Fast Fashion Videos'},
            {startID: 'strRef2', endID: 'endRef2', title: 'Part 2: Clircular Economy and Sustainability'},
            {startID: 'strRef3', endID: 'endRef3', title: 'Part 3: Textile Waste PSA'},
            {startID: 'strRef4', endID: 'endRef4', title: 'Reflection'},
        ]
    },
    {
        startID: 'strRef5', endID: 'endRef5', title: 'Project 3: Greenhouse Gases',
        subsections: [
            {startID: 'strRef6', endID: 'endRef6', title: 'Reflection'},
        ]
    },
    {
        startID: 'strRef7', endID: 'endRef7', title: 'Project 4: Expected Value Games',
        subsections: [
            {startID: 'strRef8', endID: 'endRef8', title: 'Reflection'},
        ]
    },
    {
        startID: 'strRef9', endID: 'endRef9', title: 'MyOpenMath Reflection Assessment',
        subsections: []
    },
    {
        startID: 'strRef10', endID: 'endRef10', title: 'Weekly Videos Reflection Assessment',
        subsections: []
    },
    {
        startID: 'strRef11', endID: 'endRef11', title: 'Overall Course Self-Reflection',
        subsections: []
    },
]

function typedReducer(state, action) {
  const nextState = {...state}
  switch(action.text) {
    case 'title':
      nextState.title = action.typed
      break;
    case 'course':
      nextState.course = action.typed
      break;
    case 'date':
      nextState.date = action.typed
      break;
    case 'name':
      nextState.name = action.typed
      break;
    default:
      return state
  }
  return nextState
}

export default function Statistics({ mobileMode }) {

    ////    INITIALIZATION    ////

    const [headersTyped, setHeadersTyped] = useReducer(typedReducer, {title: false, course: false, date: false, name: false});
    const isScrolling = useRef(false);

    const tableOfContenstRef = useRef();
    const project2Ref = useRef();
    const project2Part1Ref = useRef();
    const project2Part1EndRef = useRef();
    const project2Part2Ref = useRef();
    const project2Part2EndRef = useRef();
    const project2Part3Ref = useRef();
    const project2Part3EndRef = useRef();
    const project2ReflectionRef = useRef();
    const project2ReflectionEndRef = useRef();
    const project3Ref = useRef();
    const project3EndRef = useRef();
    const project3ReflectionRef = useRef();
    const project3ReflectionEndRef = useRef();
    const project4Ref = useRef();
    const project4EndRef = useRef();
    const project4ReflectionRef = useRef();
    const project4ReflectionEndRef = useRef();
    const myOpenMathRef = useRef();
    const myOpenMathEndRef = useRef();
    const weeklyVideosRef = useRef();
    const weeklyVideosEndRef = useRef();
    const courseRefectionRef = useRef();

    const allRefs = useMemo(() => [
        project2Ref,
        project2Part1Ref,
        project2Part1EndRef,
        project2Part2Ref,
        project2Part2EndRef,
        project2Part3Ref,
        project2Part3EndRef,
        project2ReflectionRef,
        project2ReflectionEndRef,
        project3Ref,
        project3EndRef,
        project3ReflectionRef,
        project3ReflectionEndRef,
        project4Ref,
        project4EndRef,
        project4ReflectionRef,
        project4ReflectionEndRef,
        myOpenMathRef,
        myOpenMathEndRef,
        weeklyVideosRef,
        weeklyVideosEndRef,
        courseRefectionRef
    ], []);

    const scrollRefs = useMemo(() => [
        project2Ref,
        project2Part1Ref,
        project2Part2Ref,
        project2Part3Ref,
        project2ReflectionRef,
        project3Ref,
        project3ReflectionRef,
        project4Ref,
        project4ReflectionRef,
        myOpenMathRef,
        weeklyVideosRef,
        courseRefectionRef
    ], []);


    useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        tableOfContenstRef.current.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.5,
            });
    
            if (tableOfContenstRef) {
                observer.observe(tableOfContenstRef.current);
            }
    
            return () => observer.disconnect();
        }, [tableOfContenstRef]);


    ////    STATE MANGMENT    ////

    const scrollToSection = (sectionID) => {
        const id = Number(sectionID.slice(6));
        scrollRefs[id]?.current.scrollIntoView({ behavior: 'smooth' });

        isScrolling.current = true;
        setTimeout(() => {
            isScrolling.current = false;
        }, 800);
    }


    ////    RENDERING    ////

    return (
        <Container fluid className='p-0'>

            {/* Cover */}
            <Row className={'stats-cover-row' + (headersTyped.name ? '' : ' outline-black') }>
                <Col className={'p-0 text-center' + (headersTyped.name ? ' cover-bg-img' : ' bg-black') }>
                    <h1 className='cover-title'>
                        <TypingText
                            text='PORTFOLIO'
                            doneTypingCallback={() => { setHeadersTyped({text: 'title', typed: true}) }}
                            useCursor
                        />
                    </h1>
                    <h2 className='cover-course stats-h2'>
                        <TypingText
                            text='MATH 146: STATISTICS'
                            charInterval={50}
                            shouldType={headersTyped.title}
                            doneTypingCallback={() => { setHeadersTyped({text: 'course', typed: true}) }}
                            useCursor
                        />
                    </h2>
                    <h2 className='cover-course stats-h2'>
                        <TypingText
                            text='SUMMER 2026'
                            shouldType={headersTyped.course}
                            doneTypingCallback={() => { setHeadersTyped({text: 'date', typed: true}) }}
                            useCursor
                        />
                    </h2>
                    <h4 className={'cover-name' + (headersTyped.name ? '' : ' border-black') }>
                        <TypingText
                            text='Patrick Lindsay'
                            charInterval={50}
                            shouldType={headersTyped.date}
                            doneTypingCallback={() => { setHeadersTyped({text: 'name', typed: true}) }}
                            useCursor
                        />
                    </h4>
                </Col>
            </Row>

            {/* Table of Contents */}
            <Row className='stats-toc-row' ref={tableOfContenstRef}>
                <Col className='stats-margins d-flex flex-column'>
                    <h2 className='stats-h2'>TABLE OF CONTENTS</h2>
                    <Row className={'stats-toc-img'}>
                        <Col className='stats-toc'>
                            {SECTIONS.map(section => 
                            <div key={section.startID}>
                                <div className='stats-h3'>
                                    <span className={'toc-anim toc' + section.startID.slice(6)}>
                                        <button
                                            className={'stats-toc-hoverable'}
                                            onClick={() => scrollToSection(section.startID)}
                                        >
                                            {section.title}
                                        </button>
                                    </span>
                                </div>
                                
                                {section.subsections.length > 0 &&
                                    section.subsections.map(subsetion => 
                                        <div key={subsetion.startID} className='stats-toc-indent'>
                                            <span className={'toc-anim toc' + subsetion.startID.slice(6)}>
                                                <button
                                                    className={'stats-toc-hoverable'}
                                                    onClick={() => scrollToSection(subsetion.startID)}
                                                >
                                                    {subsetion.title}
                                                </button>
                                            </span>
                                        </div>
                                    )
                                }
                            </div>)}
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>

                {/* SIDE NAV */}
                <Col className={'stats-side-nav' + (mobileMode ? ' order-last w-0 p-0' : '')} xs={mobileMode ? '0' : 'auto'}>
                    <SideNav
                        sections={SECTIONS}
                        scrollToSection={scrollToSection}
                        pageRefs={allRefs}
                        isScrolling={isScrolling}
                        tocRef={tableOfContenstRef}
                        mobileMode={mobileMode}
                    />
                </Col>


                {/* PORTFOLIO CONTENT */}
                <Col className='stats-content'>

                    {/* Project 2 */}
                    <Row className='stats-project2 mb-5 pb-5'>
                        <Col className='mb-5 pb-5'>

                            <div ref={project2Ref} id='strRef0'>
                                <h3>Project 2 – Textile Waste</h3>
                                <p className='mt-3 mb-5'>Patrick Lindsay, Nick Walker, Cameron Price 3 points</p>
                            </div>
                            

                            {/* PART 1 */}

                            <div>
                                <div ref={project2Part1Ref} id='strRef1' className='stats-ref-start'></div>
                                <h4>Part 1 – Watch and discuss the following Videos: 12 points</h4>
                                <ol type='1' className='stats-ms-5'>
                                    <li>
                                        <a href='https://www.youtube.com/watch?v=uou_223HFns' target='_blank' rel='noreferrer'>
                                            Ghana becomes dumping ground for the world’s unwanted used clothes
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://www.youtube.com/watch?v=2RPq_v8WEkA' target='_blank' rel='noreferrer'>
                                            FABSCRAP Helps Fashion Brands Recycle Textile Waste/ One Small Step
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://www.youtube.com/watch?v=F6R_WTDdx7I' target='_blank' rel='noreferrer'>
                                            Fast Fashion is hot garbage
                                        </a>
                                    </li>
                                </ol>
                                <p>
                                    Everyone in the group must participate in this discussion. You can respond to the prompts below or you can let your discussion meander a bit based on the interests of the group.  Your discussion must show that you watched all the videos so you should be talking about the situation in Ghana, how small companies are trying to help solve the textile waste problem, and the role of fast fashion in the problem.</p>
                                <p>
                                    Prompt 1: In your own words describe the textile pollution problem in Ghana.  What images did you find disturbing, or what did you learn from the video?  Is there anything that you could do differently in your own life? How does textile waste affect global equity?
                                </p>
                                <p>
                                    Prompt 2: What part of the FABSCRAP operation did you find most enlightening?  Did seeing the volunteers in that company inspire you to find something locally to get involved with? Do you know of other companies that are trying to help with a similar problem?  What can we, as consumers, do when we contribute 1 pound of waste for every 40 pounds of waste created by industry?
                                </p>
                                <p>
                                    Prompt 3:  What would you tell someone who says, “I am not part of the problem, I always donate my used clothing?”  How did fast fashion evolve over time and why is it difficult to get rid of that culture?  How does money and greed play a part in the fashion industry?  How have you personally been involved with this industry? 
                                </p>

                                <p className='mt-5'>
                                    Patrick Lindsay’s thoughts and comments:
                                </p>
                                <p className='fst-italic'>
                                    One statistic I heard in the FABSCRAP video is that businesses waste 40 times more than residential consumers. I’d be curious to know what the ratio of fabric waste to fabric used in their products is. It was cool to see that FABSCRAP turns the waste into shoddy because my friend uses shoddy as sound insulation in car door panels.
                                </p>
                                <p className='fst-italic'>
                                    Personally, I don’t buy clothes very often. I’ve never understood the fast fashion trend because why would I want clothes that are fragile or that fade quickly. I see it as part of the bigger consumer trend of buying cheap over quality. When I do look for clothes, I’ve noticed it’s harder to find good quality options. It would be nice if there was a way to see what is fast fashion or low quality vs what is good quality or good value.
                                </p>

                                <p className='mt-5'>
                                    Nick Walker’s thoughts and comments:
                                </p>
                                <p className='fst-italic'>
                                    After watching the video on textile waste in Ghana, it makes me sad to see the beaches lined with bags full of unwanted and unusable/unsellable articles of clothing. However, I’m also filled with lots of hope with the non-profit that Liz Ricket started to help with the problem even if only a little. Along with other companies like FABSCRAP helping to remove textile waste, the best possible solution, and the hardest to implement, would be to stop fast fashion trends altogether. If companies slowly realize that people aren’t spending their time scrolling and worrying about if they have fashionable clothes for right now, they’ll stop manufacturing at such high rates and forcing awful work conditions like seen in the third video with Bangladesh. This is a tricky situation where the companies are the much worse polluters of textile waste (over 40x more) but we as a collective society and even cross borders can have a real impact if we stop chasing the carrot at the end of the stick that the corporations are dangling.
                                </p>
                                <p className='mt-5'>
                                    Cameron Price’s summary: 
                                </p>
                                <p className='fst-italic'>
                                    In short, my teammates noticed that while organizations like FABSCRAP and Liz Ricket’s nonprofit help to offset the damage fast fashion causes, the overall best (and most difficult) solution would be to stop the trend of fast fashion altogether. Patrick Lindsay said that it would be helpful if there was an easier way to see whether products are fast fashion or not, so that customers could make a more informed decision. Nick Walker said that it would be incredibly fortunate if people stopped scrolling and worrying about trends altogether. I wholeheartedly agree with both of these sentiments.
                                </p>

                                <div ref={project2Part1EndRef} id='endRef1' className='stats-ref-end'></div>
                            </div>


                            {/* PART 2 */}

                            <div>
                                <div ref={project2Part2Ref} id='strRef2' className='stats-ref-start'></div>
                                <h4 className='mt-5 pt-5'>
                                    Part 2 - Questions to answer from the textile article: 26 points
                                </h4>
                                <a className='d-inline-block mb-2' href='https://pmc.ncbi.nlm.nih.gov/articles/PMC8257395/pdf/42824_2021_Article_26.pdf' target='_blank' rel='noreferrer'>
                                    Circular Economy and Sustainability of the Clothing and Textile Industry
                                </a>
                                <p>
                                    By Xuandong Chen, Hifza Memon, Yuanhoa Wang, Ifra Marriam, and Mike Tebyetekerwa. 
                                </p>
                                <p>
                                    Please give your answers as complete sentences.  Some questions will require more than one sentence. 
                                </p>
                                <ProjectQuestion
                                    questionNum={'1'}
                                    credit={['Patrick', 'Nick']}
                                    questions={[{
                                        'q': 'Using information from this article, explain the key differences between a linear and circular economy. (4 points)',
                                        'a': ['A linear economy converts raw resources into single use products, while a circular economy uses a mix of raw resources and recycled products to reduce waste.']
                                    }]}
                                />
                                <ProjectQuestion
                                    questionNum={'2'}
                                    credit={['Nick', 'Cameron']}
                                    questions={[{
                                        'q': 'What is “Fast Fashion” and how does it contribute to the textile pollution problem? (4 points)',
                                        'a': ['Fast Fashion can be described as creating low quality garments at cheap prices in order to sell quickly while that specific look is ‘hot’. It leads to incredibly high turnover rates of producing clothing which in turn leads to not only the consumer discarding the clothes they buy, but also all of the unsold inventory entering waste piles on shorelines and in the ocean.']
                                    }]}
                                />
                                <ProjectQuestion
                                    questionNum={'3'}
                                    credit={['Patrick', 'Nick']}
                                    questions={[{
                                        'q': 'Explain 2 ways that textiles affect our water supply.  Which of the statistics regarding water pollution did you find most surprising or alarming? Why? (5 points)',
                                        'a': ['Textiles use a large amount of water and they pollute it with residual fibers. The statistic that surprised me the most is that the textile industry is responsible for “20% of global water pollution.” I think this is most alarming because so much of the product is wasted. We are polluting just to throw out the product as well.']
                                    }]}
                                />
                                <ProjectQuestion
                                    questionNum={'4'}
                                    credit={['Nick', 'Patrick']}
                                    questions={[{
                                        'q': 'Using Chart A at the top of page 3, give an estimate of the number of tons of textiles that were recycled in 2005.  (2 points)',
                                        'a': ['My rough estimate for the number of tons of textiles recycled in 2005 is 2.1 tons.']
                                    }]}
                                />
                                <ProjectQuestion
                                    questionNum={'5'}
                                    credit={['Cameron', 'Nick']}
                                    questions={[{
                                        'q': 'Using Chart B at the top of page 3, which type of textile use has increased the most in the last 45 years?   What comparison can you make between the rise in use of this fabric and the increase in landfill waste from chart A? (4 points)',
                                        'a': ['While they are all close in the amount they have increased, cotton and/or polyester fibre seems to have increased more than other types of textiles. You can see in chart A that the total amount of textile waste has grown incredibly, and seems to match up with the rise in cotton or polyester fibre over time.']
                                    }]}
                                />
                                <ProjectQuestion
                                    questionNum={'6'}
                                    credit={['Patrick', 'Cameron']}
                                    questions={[
                                        {
                                            'q': 'Use the charts from page 4 to answer this question.',
                                            'a': ['']
                                        },
                                        {
                                            'q': 'What percentage of energy consumption is used to produce the highest consuming natural fiber as compared to highest consuming synthetic fiber? Show your work for credit. (3 points)',
                                            'a': [
                                                'Total = 10 + 55 + 63 + 100 + 115 + 125 + 175 + 250 = 893 MJ/kg of fiber',
                                                'Wool (Natural) = 63/893 = 7.055%, Nylon (Synthetic) = 240/893 = 27.996% I think the amount for nylon was actually 250, but it looks like your final answer was correct so probably just a typo I would assume'
                                            ]
                                        },
                                        {
                                            'q': 'If you were trying to reduce your carbon footprint, which type of fabric should you choose for your next T-shirt? (1 point)',
                                            'a': ['The fabric with the smallest Carbon footprint is US Organic Cotton.']
                                        }
                                    ]}
                                />
                                <ProjectQuestion
                                    questionNum={'7'}
                                    credit={['Cameron', 'Nick']}
                                    questions={[{
                                        'q': 'On page 6, there is a flow chart that describes how articles of clothing could be broken down to reuse the fabric.  What are the drawbacks of doing this that is causing companies to produce new products instead? (3 points)',
                                        'a': ['It seems like there are some untraceable, yet nonbiodegradable fibers that could cause issues, however, “Concerns about the small, untraceable fiber plastics can be solved by using biodegradable fibers. Also, efforts and policies should be made to ensure all staple fibers are made from biodegradable materials, and filaments that can be easily collected from the environment can either be made degradable or biodegradable”. ']
                                    }]}
                                />

                                <div ref={project2Part2EndRef} id='endRef2' className='stats-ref-end'></div>
                            </div>


                            {/* PART 3 */}
                            
                            <div>
                                <div ref={project2Part3Ref} id='strRef3' className='stats-ref-start'></div>
                                <h4 className='mt-5 pt-5'>
                                    Part 3 – Create a Public Service Announcement (PSA) 30 points
                                </h4>
                                <p>
                                    For this part of the project, you will create a PSA with your fellow students here at SPSCC as your target audience. You can create a short video, or a pamphlet, or a sculpture, or a poster, or a fact sheet, or a PowerPoint presentation, or a website, or some other form of artwork.  If you have an idea that I have not mentioned, please contact me for approval. 
                                </p>
                                <p>
                                    I want you to have the freedom to create something unique, but keep these things in mind:
                                </p>
                                <ol className='ms-4'>
                                    <li>The viewer should be able to interact with your PSA in 1 to 3 minutes and come away with an understanding of the problem. There should be some basic facts and imagery included, but don’t overwhelm viewers with too many data points. You should include things that the reader could do to help solve this problem.</li>
                                    <li>You can use data points provided on the last page of this document or find your own data.</li>
                                    <li>You can use images from the internet or something you created on your own to show the problem. </li>
                                    <li>You can use AI to help you with this project, but it should be used as a guide, not an end project.</li>
                                    <li>Not everyone in your group has to have equal participation in this part of the project, but there should be a discussion that includes a brainstorming session to help kick this off.</li>
                                    <li>If you are willing to let me share your end project with future classes or in displays on campus, please let me know – I would love to start to bring awareness of this problem to our community. </li>
                                </ol>
                            
                                <LazyLoadImage
                                    src={PSA1}
                                    placeholderSrc={PSAPlaceholder1}
                                    alt={'Textile Waste PSA Slide 1'}
                                    wrapperClassName='stats-project2-img'
                                    className='w-100'
                                />
                                <LazyLoadImage
                                    src={PSA2}
                                    placeholderSrc={PSAPlaceholder2}
                                    alt={'Textile Waste PSA Slide 2'}
                                    wrapperClassName='stats-project2-img'
                                    className='w-100'
                                />
                                <LazyLoadImage
                                    src={PSA3}
                                    placeholderSrc={PSAPlaceholder3}
                                    alt={'Textile Waste PSA Slide 3'}
                                    wrapperClassName='stats-project2-img'
                                    className='w-100'
                                />
                                <LazyLoadImage
                                    src={PSA4}
                                    placeholderSrc={PSAPlaceholder4}
                                    alt={'Textile Waste PSA Slide 4'}
                                    wrapperClassName='stats-project2-img'
                                    className='w-100'
                                />
                                <LazyLoadImage
                                    src={PSA5}
                                    placeholderSrc={PSAPlaceholder5}
                                    alt={'Textile Waste PSA Slide 5'}
                                    wrapperClassName='stats-project2-img'
                                    className='w-100'
                                />
                                <LazyLoadImage
                                    src={PSA6}
                                    placeholderSrc={PSAPlaceholder6}
                                    alt={'Textile Waste PSA Slide 6'}
                                    wrapperClassName='stats-project2-img'
                                    className='w-100'
                                />

                                <div ref={project2Part3EndRef} id='endRef3' className='stats-ref-end'></div>
                            </div>
                        </Col>
                    </Row>


                    {/* PROJECT 2 REFLECTION */}

                    <div className='mb-5 pb-5'>
                        <div ref={project2ReflectionRef} id='strRef4' className='stats-ref-start'></div>
                        <GroupReflection
                            mobileMode={mobileMode}
                            projectTitle={'Project 2: Textile Waste'}
                            groupNumber={1}
                            timeSpent={3.5}
                            highlighted={[
                                {'a': 4, 'other': ''},
                                {'a': 3, 'other': ''},
                                {'a': 1, 'other': ''},
                                {'a': 3, 'other': ''},
                                {'a': 3, 'other': ''},
                                {'a': 3, 'other': ''},
                            ]}
                            reflection={<>
                                <p className='fst-italic'>
                                    The only negative experience I had was collaborating with my team. Since I had very little availability during the week, I was trying to work on it on the weekend. We all had put that we had time on the weekend but it wasn’t until Monday that I got a response. Ultimately we worked through it asynchronously, but I think it was made more difficult by the lack of structured communication.
                                </p>
                                <p className='fst-italic'>
                                    I did enjoy creating the PSA. I recreated a graph in Photoshop to match the theme of our project and it was fun leaving funny notes back and forth with teammates while collaborating in Google Slides. One of my teammates had a vision for the story we would tell and we worked together to implement it.
                                </p>
                                <p className='fst-italic'>
                                    I was amazed to learn how much textile is made and wasted. I have been telling my friends about it and noticing some of their questionable online shopping habits. I have noticed that statistics can be easily misinterpreted and must be framed in the right context to avoid confusion. For example we used the following statistics without the underlined parts first, and corrected it later: 
                                </p>
                                <ul className='stats-ms-4 fst-italic'>
                                    <li>American <u>households</u> bought on average 25 articles of clothing in 1960</li>
                                    <li>Today it’s an average of 60.5 <u>per individual</u></li>
                                </ul>
                            </>}
                        />

                        <div ref={project2ReflectionEndRef} id='endRef4' className='stats-ref-end'></div>
                    </div>


                    {/* PROJECT 3: GREENHOUSE GASES */}

                    <div className='mb-5 pb-5'>
                        <div ref={project3Ref} id='strRef5' className='stats-ref-start'></div>

                        <h3 className='mt-5 pt-5'>Project 3 – Greenhouse Gas Emissions Math 146</h3>
                        <p className='mt-3 mb-5'><b>Group Members:</b> Patrick Lindsay, Juan Aguilar, Ashley Guel, Nick Walker</p>
                    
                        <div className='mb-5'>
                            <p>As a group, decide which 2 states you are investigating.  List those states below: </p>
                            <p className='text-danger fst-italic'>Oregon and Ohio.</p>
                            
                            
                            <p>1. Import your data into this document and find measures of center and variation. (8 points)</p>
                            <StudentCredit
                                lead={'Patrick'}
                                checkedBy={['Juan', 'Nick']}
                            />
                            <p>?? indicates a place where you should fill in the two states your group has chosen.</p>
                            <LazyLoadImage
                                src={Project3Data}
                                placeholderSrc={Project3DataPlaceholder}
                                alt={'Table of Oregon and Ohio CO2 emissions from 1990 to 2020'}
                                wrapperClassName='stats-project3-img-data'
                                className='w-100'
                            />
                        </div>

                        <div className='mb-5'>
                            <p>2. Using 7 classes, find the class widths for your 2 sets of data. (4 pts) </p>
                            <StudentCredit
                                lead={'Juan'}
                                checkedBy={['Patrick', 'Nick']}
                            />
                            <LazyLoadImage
                                src={Project3Q2}
                                placeholderSrc={Project3Q2Placeholder}
                                alt={'Solving for histogram class width'}
                                wrapperClassName='stats-project3-img-2'
                                className='w-100'
                            />
                        </div>
                        <div className='mb-5'>
                            <p>3. Use GeoGebra to draw histograms for your 2 sets of data. Label each graph clearly. Paste all 2 graphs in the space below. Make sure you set your histogram to match the minimum value of your data set and have the correct class width. (Those found in #2) What general trend do you see for each state? (10 points)</p>
                            <StudentCredit
                                lead={'Juan'}
                                checkedBy={['Nick', 'Patrick']}
                            />
                            <Row className='my-4'>
                                <Col xs={mobileMode ? '12' : '6'}>
                                    <LazyLoadImage
                                        src={OregonHistogram}
                                        placeholderSrc={OregonHistogramPlaceholder}
                                        alt={'Solving for histogram class width'}
                                        wrapperClassName='stats-project3-img-OreHist'
                                        className='w-100'
                                    />
                                </Col>
                                <Col>
                                    <LazyLoadImage
                                        src={OhioHistogram}
                                        placeholderSrc={OhioHistogramPlaceholder}
                                        alt={'Solving for histogram class width'}
                                        wrapperClassName='stats-project3-img-OhiHist'
                                        className='w-100'
                                    />
                                </Col>
                            </Row>
                            <p className='text-danger fst-italic'>
                                It’s hard to say if the emissions are trending up or down since we cannot see from the histograms how they stack up over time. That said, it appears Ohio has much more emissions than Oregon. Not only does Ohio have more relatively high emissions years, but even Ohio’s lowest emissions group is higher than Oregon’s highest emissions group.
                            </p>
                        </div>
                        
                        <div className='mb-5'>
                            <p>4. Using the data from the two states you chose, create two stacked Boxplots using GeoGebra comparing the CO₂ emissions from each state. Label the and paste the graphs below. (4 points)</p>
                            <StudentCredit
                                lead={'Nick'}
                                checkedBy={['Patrick', 'Ashley']}
                            />
                            <LazyLoadImage
                                src={Project3BoxPlot}
                                placeholderSrc={Project3BoxPlotPlaceholder}
                                alt={'Stacked box plot of Oregon and Ohio CO2 emissions.'}
                                wrapperClassName='stats-project3-img-boxplot'
                                className='w-100'
                            />
                        </div>

                        <div className='mb-5'>
                            <p>5. Find the fences for the two boxplots above.  Show your work.  Are there any outliers in either of the boxplots? What year does that (those) point(s) represent? (6 pts)</p>
                            <StudentCredit
                                lead={'Nick'}
                                checkedBy={['Juan', 'Patrick']}
                            />
                            <p>Lower Fence: Q1-(1.5∙IQR)	Upper Fence: Q3+(1.5∙IQR)</p>
                            <p className='text-danger fst-italic'>Boxplot 1 Ohio:</p>
                            <p className='text-danger fst-italic'>Lower Fence: 22.71 - (1.5 * 4.46) = 22.71 - 6.69 = 16.02</p>
                            <p className='text-danger fst-italic'>Upper Fence: 27.17 + (1.5 * 4.46) = 27.17 + 6.69 = 33.86</p>
                            <p className='text-danger fst-italic mb-5'>There are no outliers in the data set for Ohio.</p>

                            <p className='text-danger fst-italic'>Boxplot 2 Oregon: </p>
                            <p className='text-danger fst-italic'>Lower Fence: 12.42 - (1.5 * 2.17) = 12.42 - 3.255 = 9.165</p>
                            <p className='text-danger fst-italic'>Upper Fence: 14.59 + (1.5 * 2.17) = 14.59 + 3.255 = 17.845</p>
                            <p className='text-danger fst-italic'>There are no outliers in the data set for Oregon either.</p>
                        </div>

                        <div className='mb-5'>
                            <p>6. Based only on these boxplots, which state is producing more CO₂? Why? (4 pts)</p>
                            <StudentCredit
                                lead={'Nick'}
                                checkedBy={['Patrick', 'Ashley']}
                            />
                            <p className='text-danger fst-italic'>
                                Ohio is the clear winner between the 2 for the state that produces more CO2 since for every year recorded, Ohio has consistently had a higher emission value of CO2. In the boxplot, with there being no outliers in either data set, the lowest value for Ohio is still more than the largest value for Oregon.
                            </p>
                        </div>

                        <div className='mb-5'>
                            <p>7. Create a graph using multiple variable analysis in GeoGebra comparing the year and the CO₂ for one of the states you chose.  Your x-axis should represent the year and the y-axis will be the CO₂ emissions. Then paste the graph below.  Be sure to label each axis and give your graph a name. (4 points)</p>
                            <StudentCredit
                                lead={'Juan'}
                                checkedBy={['Ashley', 'Nick']}
                            />
                            <LazyLoadImage
                                src={Project3ScatterPlot}
                                placeholderSrc={Project3ScatterPlotPlaceholder}
                                alt={'Scatter plot with best fit line trending down of Oregon and Ohio CO2 emissions from 1990 to 2020.'}
                                wrapperClassName='stats-project3-img-scatterplot'
                                className='w-100'
                            />
                        </div>

                        <div className='mb-5'>
                            <p>8. Does your graph show a positive or negative correlation?  How do you know?  Explain what that correlation means for the data that we are reviewing. (2 points)</p>
                            <StudentCredit
                                lead={'Juan'}
                                checkedBy={['Patrick', 'Nick']}
                            />
                            <p className='text-danger fst-italic'>
                                The graph shows a negative correlation. Overall, Oregon’s CO₂ emissions went down as the years passed. The downward trend shows that CO₂ emissions were generally lower in more recent years.
                            </p>
                        </div>

                        <div className='mb-5'>
                            <p>9. Read the article linked below and have a group discussion about at least 3 items that you found the most interesting or compelling.  Summarize the thoughts of your group in 3 to 4 paragraphs. (10 points)</p>
                            <p>
                                <a href='https://theroundup.org/co2-greenhouse-gas-emission-statistics/' target='_blank' rel='noreferrer'>
                                    45 Carbon Dioxide, Greenhouse Gas & Climate Change Statistics
                                </a>
                            </p>
                            <p>Thoughts from <b>Patrick</b>:</p>
                            <p className='text-danger fst-italic'>
                                The first data point that I found shocking was that global emissions have hovered around “40.53 Billion Tons of Carbon Dioxide each year.” I would have expected it to trend up year over year. I wonder which advancements in technology have helped to reduce emissions the most.
                            </p>
                            <p className='text-danger fst-italic'>
                                Another fact I did not expect is that “over a long distance, flying on a full aircraft can be less carbon-intensive than driving a car by yourself.” Obviously since that’s based on average flight (144.2g/seat/mile) and passenger vehicle emissions (404g/mile), having a newer high-efficiency vehicle might flip the statistic. I did not expect the numbers to be so close given how much people talk about the carbon footprint of flying on planes.
                            </p>
                            <p className='text-danger fst-italic'>
                                The third statistic that shocked me is that “the richest 10% of people produced 52% of emissions.” On a surface level it makes sense; luxury vehicles and transportation are heavier and less efficient; the wealthy own bigger homes and potentially consume more products. But 50% is a lot! Is that adding the emissions of their companies? Surely it’s not just private jets and yachts.
                            </p>
                            
                            <p>Thoughts from <b>Ashley</b>:</p>
                            <p className='text-danger fst-italic'>
                                It’s not very surprising to me that CO2 emissions have risen so drastically the closer you get to the current year in America, especially considering how car-reliant we are as a society. It makes sense, America is a very large country that has a lot of ground, so when everyone essentially needs a car (which is infamously gas-reliant for it’s fuel), everyone is chipping in their own little piece. What surprised me was actually the fact China is the biggest emitter, even with America making the most CO2 emissions long-term. Though, with x4 the population and it’s reliance on coal, it begins to make a little more sense.
                            </p>
                            <p className='text-danger fst-italic'>
                                America is still creating a mass amount as the years go on and only getting worse, but with just how much China creates, it does make me wonder how long it would take China to create these intense CO2 emissions until it catches up to America’s total, and eventually surpasses it. And if that happens what would happen to the planet and our quality of life if no methods were put into place to reduce them.
                            </p>
                            <p className='text-danger fst-italic'>
                                I was also surprised to learn that transportation was actually not the leading energy sector, even though they’re second in production. From what I previously mentioned, almost everyone in the US needs a car to ger around, and even if those emissions weren’t as damaging to the environment than something else that needs fossil fuels, you would imagine that it would impact the environment more than anything else due to the sheer number of cars being used every single day.
                            </p>
                            
                            <p>Thoughts from <b>Nick</b>:</p>
                            <p className='text-danger fst-italic'>
                                I was shocked at the amount of CO2 that the US emits (4713 MMtCO2) but what truly shocked me was the US in comparison to China (10668 MMtCO2). Since China and the US are roughly the same size, even though China has around 4x the amount of people, having more than double the emissions of the US, I was even more surprised to read that the US peaked with its emissions in 2007 at 7,450 MMtCO2 which still doesn’t even come close to China’s current numbers.
                            </p>
                            <p className='text-danger fst-italic'>
                                Another fact that really made me think about how many cars are on the road at any given point is that the average mature tree absorbs roughly 60g/day of CO2. Comparing that to a standard passenger vehicle emitting 404g/mile means that every person that drives more than a quarter mile in any given day is producing more CO2 than the average tree can absorb that day.
                            </p>
                            <p className='text-danger fst-italic'>
                                A third fact that actually made me hopeful was that air pollution in the US has been effectively halved since the year 2000 and they are still falling. While the number of deaths caused by PM (particulate matter) are still high today, they largely fell from 103,700 in 1990 down to 60,200 in 2019.
                            </p>

                            <p>Group member 4 – please summarize the thoughts of your group as you add your own ideas.</p>
                            <p><b>Juan:</b></p>
                            <p className='text-danger fst-italic'>
                                Looking over everyone’s responses, the scale of global emissions was a common concern. Patrick focused on the fact that global CO₂ emissions have stayed around 40.53 billion tons a year, while Ashley and Nick discussed the difference between China and the United States. China currently produces more than twice as much CO₂, but the United States has produced the most throughout history. The transportation numbers were especially interesting because a full airplane can sometimes produce fewer emissions per person than someone driving alone. Nick’s comparison between vehicle emissions and the amount absorbed by a tree also made the impact of everyday driving easier to understand. The statistic about the richest 10% producing 52% of emissions shows that responsibility for climate change is not shared equally. What I took from everyone’s responses is that individual choices matter, but cleaner technology, government policy, and changes from major industries will have a much greater impact.
                            </p>
                        </div>

                        <div className='mb-5'>
                            <p>10. Make an action plan. Think of something your group can do to inform people in your community of the CO2 crisis. What changes can you make personally? (10 points)</p>
                            <p>This should include ideas from every member of the group and should be summarized by a student different from the one who summarized question 9.</p>
                            
                            <p>Thoughts from <b>Ashley</b>:</p>
                            <p className='text-danger fst-italic'>
                                I think the easiest, most sustainable way to reduce CO2 emissions is by making small adjustments to daily life instead of overhauling everything we do in a single day. Everyone has heard of what CO2 emissions do to the environment, but I definitely think introducing them to thorough articles like these would be extremely helpful in taking their abstract idea of what emissions do and present them in a tangible, more understandable piece of information. Education is one of (if not the very most) important things for any society, as knowledge is power. The more you know, the more you can do and the more you want to do. Though, it’s obvious people have been trying to get this information out to the public for years, and even with the adaptation of going online has largely backfired due to people’s quick dismissal of “click/ragebait” or “fake news”.
                            </p>
                            <p className='text-danger fst-italic'>
                                I think in a sense, the “advertising” for becoming a more eco-friendly society needs to change. Instead of approaching it as a crisis necessarily in every single space (though it is one), introducing low-stress information could benefit it strongly. Consider recycling, and how it’s not considered a negative idea and is done by the majority of Americans. Regardless about the truth of recycling (like the issues with plastic), it is still very uncontroversial to the average person. While you obviously would not want to lie to the public, I think the method should be less about status reports and causes for concern - those have their place, such as the article and similar news outlets should show this information, but to incentivize behavioral changes it should be encouraged through easy, low-effort and low-stress methods. People generally want to do what they believe is helpful and beneficial to society, but people are also generally lazy and desire short-term rewards - which isn’t necessarily a bad thing, this is how humans have optimized different technologies and machinery, creating “smarter not harder” methods-,  so by eliminating that barrier and making it easier for people I think would have great benefits for the goal to lower greenhouse gasses. 
                            </p>
                            <p className='text-danger fst-italic'>
                                As for thinking in longevity, I think advocating for the implementation better transportation systems specifically is crucial for our country, not just for the emissions, but for life satisfaction and our sense of movement. Looking at countries like Japan and even in our home country in states like New York, where there are robust and reliable transportation systems like buses, they have the smallest CO2 emissions within the transportation sectors. I think a major consideration the USA should take specifically is bullet trains, mimicking places like Japan, China, and Europe. Bullet trains emit up to 90% less greenhouse gases and emissions per passenger than cars and airplanes, and while America is a large country, with China being a similar size I see no reason why something like a bullet train system could not be plausible, functional, reliable, safer, and more eco-friendly.
                            </p>
                            <p className='text-danger fst-italic'>
                                Changes for myself would include adapting into more sustainable habits, like using cold water for washing clothes since it’s just as effective the majority of the time as hot water. Dietary options are also very easy to implement, such as considering days where I don’t eat red meat in particular and instead opting for white meats, and having more plant-based meals in general. If available, I’ve also been wishing to walk a lot more in my daily life. Walkability in America is generally much worse compared to other countries, but there are absolutely places that are both promoted and easy. I think for everyone making small tweaks like this where you don’t really have to think all too hard about it is what makes it that much easier to commit to long-term.
                            </p>

                            <p>Thoughts from <b>Nick</b>:</p>
                            <p className='text-danger fst-italic'>
                                The first thought that comes to mind to spread awareness about CO2 emissions in my community is to set up a stand at the farmers market. Due to the high amount of foot traffic and it being open during months where the effects of climate change can definitely be felt, being able to draw in lots of people over the course of many days should be a breeze. People who are choosing to shop at a farmers market are already most likely a part of the demographic of people who have climate change as a big issue they want addressed by people in power. Because of this, being able to teach or inform them or their friends/family would be a breeze. Perhaps some of them already know a lot about climate change, but having pamphlets and little prizes to win with a spin-wheel, would allow for people to feel really engaged with the topic and presenter.
                            </p>
                            <p className='text-danger fst-italic'>
                                Changes for myself would be largely limited to not driving myself around as much for errands around town. Making sure to carpool when spending time with friends and family or riding public transport to and from work are both ways that I would be able to personally decrease my own emissions. When I have the means to purchase a new car (my current car is from 1996), going with a hybrid or all electric option would be a huge benefit as well. And it would make carpooling that much more effective.
                            </p>

                            <p>Thoughts from <b>Juan</b>:</p>
                            <p className='text-danger fst-italic'>
                                To inform people in my community, I think a good place to start is with people I already know, especially friends and family who would actually be open to the conversation. Information about climate change is easy to ignore, and social media algorithms are good at filtering out topics people do not normally interact with. Even sharing one or two facts that genuinely surprised me could start a meaningful conversation.
                            </p>
                            <p className='text-danger fst-italic'>
                                The changes I make would need to fit realistically into my normal life. Driving is necessary where I live, and carpooling is rarely convenient, so completely giving up my car would not be practical. I could still combine errands to avoid unnecessary trips and keep my car maintained so it uses fuel more efficiently. At home, I could wash more of my clothes in cold water, pay closer attention to wasting electricity, and buy used items when it makes sense instead of automatically buying something new. None of these changes would completely rearrange my life, which makes me more likely to continue doing them.
                            </p>

                            <p>Group member 4 – please summarize the thoughts of your group as you add your own ideas.</p>
                            <p><b>Patrick:</b></p>
                            <p className='text-danger fst-italic'>
                                Our group identified an issue with existing climate awareness information: it’s easy to ignore. Talk about climate change is everywhere, and it has been for most of my life. Most people are aware, they’ve heard about the severity and the need for corrective action. However the effects are slow moving. It’s hard for people to grasp the impact climate change will have on their own life. Because of the ubiquity of climate discussions, people have become desensitized. We’ve learned to tune out the alarm bells that spell climate disaster. Social media in particular is excellent at filtering out the warnings that people aren’t interested in hearing. We think our message should start offline, locally.
                            </p>
                            <p className='text-danger fst-italic'>
                                In order to break free of the desensitizing nature, Ashley proposes that we focus on the small adjustments. If we can encourage change through low-stress behavioral changes, they might actually stick. Recycling for example is universally accepted and uncontroversial. Juan proposed we start with friends and family. Sharing some interesting or shocking climate facts in a personalized way could open the discussion for ways we can reduce our impact. Then we go one step bigger.
                            </p>
                            <p className='text-danger fst-italic'>
                                Nick proposes that we set up a climate awareness stand at the farmer’s market. The farmer’s market is ideal because it operates in one of the most climate affected seasons: summer. It’s harder to ignore while standing in record breaking heat and breathing the smoke from record breaking fire seasons. The demographic of people at the farmers market tend to be more climate conscious and could be more receptive to action items. If we hand out prizes and pamphlets, we could recruit people to the growing movement of climate activism.
                            </p>
                            <p className='text-danger fst-italic'>
                                I think with a movement of climate activists, we could begin to lobby and push for societal changes. For example, Ashley brought up public transportation and how we could build more efficient systems. We think it is important to start at the grass roots level, building personal connections, rather than allowing our message to be filtered out by an algorithm. To summarize, our plan is to start with friends and family, expand locally at spaces like our local farmer’s market, and then organize the collective interest towards meaningful societal change.
                            </p>
                        </div>

                        <div ref={project3EndRef} id='endRef5' className='stats-ref-end'></div>
                    </div>


                    {/* PROJECT 3 REFLECTION */}

                    <div className='mb-5 pb-5'>
                        <div ref={project3ReflectionRef} id='strRef6' className='stats-ref-start'></div>

                        <GroupReflection
                            mobileMode={mobileMode}
                            projectTitle={'Project 3: Greenhouse Gasses'}
                            groupNumber={1}
                            timeSpent={4}
                            highlighted={[
                                {'a': 3, 'other': ''},
                                {'a': 4, 'other': ''},
                                {'a': 1, 'other': ''},
                                {'a': 2, 'other': ''},
                                {'a': 4, 'other': ''},
                                {'a': 5, 'other': 'ADEQUATE'},
                            ]}
                            reflection={<>
                                <p className='fst-italic'>
                                    Our group worked asynchronously. We each added to the project at different times and checked each other’s work. We communicated in a group discussion to iron out questions or errors.
                                </p>
                                <p className='fst-italic'>
                                    I didn't have any negative experiences. My teammates each contributed well and we were open to criticism. I enjoyed writing the summary for question 10. Everyone’s responses seemed to align perfectly into an action plan.
                                </p>
                                <p className='fst-italic'>
                                    One thing I learned that still shocks me is that global CO2 emissions have remained stable over the last two decades. Obviously any amount of emissions is making climate change worse, but with the rise of energy usage and production I would have anticipated rising emissions to match. It does make me a little hopeful, although there is a long way to go before we could reverse the damage.
                                </p>
                            </>}
                        />

                        <div ref={project3ReflectionEndRef} id='endRef6' className='stats-ref-end'></div>
                    </div>


                    {/* PROJECT 4: EXPECTED VALUE */}

                    <div className='mb-5 pb-5'>
                        <div ref={project4Ref} id='strRef7' className='stats-ref-start'></div>
                        
                        <Row>
                            <Col className={mobileMode ? '' : 'text-nowrap'} xs={mobileMode ? '12' : ''}>
                                <h3>Project 4 – Expected Value Games</h3>
                            </Col>
                            <Col className='text-nowrap' xs={'auto'}>
                                <h3 className='stats-h3'>Name: <u>Patrick Lindsay</u></h3>
                            </Col>
                        </Row>
                        
                        <LazyLoadImage
                            src={Project4Game}
                            placeholderSrc={Project4GamePlaceholder}
                            alt={'Roll of 4 dice on Random.org website'}
                            wrapperClassName='stats-project4-img-game'
                            className='w-100'
                        />

                        <h4 className='fw-bold m-0'>Payout Pairs</h4>
                        <p className='m-0'>“Play Payout Pairs for pure profit”</p>
                        <p>The player will roll 4 6-sided dice. It will cost $11 to play.</p>

                        <h4 className='fw-bold m-0'>Here are the payouts:</h4>
                        <p className='m-0'>You get paid based on how many matching dice you roll.</p>
                        
                        <table className='stats-project4-table-payout mb-4'>
                            <tbody>
                                <tr>
                                    <td>0</td>
                                    <td>Ex: 1234</td>
                                    <td>You lose</td>
                                </tr>
                                <tr>
                                    <td>1 Pair</td>
                                    <td>Ex: <span className='text-danger'>11</span>23</td>
                                    <td>You win $10</td>
                                </tr>
                                <tr>
                                    <td>2 Pairs</td>
                                    <td>Ex: <span className='text-danger'>11</span><span className='text-primary'>22</span></td>
                                    <td>You win $20</td>
                                </tr>
                                <tr>
                                    <td>A Tripple</td>
                                    <td>Ex: <span className='text-danger'>111</span>2</td>
                                    <td>You win $30</td>
                                </tr>
                                <tr>
                                    <td>A Quadruple</td>
                                    <td>Ex: <span className='text-danger'>1111</span></td>
                                    <td>You win $60</td>
                                </tr>
                            </tbody>
                        </table>

                        <h4 className='fw-bold m-0'>The expected payout and percent profit:</h4>
                        <p>
                            There are 1296 ways to roll 4 dice, but only a few unique ways to order the matching numbers.
                            Each letter represents any number 1-6. Below are all the unique ways to roll 4 dice:
                        </p>

                        <LazyLoadImage
                            src={Project4Caclulations}
                            placeholderSrc={Project4CalculationsPlaceholder}
                            alt={'Probability calculations for Payout Pairs show a $10 expected payout per game'}
                            wrapperClassName='stats-project4-img-calculations'
                            className='w-100'
                        />

                        <p className='m-0'>I can expect to win $11 - $10 = <b>$1</b> for each game played.</p>
                        <p>Profit  = 1/11 = <b>9.1%</b> of the buy in cost.</p>

                        <p className='mt-5'>My Three Players:</p>
                        <table className='stats-project4-table-results'>
                            <thead>
                                <tr>
                                    <td className='border-0'></td>
                                    <td colSpan={2} className='border-0'>Malyssa Sisson - Paid $110</td>
                                    <td colSpan={2} className='border-0'>Simon Kim - Paid $110</td>
                                    <td colSpan={2} className='border-0'>Nicholas Walker - Paid $110</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>Roll</th>
                                    <th>Payout</th>
                                    <th>Roll</th>
                                    <th>Payout</th>
                                    <th>Roll</th>
                                    <th>Payout</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='text-nowrap'>Game 1:</td>
                                    <td>2 6 4 3</td>
                                    <td className='text-center'>$0</td>
                                    <td>6 1 6 4</td>
                                    <td className='text-center'>$10</td>
                                    <td>3 1 5 4</td>
                                    <td className='text-center'>$0</td>
                                </tr>
                                <tr>
                                    <td className='text-nowrap'>Game 2:</td>
                                    <td>4 6 3 3</td>
                                    <td className='text-center'>$10</td>
                                    <td>6 4 6 1</td>
                                    <td className='text-center'>$10</td>
                                    <td>4 2 4 6</td>
                                    <td className='text-center'>$10</td>
                                </tr>
                                <tr>
                                    <td className='text-nowrap'>Game 3:</td>
                                    <td>4 5 1 1</td>
                                    <td className='text-center'>$10</td>
                                    <td>3 4 2 3</td>
                                    <td className='text-center'>$10</td>
                                    <td>3 3 3 5</td>
                                    <td className='text-center'>$30</td>
                                </tr>
                                <tr>
                                    <td className='text-nowrap'>Game 4:</td>
                                    <td>3 3 3 6</td>
                                    <td className='text-center'>$30</td>
                                    <td>4 3 3 1</td>
                                    <td className='text-center'>$10</td>
                                    <td>4 5 1 4</td>
                                    <td className='text-center'>$10</td>
                                </tr>
                                <tr>
                                    <td className='text-nowrap'>Game 5:</td>
                                    <td>3 1 2 5</td>
                                    <td className='text-center'>$0</td>
                                    <td>2 4 6 2</td>
                                    <td className='text-center'>$10</td>
                                    <td>5 6 2 2</td>
                                    <td className='text-center'>$10</td>
                                </tr>
                                <tr>
                                    <td className='text-nowrap'>Game 6:</td>
                                    <td>5 3 5 3</td>
                                    <td className='text-center'>$20</td>
                                    <td>5 2 2 4</td>
                                    <td className='text-center'>$10</td>
                                    <td>3 5 1 1</td>
                                    <td className='text-center'>$10</td>
                                </tr>
                                <tr>
                                    <td className='text-nowrap'>Game 7:</td>
                                    <td>3 3 6 5</td>
                                    <td className='text-center'>$10</td>
                                    <td>1 4 6 1</td>
                                    <td className='text-center'>$10</td>
                                    <td>3 4 1 3</td>
                                    <td className='text-center'>$10</td>
                                </tr>
                                <tr>
                                    <td className='text-nowrap'>Game 8:</td>
                                    <td>3 3 4 4</td>
                                    <td className='text-center'>$20</td>
                                    <td>2 4 4 3</td>
                                    <td className='text-center'>$10</td>
                                    <td>6 6 2 2</td>
                                    <td className='text-center'>$20</td>
                                </tr>
                                <tr>
                                    <td className='text-nowrap'>Game 9:</td>
                                    <td>1 4 6 5</td>
                                    <td className='text-center'>$0</td>
                                    <td>6 4 1 5</td>
                                    <td className='text-center'>$0</td>
                                    <td>3 2 5 1</td>
                                    <td className='text-center'>$0</td>
                                </tr>
                                <tr>
                                    <td className='text-nowrap'>Game 10:</td>
                                    <td>6 4 6 5</td>
                                    <td className='text-center'>$10</td>
                                    <td>5 6 6 5</td>
                                    <td className='text-center'>$20</td>
                                    <td>1 1 3 4</td>
                                    <td className='text-center'>$10</td>
                                </tr>
                                <tr>
                                    <th className='text-nowrap'>TOTAL:</th>
                                    <td></td>
                                    <th className='text-center'>$110</th>
                                    <td></td>
                                    <th className='text-center'>$100</th>
                                    <td></td>
                                    <th className='text-center'>$110</th>
                                </tr>
                            </tbody>
                        </table>

                        <p className='mt-2'>On 30 games I should have made $1 x 30 = $30, but I only made $10.</p>

                        <h4 className='fw-bold mb-0 mt-4'>Reflection:</h4>
                        <p>I am really happy with my game. I think in hindsight, I might have shifted the odds further in favor of the house. Two people broke even on my game and the other only lost $10. It’s the difference of one roll, but I am curious how many games would it take to get close to the expected profit.</p>
                        <p>Outside of profitability, it was fun to reroll hoping for a bigger win. I like that there is a 72% chance to get most of your money back, it really keeps you playing. I was surprised how unlucky my rolls were in other people’s games. I’m not particularly interested in gambling, this project just cemented that for me.</p>
                        <p>I particularly enjoyed applying the probability concepts we learned earlier this quarter to create my game. I had to reference my notes, but it turned the abstract process into something real for me. That is something I don’t think I would have gotten from making another spinner game.</p>

                        
                        <h4 className='fw-bold mt-4 mb-0'>Games I played (and amount I won/lost) from other members of my group:</h4>
                        <p className='m-0'>Game 1: Malyssa’s <i>M&M’s wheel of probability</i>.</p>
                        <p>I spent $50 and walked away with $15. I lost $35.</p>

                        <p className='m-0'>Game 2: Simon’s <i>Spin O' Rama</i>.</p>
                        <p>I spent $50 and walked away with $34. I lost $16.</p>

                        <p className='m-0'>Game 3: Nick’s <i>Heads Up 5</i>.</p>
                        <p>I spent $100 and walked away with $56. I lost $44.</p>
                        
                        <div ref={project4EndRef} id='endRef7' className='stats-ref-end'></div>
                    </div>
                    
                    
                    {/* PROJECT 4 REFLECTION */}

                    <div className='mb-5 pb-5'>
                        <div ref={project4ReflectionRef} id='strRef8' className='stats-ref-start'></div>
                            
                        <IndividualReflection
                        mobileMode={mobileMode}
                            projectTitle={'Project 4: Expected Value Games'}
                            timeSpent={3}
                            highlighted={[
                                {'a': 1, 'other': ''},
                                {'a': 4, 'other': ''},
                                {'a': 2, 'other': ''},
                                {'a': 4, 'other': ''},
                                {'a': 3, 'other': ''},
                                {'a': 2, 'other': ''},
                            ]}
                            reflection={<>
                                <p className='fst-italic'>
                                    I enjoyed seeing what games other people came up with. I was very stressed with the
                                    time to complete because the due dates left very little time to receive/give feedback.
                                    I am not happy with how many of my peers wait until the last minute to complete assignments.
                                </p>
                                <p className='fst-italic'>
                                    I did come away with a positive experience because crafting my own game forced me to
                                    apply the probability concepts we learned to find the expected value. I feel like many
                                    assignments this quarter were procedural and did not require critical thinking. This project
                                    was the exception and it felt very beneficial.
                                </p>
                            </>}
                        />

                        <div ref={project4ReflectionEndRef} id='endRef8' className='stats-ref-end'></div>
                    </div>


                    {/* MYOPENMATH REFLECTION */}

                    <div className='mb-5 pb-5'>
                        <div ref={myOpenMathRef} id='strRef9' className='stats-ref-start'></div>
                        
                        <Row>
                            <Col className={'p-0 me-3' + (mobileMode ? '' : ' text-nowrap')} xs={mobileMode ? '12' : ''}>
                                <h3>MyOpenMath Reflection Math 146</h3>
                            </Col>
                            <Col className='text-nowrap p-0' xs={'auto'}>
                                <h3 className='stats-h3'>Name: <u>Patrick Lindsay</u></h3>
                            </Col>
                        </Row>

                        <p>
                            Use a scale of 1 to 5 (1 being the lowest score meaning you do not agree with
                            the statement) to rate these different aspects of MATHXL. If you did not use
                            something, put N/A.
                        </p>
                        <ol className='ms-4'>
                            <li>Overall, I found MOM to be easy to navigate. <b><u>&nbsp;&nbsp;5&nbsp;&nbsp;</u></b></li>
                            <li>The additional video links in MOM questions were helpful in completing the assignments. <b><u>&nbsp;&nbsp;4&nbsp;&nbsp;</u></b></li>
                            <li>The videos posted in Canvas were helpful in completing the assignments. <b><u>&nbsp;&nbsp;5&nbsp;&nbsp;</u></b></li>
                            <li>The textbook links provided in Canvas were helpful in completing the assignments. <b><u>&nbsp;N/A&nbsp;</u></b></li>
                            <li>A calculator was helpful in completing the assignments. <b><u>&nbsp;&nbsp;5&nbsp;&nbsp;</u></b></li>
                            <li>GeoGebra was helpful in completing the assignments. <b><u>&nbsp;&nbsp;5&nbsp;&nbsp;</u></b></li>
                            <li>Desmos was helpful in completing the assignments. <b><u>&nbsp;N/A&nbsp;</u></b></li>
                            <li>I searched for my own videos to help complete the assignment. <b><u>&nbsp;&nbsp;1&nbsp;&nbsp;</u></b></li>
                            <li>Having more than 1 chance per question was helpful while completing the assignments. <b><u>&nbsp;&nbsp;5&nbsp;&nbsp;</u></b></li>
                            <li>I had to seek help outside the aids posted in MyOpenMath and Canvas. <b><u>&nbsp;&nbsp;1&nbsp;&nbsp;</u></b></li>
                            <li>I got help at the LSS-EAST (math center building 22) at least once during the quarter. <b><u>&nbsp;&nbsp;1&nbsp;&nbsp;</u></b></li>
                            <li>Having late passes in MyOpenMath made it easier for me to do well in the class. <b><u>&nbsp;N/A&nbsp;</u></b></li>
                            <li>Understanding how to enter answers in MyOpenMath was easy. <b><u>&nbsp;&nbsp;4&nbsp;&nbsp;</u></b></li>
                            <li>The way things are worded in MyOpenMath is sometimes confusing. <b><u>&nbsp;&nbsp;5&nbsp;&nbsp;</u></b></li>
                            <li>I felt like I had enough time to complete quizzes and/or tests. <b><u>&nbsp;&nbsp;5&nbsp;&nbsp;</u></b></li>
                            <li>Overall, the number of assignments due throughout the quarter was reasonable. <b><u>&nbsp;&nbsp;5&nbsp;&nbsp;</u></b></li>
                            <li>The homework assignments in MyOpenMath helped me understand the material. <b><u>&nbsp;&nbsp;5&nbsp;&nbsp;</u></b></li>
                            <li>I would have rather done more group projects and less homework in MyOpenMath. <b><u>&nbsp;&nbsp;2&nbsp;&nbsp;</u></b></li>
                            <li>I would recommend classes that use MyOpenMath to other students. <b><u>&nbsp;&nbsp;4&nbsp;&nbsp;</u></b></li>
                            <li>I have used other on-line homework programs that were easier to use. <b><u>&nbsp;N/A&nbsp;</u></b></li>
                            <li>If you liked another program better, what is the name of the program? <b><u>&nbsp;N/A&nbsp;</u></b></li>
                        </ol>

                        <div ref={myOpenMathEndRef} id='endRef9' className='stats-ref-end'></div>
                    </div>


                    {/* WEEKLY VIDEOS REFLECTION */}

                    <div className='mb-5 pb-5'>
                        <div ref={weeklyVideosRef} id='strRef10' className='stats-ref-start'></div>

                        <h3>Weekly Videos Reflection/Assessment Math 146</h3>
                        <p>
                            There were 5 or 6 weekly videos please keep them in mind as you answer the
                            following questions. Yes/No answers are fine, except when I ask “Why or Why
                            not”. You are welcome to add a comment to any question.
                        </p>
                        <ol className='ms-5 mb-5'>
                            <li>Intro to your Probability and Statistics Class</li>
                            <li>That’s Just so Cool</li>
                            <li>Information Graphics</li>
                            <li>Counter-Intuitive Solutions</li>
                            <li>200 Countries in 200 Years</li>
                            <li>Is a College Education a Good Value?</li>
                        </ol>

                        <p className='m-2'>
                            1. Which of these videos did you find the most interesting?
                        </p>
                        <p className='fst-italic ps-5 mb-5'>
                            4. I think it's the couter-intuitive facts that highlight the importance of statistics.
                        </p>

                        <p className='m-2'>
                            2. Did you think the length of the videos was reasonable?
                        </p>
                        <p className='fst-italic ps-5 mb-5'>Yes.</p>

                        <p className='m-2'>
                            3. These videos are in the course to help make the course more interesting and provide you with insights
                            into statistics that you can’t get from working out of a textbook. Would you recommend leaving
                            them in for future classes? Why or why not?
                        </p>
                        <p className='fst-italic ps-5 mb-5'>
                            Yes. I think they are serving their purpose. I personally get very little from textbooks. I didn’t read
                            it at all this quarter. I think the younger generations are more likely to be receptive to the video format
                            over a textbook as time goes on. I think it's best to have both so people can find what works best for them.
                        </p>

                        <p className='m-2'>
                            4. If these videos were not a part of your grade, do you think you would have watched them?
                        </p>
                        <p className='fst-italic ps-5 mb-5'>
                            No.
                        </p>

                        <p className='m-2'>
                            5. Did you share anything you learned in these videos with a friend or family member?
                        </p>
                        <p className='fst-italic ps-5 mb-5'>
                            No.
                        </p>

                        <p className='m-2'>
                            6. Would you suggest adding more weekly videos and fewer projects and activities? Why or why not?
                        </p>
                        <p className='fst-italic ps-5 mb-5'>
                            No. I think the weekly videos are beneficial because they show practical applications of statistics in a
                            low stress way. But I think the projects and activities that force us to apply learned concepts are more important.
                            I think there is room for both, the videos are a quick assignment and don't get in the way of other assignments. You could
                            add more, but if it's at the expense of the projects and activities I don't think it would be worth it.
                        </p>

                        <div ref={weeklyVideosEndRef} id='endRef10' className='stats-ref-end'></div>
                    </div>


                    {/* COURSE SELF RELFECTION */}

                    <div>
                        <div ref={courseRefectionRef} id='strRef11' className='stats-ref-start'></div>

                        <Row>
                            <Col className={'p-0 me-3' + (mobileMode ? '' : ' text-nowrap')} xs={mobileMode ? '12' : ''}>
                                <h3>Course Self-Reflection Math 146</h3>
                            </Col>
                            <Col className='text-nowrap p-0' xs={'auto'}>
                                <h3 className='stats-h3'>Name: <u>Patrick Lindsay</u></h3>
                            </Col>
                        </Row>
                        
                        <p className='stats-course-reflection-question'>
                            Please rank these items from 1 (liked the least) to 8 (liked the most) Use each
                            number one time.
                        </p>

                        <Row className='mb-4'>
                            <Col className='p-0 stats-course-reflection-rank-item' sm={'12'} md>
                                <Row>
                                    <Col className='p-0' xs={'auto'}>
                                        <span><b><u>&nbsp;&nbsp;3&nbsp;&nbsp;</u></b></span>
                                    </Col>
                                    <Col>
                                        <p>MyOpenMath homework and quizzes</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='p-0' xs={'auto'}>
                                        <span><b><u>&nbsp;&nbsp;4&nbsp;&nbsp;</u></b></span>
                                    </Col>
                                    <Col>
                                        <p>Weekly Videos in CANVAS</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='p-0' xs={'auto'}>
                                        <span><b><u>&nbsp;&nbsp;5&nbsp;&nbsp;</u></b></span>
                                    </Col>
                                    <Col>
                                        <p>Group Project – Greenhouse Gasses</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='p-0' xs={'auto'}>
                                        <span><b><u>&nbsp;&nbsp;2&nbsp;&nbsp;</u></b></span>
                                    </Col>
                                    <Col>
                                        <p>Group Project – Scatter Plots</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className='p-0 stats-course-reflection-rank-item' sm={'12'} md>
                                <Row>
                                    <Col className='p-0' xs={'auto'}>
                                        <span><b><u>&nbsp;&nbsp;6&nbsp;&nbsp;</u></b></span>
                                    </Col>
                                    <Col>
                                        <p>Solo Project – Expected Value Games</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='p-0' xs={'auto'}>
                                        <span><b><u>&nbsp;&nbsp;1&nbsp;&nbsp;</u></b></span>
                                    </Col>
                                    <Col>
                                        <p>Solo Project – Read an article</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='p-0' xs={'auto'}>
                                        <span><b><u>&nbsp;&nbsp;7&nbsp;&nbsp;</u></b></span>
                                    </Col>
                                    <Col>
                                        <p>Midterm exam was taken at home</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='p-0' xs={'auto'}>
                                        <span><b><u>&nbsp;&nbsp;8&nbsp;&nbsp;</u></b></span>
                                    </Col>
                                    <Col>
                                        <p>Final exam was replaced by a final portfolio</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <p className='stats-course-reflection-question'>
                            Rate each question on a 1 to 5 scale. 1 indicates that you do not agree with
                            the statement.
                        </p>

                        <ol className='ms-4 mb-5'>
                            <li>This class required more effort than the average class I have taken.<b><u>&nbsp;&nbsp;1&nbsp;&nbsp;</u></b></li>
                            <li>The material in this class was more difficult than the average class.<b><u>&nbsp;&nbsp;2&nbsp;&nbsp;</u></b></li>
                            <li>The learning aids provided were enough for me to complete the work.<b><u>&nbsp;&nbsp;5&nbsp;&nbsp;</u></b></li>
                            <li>This class improved my ability to work with a group.<b><u>&nbsp;&nbsp;1&nbsp;&nbsp;</u></b></li>
                            <li>This class required me to think critically to solve problems.<b><u>&nbsp;&nbsp;2&nbsp;&nbsp;</u></b></li>
                            <li>This class improved my knowledge of technology.<b><u>&nbsp;&nbsp;3&nbsp;&nbsp;</u></b></li>
                            <li>This class increased my understanding of CANVAS.<b><u>&nbsp;&nbsp;1&nbsp;&nbsp;</u></b></li>
                            <li>I felt this class had a lot of busy work that did not help me understand the material.<b><u>&nbsp;&nbsp;2&nbsp;&nbsp;</u></b></li>
                            <li>I liked this class more than I thought I would.<b><u>&nbsp;&nbsp;4&nbsp;&nbsp;</u></b></li>
                            <li>I am going to pass this class with the grade I deserve.<b><u>&nbsp;&nbsp;4&nbsp;&nbsp;</u></b></li>
                            <li>I would recommend this class to other students.<b><u>&nbsp;&nbsp;3&nbsp;&nbsp;</u></b></li>
                            <li>I have a clear understanding of Statistics and how it is used in society.<b><u>&nbsp;&nbsp;4&nbsp;&nbsp;</u></b></li>
                        </ol>

                        <p className='stats-course-reflection-question'>
                            On another piece of paper, please write two or three well-formed paragraphs
                            describing your experience, or something you are taking away from the class. You
                            can choose your own topics, or you can speak to one or two of the following
                            prompts given below. This is not an evaluation of your instructor, but a reflection of
                            your feelings and performance as you leave the class.
                        </p>

                        <ul className='ms-4 mb-5'>
                            <li>The most interesting thing I learned in this class was …</li>
                            <li>Something I did not expect when I signed up for this class was…</li>
                            <li>My effort in this class was …</li>
                            <li>My feelings about probability and statistics…</li>
                            <li>I wish that this class was more/less like …</li>
                            <li>I had no idea that…</li>
                            <li>My sense of accomplishment upon completing this class is…</li>
                        </ul>
                        
                        <p>
                            Overall, I am very happy with this class. Since I’ve taken most of Calculus this class was not difficult,
                            but it filled in some missing pieces. Learning the vocabulary and understanding standard deviations will
                            be helpful in deciphering studies going forward. I think misinformation is one of the biggest challenges
                            we are facing today and this class has given me some confidence in interpreting what studies actually say
                            rather than what I might want it to say.
                        </p>
                        <p>
                            One thing that I didn’t like was the group projects. Not because they were bad or unhelpful (I think they
                            were good), but because the communication and collaboration was terrible. I’ve been out of school for a
                            few years. I’ve never had so much difficulty getting a response from teammates. Two people on the same
                            project never even introduced themselves. On top of that everyone waits until the last minute to complete
                            assignments. I can’t tell if it was just because you had a gracious late policy, but I’m not sure when
                            procrastination became the norm. This was the first quarter back for me so I’ll see how it goes in
                            future classes.
                        </p>
                        <p>
                            I liked the asynchronous instruction mode and the reduced reliance on textbooks. The shorter videos made
                            refreshing on specific topics easy. One critique I have is that there are discrepancies with the course
                            content in Canvas. All of the MOM homework was consistent, but some lecture assignments were in Canvas
                            and some in MOM. Also there was no direct link to the notes in each module. I found that some modules
                            had differently formatted notes depending on whether you click the calendar link from the To Do list vs
                            the notes link in a lecture assignment. The substance is all there, but I think small discrepancies have
                            accumulated over the years.
                        </p>
                    </div>
                </Col>
            </Row>
            
        </Container>
    )
}