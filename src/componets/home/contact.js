import './home.css';
import error from '../../assets/logo/icon_error.png';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
    return (
        <div className='contact'>
            <div className="header-image contactbg px-5">
                <Container className="bag py-5 px-5">
                    <h2 className="fs-2 pt-4 text-uppercase">Let's make something</h2>
                    <h2 className="fs-2 pt-3 text-uppercase">awesome <strong className="fw-bold text-uppercase fs-1">together.</strong></h2>
                    <h5 className="pt-3">Call us, drop us a line or give us a heads up if you're interested in visiting us.</h5>
                </Container>
            </div>

            <header className="section-header text-center py-5">
                <h2 className='py-4 fs-1 pt-5' style={{ fontFamily: 'Poppins' }}>Contact Us</h2><h1 className="mb-3"></h1>
                <p className='fs-5' style={{ color: '#606873' }}>Yes! We liked to be phoned!</p>
            </header>

            <Container className='px-5'>
                <Row className='px-5'>
                    <Col lg={8}>
                        <div className="code-preview border-end pb-5" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            <p style={{ color: '#606873' }} >Novumlogic Technologies Pvt Ltdis the leading provider of mobile and web-app  solutions, trusted by a large number of clients. Find out how NOVUMLOGIC can drive actionable insights and streamline workflows, so you can deliver results.
                                <br /><p className='fw-bold pt-4'>Connect with us for any of the below mentioned or not mentioned reasons:</p>
                            </p>
                            <ul style={{ color: '#606873' }} className='ps-1'>
                                <li>
                                    <p>Have a great start-up idea and want someone to make it a reality?</p>
                                </li>
                                <li>
                                    <p>Automate the current system or whole business?</p>
                                </li>
                                <li>
                                    <p>Need someone professional and creative both at same time?</p>
                                </li>
                                <li>
                                    <p>Don't know where to start for your Mobile App, Website or Admin Panel?</p>
                                </li>
                                <li>
                                    <p>Or if you have any other question, problem or just say hello! We love chit chatting.</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <h5 className='ps-3' style={{ fontFamily: 'Raleway, sans-serif' }}>Connect with us:</h5>
                        <h6 className='ps-3 fw-light' style={{ color: '#606873' }}>
                            For support or any questions<br />
                            Email us at <a href="mailto:hello@novumlogic.com" style={{ color: '#6ac966', textDecoration: 'none' }}>hello@novumlogic.com</a><br />
                        </h6>
                        <ul className="footer-socials d-flex">
                            <li style={{ listStyleType: 'none' }}><a href="https://www.facebook.com/novumlogic/"><i className="fa-brands fa-facebook-f me-3 p-2"></i></a></li>
                            <li style={{ listStyleType: 'none' }}><a href="https://x.com/novumlogic"><i className="fa-brands fa-twitter me-3 p-2"></i></a></li>
                            <li style={{ listStyleType: 'none' }}><a href="https://www.linkedin.com/company/novumlogic/"><i className="fa-brands fa-linkedin-in me-3 p-2"></i></a></li>
                            <li style={{ listStyleType: 'none' }}><a href="https://www.instagram.com/novumlogic/"><i className="fa-brands fa-instagram me-3 p-2"></i></a></li>
                        </ul>
                        <h5 className='ps-3' style={{ fontFamily: 'Raleway, sans-serif' }}>Registered Office</h5>
                        <h6 className='ps-3 pb-3 fw-light' style={{ color: '#606873' }}>
                            SF, A-5 Bhagvati Park,<br />
                            Opp Tube Company,<br />
                            O P Road, <b>Vadodara</b>, Gujarat.
                        </h6>
                        <h5 className='ps-3' style={{ fontFamily: 'Raleway, sans-serif' }}>Novumlogic, Canada</h5>
                        <h6 className='ps-3 pb-3 fw-light' style={{ color: '#606873' }}>
                            UNIT#1901 - 265 Balliol St,<br />
                            Toronto, Ontario M4S1C9<br />
                            <b>Canada</b>.
                        </h6>
                    </Col>
                </Row>
            </Container>
            <div style={{ backgroundColor: '#e8eaed' }} className='ps-5'>
                <Container className='py-5 ps-5 mt-5'>
                    <Row className='py-5'>
                        <Col lg={9} className='text-center py-5 ps-5'>
                            <img src={error} alt="error" />
                            <h3 className='fs-5 py-2' style={{ color: '#97a2b2' }}>Sorry! Something went wrong.</h3>
                            <p style={{ color: '#606873' }}>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
                        </Col>
                        <Col lg={3}>
                            <form style={{ backgroundColor: 'white' }}>
                                <div>
                                    <Row>
                                        <Col lg={5}>
                                            <input placeholder="Name*" className='p-2 pt-3' />
                                        </Col>
                                        <Col lg={7}>
                                            <input placeholder="Contact Number*" className='p-2 w-100 pt-3 border-start' />
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <input placeholder="Email Address*" className='p-2 w-100 pt-3 border-top border-bottom' />
                                </div>
                                <div>
                                    <textarea placeholder="Your Message*" className='p-2 w-100 pt-3 pb-4'></textarea>
                                </div>
                                <div className="submit text-end">
                                    <a href="#"><button type="button" className="btn px-4 text-white" style={{ backgroundColor: '#4aa3df' }} id="submit">Send</button></a>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>


            <footer className='bg-dark'>
                <Container>
                    <Row className="d-flex pt-5 pb-3">
                        <div className="col-lg-10">
                            <a href={'overview'} className='text-decoration-none px-3 text-white Active'>Overview</a>
                            <a href={'about'} className='text-decoration-none px-3 text-white'>About</a>
                            <a href={'how'} className='text-decoration-none px-3 text-white'>How we work</a>
                            <a href={'portfolio'} className='text-decoration-none px-3 text-white'>Portfolio</a>
                            <a href={'career'} className='text-decoration-none px-3 text-white'>Career</a>                        </div>
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

export default Contact;