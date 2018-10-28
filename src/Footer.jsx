import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';
import lightningQr from './lightning-node.svg';

function Footer(props) {
    return (
        <footer>
            <div className={'container py-3'}>
                <div className={'row'}>
                    <span role={'img'} aria-label={'lightning'} className={'px-1'}>⚡</span>
                    Lightning Node
                </div>

                <div className={'row'}>
                    <b>Alias:</b>
                    <code className={'pl-2'}>btcpal.online</code>
                </div>
                <div className={'row'}>
                    <b>Uri</b>
                    <code className={'pl-2'}>02605edcea45a12d160e154c70f35ed6b4d2e136b3f013c56586f7b41371c1bf95@74.207.232.172:9735</code>
                </div>
                <div className={'row my-3'}>


                    <img src={lightningQr} alt={'qr'}/>
                </div>

                <div className={'row'}>
                    Special thanks to
                    <a href={'https://github.com/btcpayserver/btcpayserver'} className={'pl-1'}>
                        BTC PAY SERVER
                    </a>
                </div>
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
