import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

function Footer(props) {
    return (
        <footer>
            <div className={'container py-3'}>
                <div className={'row my-3'}>
                    © 2018 btcpal.online
                </div>
                <div className={'row my-3'}>
                    <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons"
                                          title="Roundicons">Roundicons</a> from <a
                        href="https://www.flaticon.com/"
                        title="Flaticon">www.flaticon.com</a> is
                        licensed by <a href="http://creativecommons.org/licenses/by/3.0/"
                                       title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
