import React from 'react';
import PropTypes from 'prop-types';
import './Pricing.css'
import Purchase from "./Purchase";
import ContactBtn from "./ContactBtn";
import btc from "./btc.svg";

function Pricing(props) {
    return (
        <div className={'Pricing'} id={'Pricing'}>

            <h2 className={'my-3'}>Pricing</h2>
            <hr/>
            <div className={'row d-flex justify-content-center align-items-top'}>
                <div className={'card text-left m-2'}>
                    <h4 className={'card-header d-flex align-items-center justify-content-space-between'}>
                        Personal
                        <small className={'pl-3 line-through'}>$10 / month</small>
                    </h4>
                    <div className={'card-body'}>

                        <div className={'card-text'}>
                            <ul>
                                <li>
                                    <b style={{fontWeight: '600'}}>
                                        14 day free trial
                                    </b>
                                </li>
                                <li>
                                    Account with 1 App
                                </li>
                                <li>
                                    Shared managed BTC Server
                                </li>
                                <li>
                                    Integrate your Lightning node
                                    for instant payments
                                </li>
                                <li>
                                    Use HD Wallet to receive payments
                                </li>
                                <li>
                                    Track invoices
                                </li>

                            </ul>

                        </div>
                    </div>
                    <div className={'card-footer text-right'}>
                        <Purchase/>
                    </div>
                </div>

                <div className={'card text-left m-2'}>
                    <h4 className={'card-header d-flex align-items-center justify-content-space-between'}>
                        Business
                        <small className={'pl-3'}>
                            $25 / month
                        </small>
                    </h4>
                    <div className={'card-body'}>
                        <div className={'card-text'}>
                            <ul>
                                <li>
                                    Account with 5 Apps and 1000 invoices
                                </li>
                                <li>
                                    Shared managed BTC Server
                                </li>
                                <li>
                                    Integrate your Lightning node
                                    for instant payments
                                </li>
                                <li>
                                    Use HD Wallet to receive payments
                                </li>
                                <li>
                                    Track invoices
                                </li>
                                <li>
                                    Integrated Testnet and customer support
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className={'card-footer text-right'}>
                        <Purchase item={'business'}/>
                    </div>
                </div>


                <div className={'card text-left m-2'}>
                    <h4 className={'card-header d-flex align-items-center justify-content-space-between'}>
                        Enterprise
                        <small className={'pl-3'}>
                            Contact Us!
                        </small>
                    </h4>
                    <div className={'card-body'}>
                        <div className={'card-text'}>
                            <ul>
                                <li>
                                    Self hosted BTCPAY server
                                </li>
                                <li>
                                    Customized Checkout Experience
                                </li>
                                <li>
                                    Unlimited Stores / Apps
                                </li>
                                <li>
                                    Managed Lightning Node
                                </li>
                                <li>
                                    Customer Support / Testnets / Monitoring
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className={'card-footer text-right'}>
                        <ContactBtn klass={'card-link mr-2'}/>
                        <button type="submit"
                                disabled
                                className={'btn btn-outline-warning p-2'}
                        >
                            <span className={'px-2'}>
                                Buy with
                            </span>
                            <img src={btc} alt={'btc'} height={20} width={20}/>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}

Pricing.propTypes = {};
Pricing.defaultProps = {};

export default Pricing;
