import React, {Component} from 'react';
import btc from './btc.svg';
import './App.css';

import marijuana from './marijuana.svg';

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
        message: '',
        formSuccess: false,
        formPending: false,
        formError: false,
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
            formPending: true,

            result: {},
        }, () => {

            // window.fetch('https://btcpal.online:5555/users', {
            //     method: 'post',
            //     body: JSON.stringify({
            //         email
            //     }),
            //     headers: {
            //         'content-type': "application/json",
            //         // "credentials": "same-origin"
            //     }
            // }).then(checkStatus)
            //     .then(response => response.json())
            return new Promise((resolve) => {

                setTimeout(() => resolve({
                    email,
                    message: '',
                }), 1000);
            })
                .then(result => {
                    console.log('result', result);


                    this.setState({
                        ...this.state,
                        result: Object.assign({}, this.state.result, result, {success: true}),
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


                    <h1 className={'App-title'}>
                        CBD STORE!
                    </h1>
                    <img src={marijuana} className={'App-logo'} alt={'logo'}/>



                    <p>
                        Accept Bitcoin and
                        <span>⚡</span>
                        Lightning Payments
                    </p>
                    {/*<h1 className={'App-title'}>BTC PAL</h1>*/}
                    {/*<img src={btc} className="App-logo" alt="logo"/>*/}
                    {/*<p className={'my-3'}>*/}
                    {/*Accept Bitcoin and*/}
                    {/*<span>⚡</span>*/}
                    {/*Lightning Payments*/}
                    {/*</p>*/}
                    {/*<button*/}
                    {/*className="btn btn-lg btn-warning"*/}
                    {/*onClick={() => smoothScroll('#registerForm')}*/}
                    {/*>*/}
                    {/*Start*/}
                    {/*</button>*/}
                </header>

                <section>
                    <a href={'https://btcpal.online/apps/4ZRSH4zZrX8hAYzhXY5WnhYGwmkf/pos'}
                       target={'_blank'}>
                        VIEW AUTO GENERATED STORE
                    </a>
                    <div className={'row d-sm-flex align-items-center justify-content-center'}>

                        <div className={'card m-2'}>
                            <div className={'card-body'}>
                                <h4 className={'card-title'}>
                                    Hemp Bud
                                </h4>
                                <form method="POST"
                                      action="https://btcpal.online/apps/4ZRSH4zZrX8hAYzhXY5WnhYGwmkf/pos">
                                    <input type="hidden" name="email" value="customer@example.com"/>
                                    <input type="hidden" name="orderId" value="CustomOrderId"/>
                                    <input type="hidden" name="notificationUrl" value="https://example.com/callbacks"/>
                                    <input type="hidden" name="redirectUrl" value="https://example.com/thanksyou"/>
                                    <button className={'btn btn-primary'} type="submit" name="choiceKey"
                                            value="hemp bud">Buy now
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className={'card m-2'}>
                            <div className={'card-body'}>
                                <h4 className={'card-title'}>
                                    CBD COFFEE
                                </h4>
                                <form method="POST"
                                      action="https://btcpal.online/apps/4ZRSH4zZrX8hAYzhXY5WnhYGwmkf/pos">
                                    <input type="hidden" name="email" value="customer@example.com"/>
                                    <input type="hidden" name="orderId" value="CustomOrderId"/>
                                    <input type="hidden" name="notificationUrl" value="https://example.com/callbacks"/>
                                    <input type="hidden" name="redirectUrl" value="https://example.com/thanksyou"/>
                                    <button className={'btn btn-primary'} type="submit" name="choiceKey"
                                            value="cbd coffee">Buy now
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className={'card m-2'}>
                            <div className={'card-body'}>
                                <h4 className={'card-title'}>
                                    CBD CART
                                </h4>
                                <form method="POST"
                                      action="https://btcpal.online/apps/4ZRSH4zZrX8hAYzhXY5WnhYGwmkf/pos">
                                    <input type="hidden" name="email" value="customer@example.com"/>
                                    <input type="hidden" name="orderId" value="CustomOrderId"/>
                                    <input type="hidden" name="notificationUrl" value="https://example.com/callbacks"/>
                                    <input type="hidden" name="redirectUrl" value="https://example.com/thanksyou"/>
                                    <button className={'btn btn-primary'} type="submit" name="choiceKey"
                                            value="cbd cart">Buy now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/*<section className={'About container'}>*/}
                {/*<h3 className={'my-3'}>A Payment Server for Bitcoin</h3>*/}
                {/*<div className={'row my-3'}>*/}

                {/*<div className={'col-sm-4'}>*/}
                {/*<img src={lockLogo} alt={'secure'}/>*/}
                {/*<h4>Secure</h4>*/}
                {/*<p>The payment server does not need to know your private keys, so your money can't be*/}
                {/*stolen.</p>*/}
                {/*</div>*/}

                {/*<div className={'col-sm-4'}>*/}
                {/*<img src={qrCode} alt={'easy'}/>*/}
                {/*<h4>Easy</h4>*/}
                {/*<p>A user-friendly Bitcoin checkout page for your customers.</p>*/}
                {/*</div>*/}

                {/*<div className={'col-sm-4'}>*/}
                {/*<img src={moneyLogo} alt={'vis'}/>*/}
                {/*<h4>Visibility</h4>*/}
                {/*<p>Manage, generate reports, and search for your invoices easily.</p>*/}
                {/*</div>*/}
                {/*</div>*/}

                {/*<div className={'row'}>*/}
                {/*<div className={'card m-2'}>*/}
                {/*<div className={'card-body'}>*/}
                {/*<div className={'card-title'}>*/}
                {/*$5 / month*/}
                {/*</div>*/}
                {/*<p className={'card-text'}>*/}
                {/*1 store*/}
                {/*1,000 on-chain txs / month*/}
                {/*</p>*/}
                {/*</div>*/}
                {/*</div>*/}

                {/*<div className={'cardmx-2 m-2 '}>*/}
                {/*<div className={'card-body'}>*/}
                {/*<div className={'card-title'}>*/}
                {/*$50 / month*/}
                {/*</div>*/}
                {/*<p className={'card-text'}>*/}
                {/*unlimited stores*/}
                {/*unlimited txs*/}
                {/*lightning*/}
                {/*<span>⚡</span>*/}

                {/*</p>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}

                {/*<div className={'row'}>*/}
                {/*<a*/}
                {/*target={'_blank'}*/}
                {/*href={'https://btcpal.online/apps/GSWCHJKG7XH4oJeMLaFAZ8LMyrC7XtYnT4SYRqXgivxr/pos'}*/}
                {/*>View Test Store*/}
                {/*</a>*/}
                {/*</div>*/}
                {/*</section>*/}

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
                        <form

                            id={'registerForm'}
                            onSubmit={this.handleSubmit}
                        >
                            <h3>Contact</h3>
                            <p>
                                Enter email address below and we will contact you shortly
                            </p>
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
