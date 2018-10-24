import React from 'react';
import PropTypes from 'prop-types';
import lockLogo from "./lock-logo.png";
import qrCode from "./qr-logo.png";
import moneyLogo from "./money-logo.png";

function Features(props) {
    return (
        <section className={'Features container'} id={'Features'}>
            <h2 className={'my-3'}>A Payment Server for Bitcoin</h2>
            <div className={'row my-3 text-center'}>

                <div className={'col-sm-4'}>
                    <img src={lockLogo} alt={'secure'}/>
                    <h4 className={'my-2'}>Secure</h4>
                    <p>The payment server does not need to know your private keys, so your money can't be
                        stolen.</p>
                </div>

                <div className={'col-sm-4'}>
                    <img src={qrCode} alt={'easy'}/>
                    <h4 className={'my-2'}>Easy</h4>
                    <p>A user-friendly Bitcoin checkout page for your customers.</p>
                </div>

                <div className={'col-sm-4'}>
                    <img src={moneyLogo} alt={'vis'}/>
                    <h4 className={'my-2'}>Visible</h4>
                    <p>Manage, generate reports, and search for your invoices easily.</p>
                </div>
            </div>


        </section>
    );
}

Features.propTypes = {};
Features.defaultProps = {};

export default Features;
