import React from 'react';
import './home.css';
import worker from '../../assets/img/worker.png';
import { Container, Row, Col } from 'react-bootstrap';


function Home() {
    const data = {

        records: [
            {
                icon: 'fa fa-mobile-alt',
                title: 'Mobile Applications',
                description: 'With mobiles being the primary soruce of information, a mobile app is a must to facilitate quick results in less clicks.'
            },

            {
                icon: 'fa fa-cloud',
                title: 'Web Applications',
                description: 'Web applications provide a single platform to manage resources, manage business, collect analytics, get customised reports, and much more.'
            },

            {
                icon: 'fa fa-laptop',
                title: 'Web Designing',
                description: 'A well designed Internet presence can effectively promote your brand and deliver a compelling user experience.'
            },

            {
                icon: 'fa fa-handshake',
                title: 'SEO Service',
                description: 'Want to reach out to the mass? Want to be recognized as The Monopolized Brand in the field of your business? We will put you in that lime-light.'
            },

            {
                icon: 'fa fa-cog',
                title: 'Software Development',
                description: 'A secure communication channel built to automate your organization is still a preferred choice of many medium to big organizations.'
            },

            {
                icon: 'fa fa-trophy',
                title: 'Corporate Identity',
                description: 'With creative Presentation create a special mindspace and marketspace for the company and its products.'
            },
        ],

        bg1: [
            {
                icon: 'fa fa-users',
                title: '100+',
                description: 'Happy clients',
            },

            {
                icon: 'fa fa-desktop',
                title: '140+',
                description: 'Mobile & Web Apps',
            },

            {
                icon: 'fa fa-coffee',
                title: '1300+',
                description: 'Cups of coffee',
            },

            {
                icon: 'fa fa-code',
                title: '10000+',
                description: 'Line of code',
            },
        ],

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

    };
    return (
        <div className="home">
            {/* <div>
                <i className="fa-solid fa-comment fs-2 text-white p-3 rounded-5" style={{ backgroundColor: '#6ac966' }}></i>
            </div> */}
            <div className="header-image bg-img-header"></div>

            <section id='sec-features'>
                <header className="section-header text-center py-5">
                    <span className='text-uppercase pt-5' style={{ color: '#96a2b2' }}>It's amazing</span>
                    <h2 className='py-3 fs-1' style={{ fontFamily: 'Poppins' }}><strong>What</strong> We Do</h2><h1 className="mb-3"></h1>
                    <p className='fs-5' style={{ color: '#606873' }}>We mould your dreams into unforgettable designs</p>
                </header>
                <Container className="p-5">
                    <Row className='px-5'>
                        {data.records.map((item, index) => (
                            <Col lg={4} key={item.title + index} className="p-4 my-3" >
                                <div className="title pt-4 text-center">
                                    <i className={item.icon + ' fs-1 pb-4'} style={{ color: '#6ac966' }}></i>
                                    <h6 className="pb-3 fw-bold text-uppercase fs-5">{item.title}</h6>
                                    <h7 style={{ color: '#606873' }}>{item.description}</h7>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section id='sec-fact'>
                <div className="homebg header-image mb-5 pt-4 px-5">
                    <Container className="px-5">
                        <Row>
                            {data.bg1.map((item) => (
                                <Col lg={3} className="p-4 my-3">
                                    <div className="title pt-4 text-center text-white">
                                        <i className={item.icon + ' fs-1 pb-4'} ></i>
                                        <h6 className="pb-3 fs-2" style={{ fontFamily: 'italic' }}>{item.title}</h6>
                                        <h6 className="text-uppercase fw-light">{item.description}</h6>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </section>

            <section id='sec-who-are-we'>
                <header className="section-header text-center py-5">
                    <span className='text-uppercase pt-5' style={{ color: '#96a2b2' }}>Let us tell you</span>
                    <h2 className='py-4 fs-1' style={{ fontFamily: 'Poppins' }}><strong>Who</strong> Are We?</h2><h1 className="mb-3"></h1>
                    <p className='fs-5' style={{ color: '#606873' }}>We are awesome, innovative, evolving</p>
                </header>
                <Container className="px-5">
                    <Row className=" px-5">
                        {data.fact1.map((item) => (
                            <Col lg={4} className="p-4 my-3">
                                <div className="fact pt-4">
                                    <h6 className="fs-4 border-bottom pb-3" style={{ fontFamily: 'poppins' }}>{item.title}</h6>
                                    <i className={item.icon + ' p-2'} ></i>
                                    <h6 style={{ color: '#606873' }}>{item.description}</h6>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <div className="img text-center">
                    <img src={worker} alt="worker" className='img-fluid' />
                </div>
                <Container className="px-5 pb-5">
                    <Row className=" px-5">
                        {data.fact2.map((item) => (
                            <Col lg={4} className="p-4 my-3">
                                <div className="fact pt-4">
                                    <h6 className="fs-4 border-bottom pb-3" style={{ fontFamily: 'poppins' }}>{item.title}</h6>
                                    <i className={item.icon + ' p-2'} ></i>
                                    <h6 style={{ color: '#606873' }}>{item.description}</h6>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <div className="button text-center pb-5">
                    <a href='../About'><button type="button" className="btn text-white px-4 text-uppercase" style={{ backgroundColor: '#6ac966' }}>Learn more</button></a>
                </div>
            </section>

            <section id='sec-get-quote'>
                <div className="bg header-image px-5">
                    <Container fluid className="p-5">
                        <Row className="">
                            <Col lg={6} className="text-center border-end border-black py-3">
                                <p className='text-black fs-1 fw-light'>Have an <strong className='fw-bold'>Idea?</strong></p>
                                <p style={{ color: '#606873' }}>Let's make it possible together.</p>
                                <div className="button text-center py-3">
                                    <a href='https://novumlogic.typeform.com/to/Y0ca5a?typeform-source=www.novumlogic.com'><button type="button" className="btn text-white px-5 text-uppercase rounded-5 py-3" style={{ backgroundColor: '#6ac966' }}>get quote</button></a>
                                </div>
                            </Col>
                            <Col lg={6} className="text-center py-3">
                                <p className='text-black fs-1 fw-light'>Want <strong className='fw-bold'>Dedicated <br />Developer?</strong></p>
                                <p style={{ color: '#606873' }}>Android, iOS, Angular, PHP Full stack developer</p>
                                <div className="button text-center py-3">
                                    <a href="mailto:hello@novumlogic.com"><button type="button" className="btn text-white px-5 text-uppercase rounded-5 py-3" style={{ backgroundColor: '#6ac966' }}>hire now</button></a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <footer className='bg-dark'>
                <Container>
                    <Row className="d-flex pt-5 pb-3">
                        <Col lg={10}>
                            <a href={'overview'} className='text-decoration-none px-3 text-white Active'>Overview</a>
                            <a href={'about'} className='text-decoration-none px-3 text-white'>About</a>
                            <a href={'how'} className='text-decoration-none px-3 text-white'>How we work</a>
                            <a href={'portfolio'} className='text-decoration-none px-3 text-white'>Portfolio</a>
                            <a href={'career'} className='text-decoration-none px-3 text-white'>Career</a>
                        </Col>
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
                        <p className='' style={{ color: '#606873' }}>Copyrights © 2024 All Rights Reserved by <a href='#' className='text-decoration-none' style={{ color: '#96a2b4' }}>Novumlogic</a></p>
                        <a href='#' className='text-decoration-none text-uppercase text-white fw-bold'>back to top</a>
                    </div>
                </Container>
            </footer>
        </div >
    );
}

export default Home;
