import React, {Component} from 'react';
import btc from './btc.svg';
import moneyLogo from './money-logo.png';
import qrCode from './qr-logo.png';
import lockLogo from './lock-logo.png';
import './App.css';
import ContactForm from "./ContactForm";


function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error
    }
}

function validateRecaptcha() {
    const response = window.grecaptcha.getResponse();

    return {
        success: 0 < response.length,
        response,
    }
}

function smoothScroll(id) {

    const target = document.querySelector(id);

    target.scrollIntoView({
        alignToTop: true,
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
    });

    window.history.pushState(null, null, id);

}

class App extends Component {

    state = {
        name: '',
        phone: '',
        website: '',
        email: '',
        message: '',
        formSuccess: false,
        formPending: false,
        formError: false,
    };

    constructor() {

        super();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {

        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit(e) {

        e.preventDefault();

        const {email, message, phone, name, website} = this.state;

        const {success, result} = validateRecaptcha();
        if (!success) {

            return false;
        }

        this.setState({
            ...this.state,
            formPending: true,
        }, () => {

            return window.fetch('https://btcpal.online:5555/users', {
                method: 'post',
                body: JSON.stringify({
                    email,
                    message,
                    phone,
                    name,
                    website,
                    recaptcha: result
                }),
                headers: {
                    'content-type': "application/json",
                    // "credentials": "same-origin"
                }
            }).then(checkStatus)
                .then(response => response.json())
                // return new Promise((resolve) => {
                //
                //     setTimeout(() => resolve({
                //         email,
                //         message: '',
                //     }), 1000);
                // })
                .then(result => {
                    console.log('result', result);


                    this.setState({
                        ...this.state,
                        formPending: false,
                        formSuccess: true,
                        email: '',
                    })
                }).catch(err => {
                    console.error(err);
                    this.setState({
                        ...this.state,
                        formError: err,
                        formSuccess: false,
                        formPending: false,
                    })
                })
        });

    }

    render() {

        const {formPending, formSuccess, formError} = this.state;

        return (
            <div className="App">
                <header className="App-header">


                    <h1 className={'App-title'}>BTC PAL</h1>
                    <img src={btc} className="App-logo" alt="logo"/>
                    <p className={'my-3'}>
                        Accept Bitcoin and
                        <span role={'img'} aria-label={'lightning'}>⚡</span>
                        Lightning Payments
                    </p>
                    <button
                        className="btn btn-lg btn-warning"
                        onClick={() => smoothScroll('#contact')}
                    >
                        Start
                    </button>
                </header>


                <section className={'About container'}>
                    <h3 className={'my-3'}>A Payment Server for Bitcoin</h3>
                    <div className={'row my-3'}>

                        <div className={'col-sm-4'}>
                            <img src={lockLogo} alt={'secure'}/>
                            <h4>Secure</h4>
                            <p>The payment server does not need to know your private keys, so your money can't be
                                stolen.</p>
                        </div>

                        <div className={'col-sm-4'}>
                            <img src={qrCode} alt={'easy'}/>
                            <h4>Easy</h4>
                            <p>A user-friendly Bitcoin checkout page for your customers.</p>
                        </div>

                        <div className={'col-sm-4'}>
                            <img src={moneyLogo} alt={'vis'}/>
                            <h4>Visibility</h4>
                            <p>Manage, generate reports, and search for your invoices easily.</p>
                        </div>
                    </div>

                    <div className={'row'}>
                        <div className={'card m-2'}>
                            <div className={'card-body'}>
                                <div className={'card-title'}>
                                    $5 / month
                                </div>
                                <p className={'card-text'}>
                                    1 store
                                    10,000 on-chain txs / month
                                </p>
                            </div>
                        </div>

                        <div className={'cardmx-2 m-2 '}>
                            <div className={'card-body'}>
                                <div className={'card-title'}>
                                    $10 / month
                                </div>
                                <p className={'card-text'}>
                                    unlimited stores<br/>
                                    unlimited on-chain txs<br/>
                                    lightning enabled
                                    <span>⚡</span>

                                </p>
                            </div>
                        </div>
                    </div>

                </section>

                <section className={'bg-light'}>
                    <div className={'container'}>
                        {formSuccess && (
                            <div className={'d-flex justify-content-center align-items-center'}>
                                <div className={'alert alert-success alert-dismissible'}>
                                    <b>Success</b>
                                </div>
                            </div>
                        )}
                        {formError && (
                            <div className={'d-flex justify-content-center align-items-center'}>
                                <div className={'alert alert-danger alert-dismissible'} style={{width: '10rem'}}>
                                    <b>Error!</b>
                                </div>
                            </div>
                        )

                        }

                        {
                            formPending &&
                            <div className={'bouncing-loader d-flex justify-content-center align-items-center'}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        }
                        <ContactForm
                            handleSubmit={this.handleSubmit}
                            handleChange={this.handleChange}
                        />

                    </div>

                </section>

                <div className={'row'}>
                    <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons"
                                          title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/"
                                                                                    title="Flaticon">www.flaticon.com</a> is
                        licensed by <a href="http://creativecommons.org/licenses/by/3.0/"
                                       title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                </div>
            </div>
        );
    }
}

export default App;
