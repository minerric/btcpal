import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';
import {smoothScroll} from "./utils";

function NavBar(props) {
    return (
        <nav className="Navbar navbar navbar-expand-md py-3">


            <h1 className=" nav-link pointer" href="#page-top">BTC PAL</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className={'navbar-nav ml-auto'}>
                    <li className="nav-item pointer nav-link m-2"
                        onClick={() => smoothScroll('#Features')}
                    >Features
                    </li>
                    <li className="nav-item pointer nav-link m-2"
                        onClick={() => smoothScroll('#Pricing')}
                    >Pricing
                    </li>
                    <li className="nav-item pointer nav-link m-2"
                        onClick={() => smoothScroll('#Contact')}
                    >Contact
                    </li>
                </ul>
            </div>
        </nav>
    );
}

NavBar.propTypes = {};
NavBar.defaultProps = {};

export default NavBar;
