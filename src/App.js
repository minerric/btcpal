import React, {Component} from 'react';
import btc from './btc.svg';
import './App.css';

import lockLogo from './lock-logo.png';
import qrCode from './qr-logo.png';
import moneyLogo from './money-logo.png';

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error
    }
}

function smoothScroll(id) {
    const email = document.getElementById('email');

    const target = document.querySelector(id);

    target.scrollIntoView({
        alignToTop: true,
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
    });

    window.history.pushState(null, null, id);

    setTimeout(() => email.focus(), 500);

}

class App extends Component {

    state = {
        email: '',
        result: {},
    };

    constructor() {

        super();

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {

        e.preventDefault();

        const {email} = this.state;

        this.setState({
            ...this.state,
            submitting: true,
            result: {},
        }, () => {

            window.fetch('https://btcpal.online:5555/emailer', {
                method: 'post',
                body: JSON.stringify({
                    email
                }),
                headers: {
                    'content-type': "application/json",
                    // "credentials": "same-origin"
                }
            }).then(checkStatus)
                .then(response => response.json())
                .then(result => {
                    console.log('result', result);

                    this.setState({
                        ...this.state,
                        result: Object.assign({}, this.state.result, result, {success: true}),
                        submitting: false,
                    })
                }).catch(err => {
                console.error(err);
                this.setState({
                    ...this.state,
                    submitting: false,
                })
            })
        });

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={btc} className="App-logo" alt="logo"/>
                    <p className={'my-3'}>
                        Accept Bitcoin for your business
                    </p>
                    <button
                        className="btn btn-warning"
                        onClick={() => smoothScroll('#registerForm')}
                    >
                        Start
                    </button>
                </header>
                <section className={'About'}>
                    <h3 className={'my-3'}>A Payment Server for Bitcoin</h3>
                    <hr/>
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

                </section>

                <section className={'bg-light'}>
                    <form

                        id={'registerForm'}
                        onSubmit={this.handleSubmit}
                    >
                        <h3>Register</h3>
                        <div className={'my-3 input-group d-flex justify-content-center'}>
                            <input
                                id={'email'}
                                type={'email'}
                                required
                                onChange={e => this.setState({...this.state, email: e.target.value})}
                                value={this.state.email}
                                placeholder={'email'}
                                className={'form-control-md'}
                            />
                        </div>
                        <button type={'submit'} className={'btn btn-lg btn-warning my-3'}>Submit</button>
                    </form>
                    {
                        this.state.result.hasOwnProperty('success') &&
                        <div className={'row justify-content-center align-items-center'}>

                        <textarea
                            className={'form-control'}
                            disabled={true}
                            rows={8}
                        >
                            {JSON.stringify(this.state.result, null, 4)}
                        </textarea>
                        </div>
                    }
                </section>

            </div>
        );
    }
}

export default App;
