import React from 'react';
import PropTypes from 'prop-types';
import checkout from './checkout.png';

import invoice from './invoice.png';

function About(props) {
    return (
        <section id={'About'} className={'container '}>

            <h2>About</h2>
            <hr/>
            <div style={{maxWidth: '640px', margin: '0 auto'}}>

                <h4 className={'text-center'}>Customizable Checkout Pages</h4>
                <p className={'my-3 d-flex align-items-center justify-content-center'}>
                    <img src={checkout} alt={'checkout'} width={'50%'} height={'auto'}/>
                </p>
                <p className={'my-3 d-flex align-items-center justify-content-center'}>
                    <i className="fas fa-user-shield fa-3x pr-3"></i>
                    <span>Login and Track Invoices / Manage Apps</span>
                </p>


                <p className={'my-3 d-flex align-items-center justify-content-center'}>
                    <i className="fas fa-file-invoice-dollar fa-3x pr-3"></i>
                    No processing fees
                </p>
                <p className={'my-3 d-flex align-items-center justify-content-center'}>
                    <i className="fas fa-arrow-circle-right fa-3x pr-3"></i>
                    <b>Irreversible Payments</b>

                </p>
            </div>

        </section>
    );
}

About.propTypes = {};
About.defaultProps = {};

export default About;
