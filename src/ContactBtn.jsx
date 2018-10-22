import React from 'react';
import PropTypes from 'prop-types';
import {smoothScroll} from "./utils";


function handleClick(id) {

    smoothScroll(id);

    const name = document.querySelector('#name');

    setTimeout(() => name.focus(), 1000);
}

function ContactBtn({klass = 'btn btn-lg btn-warning'}) {
    return (
        <a
            className={klass + ' pointer'}
            onClick={() => handleClick('#contact')}
        >
            Contact
        </a>
    );
}

ContactBtn.propTypes = {};
ContactBtn.defaultProps = {};

export default ContactBtn;
