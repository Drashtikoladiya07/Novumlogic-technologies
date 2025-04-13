import './home.css';
import { Container, Row, Col } from 'react-bootstrap';

function Career() {
    const data = {

        career1: [
            {
                title: 'The people rule',
                icon: 'fa fa-mobile-alt',
                description: 'Free flow of crazy ideas. Take decisions, keep experimenting, build great products.',
            },

            {
                title: 'The potential rocks',
                icon: 'fa fa-cog',
                description: 'With great power comes great responsibility. With talent and dedication empower yourself with opportunities.',
            },

            {
                title: 'Together we learn',
                icon: 'fa fa-code',
                description: 'Knowledge grows by sharing. Let’s play for a win-win!',
            },
        ],

        career2: [
            {
                title: 'Flexible work option',
                icon: 'fa fa-hourglass-half',
                description: 'Discarding the “9 to 5” tradition, avail the benefit of flexible hours or work from home whenever the need be.',
            },
            {
                title: 'Leave on your bday',
                icon: 'fa fa-birthday-cake',
                description: 'It’s your birthday. Spend time with your dear and near ones. No need to call in sick. ;-)',
            },
            {
                title: 'Handsome Salary',
                icon: 'fa fa-beer',
                description: 'If you don’t have limited knowledge, we don’t have a limited budget.',
            },
            {
                title: 'Your opinion matters',
                icon: 'fa fa-hand-pointer',
                description: 'We are all ears for you. Your unique ideas or analyzed data form an important part of our innovation building process.',
            },
            {
                title: '2 hours/month off',
                icon: 'fa fa-coffee',
                description: 'Your worry to catch up with your personal tasks ends here. We keep aside 2 hours per month for you.',
            },
            {
                title: 'Games on your way',
                icon: 'fa fa-gamepad',
                description: 'Stuck at something? Make a healthy come back with a break with games anytime - Officially!',
            },
        ],

        navItems: [
            { id: 'open position', title: 'open position', target: '#open position' },
        ],
        
        navItems: [
            {
                id: 'open position',
                title: 'open position',
                target: '#open position',
                header: 'Open Position',
            },
        ],
    };

    return (
        <div className='career'>
            <div className="header-image ca px-5">
                <Container className="bag py-5 px-5">
                    <h2 className="pt-2">we believe in...</h2>
                    <h2 className="fs-2 pt-4 text-uppercase">creating the <strong className="fw-bold fs-1">best place</strong></h2>
                    <h2 className="fs-2 pt-3 text-uppercase">for the <strong className="fw-bold fs-1">best people</strong> to work.</h2>
                </Container>
            </div>

            <div className="py-5">
                <header className="secti text-center py-5">
                    <span className='text-uppercase pt-5' style={{ color: '#96a2b2' }}>Hello There!</span>
                    <h2 className='py-3 fs-1'>Take Charge! Make Change!</h2><h1 className="mb-3"></h1>
                    <p className='fs-5' style={{ color: '#606873' }}>Welcome to our gateway to excellence! Explore new opportunities with us!</p>
                </header>
            </div>

            <Container className="px-5 pb-5">
                <Row className=" px-5 pb-5">
                    <Col lg={4}>
                        <h1 className='fw-bold'>A couple of things about our team.</h1>
                        <h6 className='border-start border-4 ps-3 py-3' style={{ color: '#96a2b2' }}>You're BRAIN to us, not a 'resource'.</h6>
                    </Col>
                    <Col lg={8}>
                        <div className='h1 border-bottom pb-4 pt-3'>
                            <h5>Users First</h5>
                            <h6 className='pt-2' style={{ color: '#96a2b2' }}>If something doesn't work for our users, it doesn't work for us too.</h6>
                        </div>
                        <div className='h1 border-bottom py-4'>
                            <h5>As a Team</h5>
                            <h6 className='pt-2' style={{ color: '#96a2b2' }}>We win by working together. Display your talent by running with unique ideas, but resolve together to make Novumlogic Technologies Pvt Ltd the best product & service provider.</h6>
                        </div>
                        <div className='h1 border-bottom py-4'>
                            <h5>Genuine and real</h5>
                            <h6 className='pt-2' style={{ color: '#96a2b2' }}>We're straightforward as a team and honest with the customer, without being an ass.</h6>
                        </div>
                        <div className='h1 border-bottom py-4'>
                            <h5>Let's Move</h5>
                            <h6 className='pt-2' style={{ color: '#96a2b2' }}>The best way to see if it works is to see if it works. We're not afraid to learn from trying something new.</h6>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="header-image careerbg px-5 my-5">
                <Container className="bag py-5 px-5">
                    <h2 className="fs-1 pt-5 px-5 text-center">If you take care of your employees, They will take care of your clients.</h2>
                </Container>
            </div>

            <div className="py-5">
                <header className="secti text-center">
                    <span className='text-uppercase pt-5' style={{ color: '#96a2b2' }}>Result Oriented</span>
                    <h2 className='py-3 fs-1'>Culture</h2><h1 className="mb-3"></h1>
                    <p className='fs-5' style={{ color: '#606873' }}>Collaborating ideas, weaving well-crafted execution. Arriving to the perfect solution.</p>
                </header>
            </div>

            <Container className="px-5 pb-5 border-bottom">
                <Row className=" ">
                    {data.career1.map((item) => (
                        <Col lg={4} className="p-4 my-3">
                            <div className="title pt-4 text-center pb-5">
                                <i className={item.icon + ' fs-1 pb-4'} style={{ color: '#fdaf17' }}></i>
                                <h6 className="pb-3 fw-bold text-uppercase fs-5">{item.title}</h6>
                                <h6 style={{ color: '#96a2b1' }}>{item.description}</h6>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <div className="py-5">
                <header className="secti text-center pt-5">
                    <span className='text-uppercase pt-5' style={{ color: '#96a2b2' }}>Come Aboard</span>
                    <h2 className='py-3 fs-1'>Benefits</h2><h1 className="mb-3"></h1>
                    <p className='fs-5' style={{ color: '#606873' }}>Maintaining a streamlined work-life balance</p>
                </header>
            </div>

            <Container className="px-5 pb-5 border-bottom">
                <Row className=" px-5">
                    {data.career2.map((item) => (
                        <Col lg={4} className="p-4 my-3">
                            <div className="title pt-4 pb-5">
                                <div className='d-flex'>
                                    <i className={item.icon + ' fs-3 pb-4 pe-3'} style={{ color: '#fdaf17' }}></i>
                                    <h6 className="pb-3 fw-bold text-uppercase fs-5">{item.title}</h6>
                                </div>
                                <h6 className="ps-5" style={{ color: '#96a2b1' }}>{item.description}</h6>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <div className="py-5">
                <header className="secti text-center py-5">
                    <span className='text-uppercase pt-5' style={{ color: '#96a2b2' }}>Excited to work with us?</span>
                    <h2 className='py-3 fs-1'>Apply Now</h2><h1 className="mb-3"></h1>
                    <p className='fs-5' style={{ color: '#606873' }}>We hire fun, dedicated people who can adapt to anything that comes their way.</p>
                </header>
            </div>

            <div className='container px-5 text-center pb-5'>
                <div className='px-5'>
                    <h1>Think you’re ready for the adventurous, fun <br />ride?</h1>
                    {/* <div className="button text-center pb-5">
                        <button type="button" className="btn text-white px-4 mt-4 py-2 text-uppercase" style={{ backgroundColor: '#fdaf17' }}>open position</button>
                    </div> */}
                </div>
            </div>

            <div className="offset-lg-5 px-5 pb-5">
                <div className="nav-wrapper">
                    <ul className="nav pe-5">
                        {data.navItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <button className={`nav-link px-4 fw-bold}`}
                                    style={{ backgroundColor: "#fdaf17", color: "white" }}
                                    data-bs-toggle="tab"
                                    data-bs-target={item.target}> {item.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* <Col lg={10} className="pt-5">
                <Row>
                    <div className="tab-content">
                        {data.navItems.map((item) => (
                            <div key={item.id} item={item} >
                                <h6>{item.title}</h6>
                            </div>
                        ))}
                    </div>
                </Row>
            </Col> */}

            <footer className='bg-dark'>
                <Container>
                    <Row className=" d-flex pt-5 pb-3">
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
                        <p className='' style={{ color: '#606873' }}>Copyrights © 2024 All Rights Reserved by <a href='#' className='text-decoration-none' style={{ color: '#96a2b4' }}>Novumlogic</a></p>
                        <a href='#' className='text-decoration-none text-uppercase text-white fw-bold'>back to top</a>
                    </div>
                </Container>
            </footer>

        </div >
    );
}

export default Career;