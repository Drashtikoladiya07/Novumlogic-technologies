import "./home.css";
import worker from '../../assets/img/worker.png';
import mission1 from "../../assets/img/about2.png";
import mission2 from "../../assets/img/about3.png";
import Contact from "./contact";
import { Container, Row, Col } from "react-bootstrap";

function About() {
    const data = {
        fact1: [
            {
                title: 'Creative',
                icon: 'fa fa-check',
                description: 'Our creative heads together make your application distinctive',
            },

            {
                title: 'Professional',
                icon: 'fa fa-check',
                description: 'Delivery of services with perfection yet in given time.',
            },

            {
                title: 'Experienced',
                icon: 'fa fa-check',
                description: 'Proficient hands moulding the perfect application.',
            },
        ],

        fact2: [
            {
                title: 'Dedicated',
                icon: 'fa fa-check',
                description: 'Committed towards achieving high levels of customer satisfaction',
            },

            {
                title: '24/7 Support',
                icon: 'fa fa-check',
                description: 'Your queries and/or concerns are just a call away.',
            },

            {
                title: 'Enthusiastic',
                icon: 'fa fa-check',
                description: 'We welcome new technologies with open hands.',
            },
        ],
    }

    return (
        <div className="about">
            <div className="header-image bg-img px-5">
                <Container className="bag py-5 px-5">
                    <h2 className="fs-1 pt-4" style={{ fontFamily: 'poppins' }}><strong className="fw-bold">Competition</strong> makes us faster,</h2>
                    <h2 className="fs-1 pt-3" style={{ fontFamily: 'poppins' }}><strong className="fw-bold">Collaboration</strong> makes us better.</h2>
                </Container>
            </div>

            <header className="section text-center py-5">
                <span className='text-uppercase pt-5' style={{ color: '#96a2b2' }}>Our</span>
                <h2 className='py-3 fs-1'>Mission</h2><h1 className="mb-3"></h1>
                <p className='fs-5' style={{ color: '#606873' }}>Change the way companies work, change the way projects are completed.</p>
            </header>

            <Container className="pb-5 border-bottom px-5">
                <Row className="pb-5">
                    <Col lg={4} className="border-end">
                        <img src={mission1} alt="mission1" className="w-100" />
                    </Col>
                    <Col lg={8} className="pt-5 ps-4">
                        <div className="code-preview" style={{ color: '#606873' }}>
                            <p className="fs-5 border-start border-4 ps-3 py-2">To brighten lives, to touch hearts, to save souls - all using technology.</p>
                            <p>Founded in 2010, Novumlogic Technologies Pvt Ltd is destination for building the best product, cause no harm, use business to inspire and implement solutions using latest technology.</p>
                            <ul className="">
                                <li>
                                    <p>Our goal is to build best solution as tech product for the real-life problems, to make world better place.</p>
                                </li>
                                <li>
                                    <p>Not to become a corporate company, but to be a huge start up.</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="py-5">
                <header className="section text-center py-5">
                    <span className='text-uppercase pt-5' style={{ color: '#96a2b2' }}>Our</span>
                    <h2 className='py-3 fs-1'>Vision</h2><h1 className="mb-3"></h1>
                    <p className='fs-5' style={{ color: '#606873' }}>To create a better every day life with help of technology.</p>
                </header>
            </div>

            <Container className="pb-5 border-bottom px-5">
                <Row className="pb-5">
                    <Col lg={8} className="ps-4 pt-5 border-end">
                        <div className="code-preview" style={{ color: '#606873' }}>
                            <p className="border-start border-4 ps-3 py-2 ms-5">If you are working on something exciting that you really care about, you don't have to be pushed. The vision pulls you.<br />
                                <span className="fw-light">- Steve Jobs , Apple Inc.</span></p>
                            <ul className="">
                                <li>
                                    <p><b>Fun Workplace</b><br />Novumlogic Technologies Pvt Ltd is a playground where people love what they do and they do what they love.</p>
                                </li>
                                <li>
                                    <p><b>Technology Leader</b><br />Novumlogic Technologies Pvt Ltd is a pinnacle where we behave staying a step ahead in technology.</p>
                                </li>
                                <li>
                                    <p><b>Target Excellence</b><br />We believe in delivering no less than excellence in work.</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <img src={mission2} alt="mission2" className="w-100" />
                    </Col>
                </Row>
            </Container>

            <div className="pt-5">
                <header className="section text-center py-5">
                    <span className='text-uppercase pt-5' style={{ color: '#96a2b2' }}>Let us tell you</span>
                    <h2 className='py-3 fs-1' style={{ fontFamily: 'Poppins' }}><strong>Who</strong> Are We?</h2><h1 className="mb-3"></h1>
                    <p className='fs-5' style={{ color: '#606873' }}>We are awesome, innovative, evolving</p>
                </header>
            </div>

            <div id='sec-who-are-we'>
                <Container className="px-5">
                    <Row className="px-5">
                        {data.fact1.map((item) => (
                            <Col lg={4} className="p-4 my-3">
                                <div className="fact pt-4">
                                    <h6 className="fs-4 border-bottom pb-3" style={{ fontFamily: 'poppins' }}>{item.title}</h6>
                                    <i className={item.icon + ' p-2'} ></i>
                                    <h6 className="" style={{ color: '#606873' }}>{item.description}</h6>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <div className="img text-center">
                    <img src={worker} alt="worker" className='img-fluid' />
                </div>
                <Container className="px-5 pb-5">
                    <Row className="px-5">
                        {data.fact2.map((item) => (
                            <Col lg={4} className="p-4 my-3">
                                <div className="fact pt-4">
                                    <h6 className="fs-4 border-bottom pb-3" style={{ fontFamily: 'poppins' }}>{item.title}</h6>
                                    <i className={item.icon + ' p-2'} ></i>
                                    <h6 className="" style={{ color: '#606873' }}>{item.description}</h6>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            <footer className='bg-dark'>
                <Container className="">
                    <Row className="d-flex pt-5 pb-3">
                        <Col lg={10}>
                            <a href={'overview'} className='text-decoration-none px-3 text-white Active'>Overview</a>
                            <a href={'about'} className='text-decoration-none px-3 text-white'>About</a>
                            <a href={'how'} className='text-decoration-none px-3 text-white'>How we work</a>
                            <a href={'portfolio'} className='text-decoration-none px-3 text-white'>Portfolio</a>
                            <a href={'career'} className='text-decoration-none px-3 text-white'>Career</a>                        </Col>
                        <Col lg={2}>
                            <ul className="footer-socials d-flex">
                                <li style={{ listStyleType: 'none' }}><a href="https://www.facebook.com/novumlogic/"><i className="fa-brands fa-facebook-f me-3 p-2 text-white"></i></a></li>
                                <li style={{ listStyleType: 'none' }}><a href="https://x.com/novumlogic"><i className="fa-brands fa-twitter me-3 p-2 text-white"></i></a></li>
                                <li style={{ listStyleType: 'none' }}><a href="https://www.linkedin.com/company/novumlogic/"><i className="fa-brands fa-linkedin-in me-3 p-2 text-white"></i></a></li>
                                <li style={{ listStyleType: 'none' }}><a href="https://www.instagram.com/novumlogic/"><i className="fa-brands fa-instagram me-3 p-2 text-white"></i></a></li>
                            </ul>
                        </Col>
                    </Row>
                    <div className='pb-5 d-flex justify-content-between px-3'>
                        <p style={{ color: '#606873' }}>Copyrights © 2024 All Rights Reserved by <a href='#' className='text-decoration-none' style={{ color: '#96a2b4' }}>Novumlogic</a></p>
                        <a href='#' className='text-decoration-none text-uppercase text-white fw-bold'>back to top</a>
                    </div>
                </Container>
            </footer>

        </div>
    );
}

export default About;