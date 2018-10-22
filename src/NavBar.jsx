import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';
import {smoothScroll} from "./utils";

function NavBar(props) {
    return (
        <nav className="Navbar container d-flex justify-content-between align-items-center py-3">
            <a className="navbar-brand" href="#page-top">BTC PAL</a>
            <div className="navbar-nav text-right d-inline-flex justify-content-end flex-row">
                <span className="nav-item pointer nav-link m-2"
                   onClick={() => smoothScroll('#Features')}
                >Features</span>
                <span className="nav-item pointer nav-link m-2"
                   onClick={() => smoothScroll('#Pricing')}
                >Pricing</span>
                <span className="nav-item pointer nav-link m-2"
                   onClick={() => smoothScroll('#Contact')}
                >Contact</span>
            </div>
        </nav>
    );
}

NavBar.propTypes = {};
NavBar.defaultProps = {};

export default NavBar;
