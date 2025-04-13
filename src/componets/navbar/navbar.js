import './navbar.css';
import navlogo from '../../assets/logo/nav-logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    const [active, setActive] = useState('Over view');

    const selected = (id) => {
        setActive(id);
    };

    const data = {

        navItem: [
            { id: 'Over view', title: 'Over view' },
            { id: 'About', title: 'About' },
            { id: 'How', title: 'How we work' },
            { id: 'Portfolio', title: 'Portfolio' },
            { id: 'Career', title: 'Career' },
            { id: 'Contact', title: 'Contact' },
        ],
    };

    return (
        <div className="sticky-nav transparent-nav theme-green">
            <nav fluid className="navbar navbar-expand-md site-navigation px-5 py-0">
                <div className="container-fluid ps-5">
                    <div className="logo">
                        <img src={navlogo} alt="logo" className='img-fluid w-75' />
                    </div>
                    <div className="logo">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mr-auto">
                                {data.navItem.map((item) => (
                                    <li className="nav-item text-uppercase fw-bold" key={item.id}>
                                        <Link
                                            to={item.id === 'Over view' ? '/' : `/${item.id.toLowerCase()}`}
                                            className={`nav-link ps-4 ${active === item.id ? 'active' : ''}`}
                                            style={{ color: item.id === active ? "#6ac966" : 'black' }}
                                            onClick={() => selected(item.id)}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;