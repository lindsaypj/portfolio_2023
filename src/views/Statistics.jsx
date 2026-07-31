import React, { useEffect, useMemo, useReducer, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypingText from '../components/TypingText';

import '../styles/Statistics.css'
import ProjectQuestion from '../components/statistics/ProjectQuestion';
import SideNav from '../components/statistics/SideNav';


////    CONSTANTS    ////

const SECTIONS = [
    {
        id: 'ref0', title: 'Project 2: Textile Waste',
        subsections: [
            {id: 'ref1', title: 'Part 1: Fast Fashion Videos'},
            {id: 'ref2', title: 'Part 2: Clircular Economy and Sustainability'},
            {id: 'ref3', title: 'Part 3: Textile Waste PSA'}
        ]
    },
    {
        id: 'ref4', title: 'Project 2 Reflection',
        subsections: []
    },
    {
        id: 'ref5', title: 'Project 3',
        subsections: []
    },
    {
        id: 'ref6', title: 'Project 3 Reflection',
        subsections: []
    },
    {
        id: 'ref7', title: 'Project 4',
        subsections: []
    },
    {
        id: 'ref8', title: 'Project 4 Reflection',
        subsections: []
    },
    {
        id: 'ref9', title: 'MyOpenMath Reflection Assessment',
        subsections: []
    },
    {
        id: 'ref10', title: 'Weekly Videos Reflection Assessment',
        subsections: []
    },
    {
        id: 'ref11', title: 'Overall Course Self-Reflection',
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

export default function Statistics() {

    ////    INITIALIZATION    ////

    const [headersTyped, setHeadersTyped] = useReducer(typedReducer, {title: false, course: false, date: false, name: false});
    const isScrolling = useRef(false);

    const tableOfContenstRef = useRef();
    const project2Ref = useRef();
    const project2Part1Ref = useRef();
    const project2Part2Ref = useRef();
    const project2Part3Ref = useRef();

    const scrollRefs = useMemo(() => [
        project2Ref,
        project2Part1Ref,
        project2Part2Ref,
        project2Part3Ref,
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
        const id = Number(sectionID.slice(3));
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
            <Row className={'stats-cover-row'  + (headersTyped.name ? '' : ' outline-black') }>
                <Col className='p-0 text-center bg-black'>
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
                    <Row className='p-5 bg-black'>
                        <div className='stats-toc'>
                            {SECTIONS.map(section => 
                            <div key={section.id}>
                                <div className='stats-h3'>
                                    <span className={'toc-anim toc' + section.id.slice(3)}>
                                        <button
                                            className={'stats-toc-hoverable'}
                                            onClick={() => scrollToSection(section.id)}
                                        >
                                            {section.title}
                                        </button>
                                    </span>
                                </div>
                                
                                {section.subsections.length > 0 &&
                                    section.subsections.map(subsetion => 
                                        <div key={subsetion.id} className='stats-toc-indent'>
                                            <span className={'toc-anim toc' + subsetion.id.slice(3)}>
                                                <button
                                                    className={'stats-toc-hoverable'}
                                                    onClick={() => scrollToSection(subsetion.id)}
                                                >
                                                    {subsetion.title}
                                                </button>
                                            </span>
                                        </div>
                                    )
                                }
                            </div>)}
                        </div>
                    </Row>
                </Col>
            </Row>

            <Row>

                {/* SIDE NAV */}
                <Col className='stats-side-nav' xs='auto'>
                    <SideNav 
                        sections={SECTIONS}
                        scrollToSection={scrollToSection}
                        scrollRefs={scrollRefs}
                        isScrolling={isScrolling}
                    />
                </Col>


                {/* PORTFOLIO CONTENT */}
                <Col className='stats-content'>

                    {/* Project 2 */}
                    <Row className='stats-project2'>
                        <Col>

                            {/* PART 1 */}
                            
                            <div ref={project2Ref} id='ref0'>
                                <h3>Project 2 – Textile Waste</h3>
                                <p className='mt-3 mb-5'>Patrick Lindsay, Nick Walker, Cameron Price 3 points</p>
                            </div>
                            <div ref={project2Part1Ref} id='ref1'>
                                <h4>Part 1 – Watch and discuss the following Videos: 12 points</h4>
                                <ol type='1' className='ms-5'>
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
                            </div>


                            {/* PART 2 */}

                            <div ref={project2Part2Ref} id='ref2'>
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
                            </div>


                            {/* PART 3 */}
                            
                            <div ref={project2Part3Ref} id='ref3'>
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
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
        </Container>
    )
}