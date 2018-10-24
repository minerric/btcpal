import React, {Component} from 'react';
import btc from './btc.svg';
import moneyLogo from './money-logo.png';
import qrCode from './qr-logo.png';
import lockLogo from './lock-logo.png';
import './App.css';
import ContactForm from "./ContactForm";
import Pricing from "./Pricing";
import Footer from "./Footer";
import ContactBtn from "./ContactBtn";
import Features from "./Features";
import About from "./About";
import NavBar from "./NavBar";


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


class App extends Component {

    state = {
        name: '',
        phone: '',
        website: '',
        email: '',
        message: '',
        subject: '',
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

        const {email, message, phone, name, website, subject} = this.state;

        const {success, response} = validateRecaptcha();
        if (!(success && response)) {

            return this.setState({
                formPending: false,
                formError: 'invalid captcha'
            });
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
                    subject,
                    phone,
                    name,
                    website,
                    recaptcha: response
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
                <header className="App-header container-fluid">
                <NavBar/>

                    <div className={'row d-flex justify-content-around my-3'}>
                        <img src={btc} className="App-logo" alt="logo"/>
                        <div className={'ml-3'}>
                            <h1 className={'App-title'}>BTC PAL</h1>
                            <h6 className={'my-3'}>
                                Accept Bitcoin and
                                <span role={'img'} aria-label={'lightning'} className={'px-1'}>⚡</span>
                                Lightning Payments for your business
                            </h6>
                            <ContactBtn/>
                        </div>
                    </div>

                </header>


                <Features/>
                <About/>

                <section className={'container'}>
                    <Pricing/>
                </section>
                <section>
                    <div className={'container'}>


                        <ContactForm
                            {...this.state}
                            handleSubmit={this.handleSubmit}
                            handleChange={this.handleChange}
                        />

                    </div>

                </section>
                <Footer/>
            </div>
        );
    }
}

export default App;
