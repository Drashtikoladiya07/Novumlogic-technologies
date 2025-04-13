import "./home.css";
import { Container, Row, Col } from "react-bootstrap";
import mobail1 from "../../assets/img/p1.jpg";
import mobail2 from "../../assets/img/p2.jpg";
import mobail3 from "../../assets/img/p3.jpg";
import mobail4 from "../../assets/img/p4.jpg";
import mobail5 from "../../assets/img/p5.jpg";
import mobail6 from "../../assets/img/p6.jpg";
import mobail7 from "../../assets/img/p7.jpg";
import mobail8 from "../../assets/img/p8.jpg";
import web1 from "../../assets/img/po1.jpg";
import web2 from "../../assets/img/po2.jpg";
import web3 from "../../assets/img/po3.jpg";
import web4 from "../../assets/img/po4.jpg";
import web5 from "../../assets/img/po5.jpg";
import web6 from "../../assets/img/po6.jpg";
import web7 from "../../assets/img/po7.jpg";
import web8 from "../../assets/img/po8.jpg";

function Portfolio() {

    const data = {

        mobail: [
            {
                img: mobail1,
                title: 'Easy Loan'
            },
            {
                img: mobail2,
                title: 'Book My Starz'
            },
            {
                img: mobail3,
                title: 'Book My Smile'
            },
            {
                img: mobail4,
                title: 'De-Thali'
            },
            {
                img: mobail5,
                title: 'Donot Get Serious'
            },
            {
                img: mobail6,
                title: 'Task Manager'
            },
            {
                img: mobail7,
                title: 'Pre School'
            },
            {
                img: mobail8,
                title: 'WowMe'
            },
        ],

        web: [
            {
                img: web1,
                title: 'YourStory - Profile',
                description: 'Yes! Your read it right. Its YourStory. Responsive web-page from Sketch.'
            },
            {
                img: web2,
                title: 'Book My Starz',
                description: 'A responsive site & Admin panel to book celebrities online for any event.'
            },
            {
                img: web3,
                title: 'Nisarg Group',
                description: 'Construction company website with project plans zoom effect.'
            },
            {
                img: web4,
                title: 'Bhagyodaya Ind.',
                description: 'A wordpress website listing all fertilizer products of Bhagyodaya Ind.'
            },
            {
                img: web5,
                title: 'WowMe',
                description: 'A classic example of App-Intro one pager responsive website.'
            },
            {
                img: web6,
                title: 'Vehicle Tracking Sys.',
                description: 'A website and android app for Vehicle tracking system.'
            },
            {
                img: web7,
                title: 'Subhi Photography',
                description: 'Showing great photographs in a way to make it look even better.'
            },
            {
                img: web8,
                title: 'I-Gaze India',
                description: 'Product intro site with company and product details.'
            },
        ],
    };

    return (
        <div className="section-portfolio">
            <div className="header-image port px-5">
                <Container className=" bag py-5 px-5">
                    <h2 className="fs-1 pt-4">It's kind of fun</h2>
                    <h2 className="fs-1 pt-3">to do the <strong className="fw-bold">Impossible.</strong></h2>
                    <h5 className="pt-3">- Walt Disney</h5>
                </Container>
            </div>

            <div className="py-5">
                <header className="section text-center py-5">
                    <span className='text-uppercase pt-5' style={{ color: '#96a2b2' }}>Android & iOS</span>
                    <h2 className='py-3 fs-1'>Mobile Applications</h2><h1 className="mb-3"></h1>
                    <p className='fs-5' style={{ color: '#606873' }}>Every App is our pride, not just a proof.</p>
                </header>
            </div>

            <div className="border-bottom pb-5">
                <Container className=" px-5 pb-5">
                    <Row>
                        {data.mobail.map((item) => (
                            <Col lg={3} className="mb-3">
                                <div className="title text-center text-black">
                                    <img src={item.img} alt="" className="img-fluid border rounded-3" />
                                    <h6 className="fs-5 py-3 text-uppercase fw-bold border rounded-3">{item.title}</h6>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            <div className="py-5">
                <header className="section text-center py-5">
                    <span className='text-uppercase pt-5' style={{ color: '#96a2b2' }}>Server & Cloud</span>
                    <h2 className='py-3 fs-1'>Web Applications</h2><h1 className="mb-3"></h1>
                    <p className='fs-5' style={{ color: '#606873' }}>Creative and inspiring designs, leads to more clients.</p>
                </header>
            </div>

            <div className="border-bottom pb-5">
                <Container className=" px-5 pb-5">
                    <Row>
                        {data.web.map((item) => (
                            <Col lg={3} className="mb-3">
                                <div className="title text-center text-black">
                                    <img src={item.img} alt="" className="img-fluid border rounded-3" />
                                    <div className="overlay border rounded-3">
                                        <h6 className="fs-5 py-3 text-uppercase fw-bold">{item.title}</h6>
                                        <h6 className="pb-3 fw-light ">{item.description}</h6>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            <footer className='bg-dark'>
                <Container>
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

export default Portfolio;