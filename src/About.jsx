import React from 'react';
import PropTypes from 'prop-types';

function About(props) {
    return (
        <section id={'About'} className={'container '}>

            <h2>About</h2>
            <div style={{maxWidth: '500px', margin: '0 auto'}}>




                <p className={'my-3'}>
                    There is no address re-use as each invoice generates a new address
                </p>

                <p className={'my-3'}>
                    Bitcoin payments are <b>irreversible</b>, so once you are paid you can ship! No waiting days for a
                    payment to clear.

                </p>
                <p className={'my-3'}>
                    Process payments for others, Payment buttons, Point of sale, No processing fees
                </p>
            </div>
        </section>
    );
}

About.propTypes = {};
About.defaultProps = {};

export default About;
