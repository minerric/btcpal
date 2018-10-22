import React from 'react';
import PropTypes from 'prop-types';

function About(props) {
    return (
        <div id={'About'} className={'container '}>

            <div style={{maxWidth: '500px', margin: '0 auto'}}>

                <h3>About</h3>

                <p className={'my-3'}>
                    Process payments for others, Payment buttons, Point of sale, No processing fees,
                </p>

                <p>
                    There is no address re-use as each invoice generates a new address
                </p>

                <p className={'my-3'}>
                    Bitcoin payments cannot be reversed, so once you are paid you can ship! No waiting days for a
                    payment to clear.

                </p>
                <p>
                    You can also choose BTCPay Server as a self-hosted solution on your own server with an Enterprise account
                </p>
            </div>
        </div>
    );
}

About.propTypes = {};
About.defaultProps = {};

export default About;
