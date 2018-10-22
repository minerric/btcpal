import React from 'react';
import PropTypes from 'prop-types';

import './ContactForm.css'

function ContactForm({handleSubmit, handleChange}) {
    return (
        <div className="form-container" id={'Contact'}>
            <form id="contact" onSubmit={handleSubmit}>
                <h3 className={'my-3'}>Contact</h3>
                <h6>Contact us today, and get reply with in 24 hours!</h6>
                <fieldset>
                    <input
                        name={'name'}
                        id={'name'}
                        className={'form-control'}
                        placeholder="Your name"
                        type="text"
                        tabIndex="1"
                        required
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <input
                        name={'email'}
                        className={'form-control'}
                        placeholder="Your Email Address"
                        type="email"
                        id={'email'}
                        tabIndex="2"
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <input
                        name={'phone'}
                        className={'form-control'}
                        placeholder="Your Phone Number"
                        type="tel"
                        tabIndex="3"
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <input
                        name={'website'}
                        className={'form-control'}
                        placeholder="Your Web Site starts with http://"
                        type="url"
                        tabIndex="4"
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <input
                        name={'subject'}
                        className={'form-control'}
                        placeholder={'Subject'}
                        tabIndex={'5'}
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <textarea
                        name={'message'}
                        className={'form-control'}
                        rows={'5'}
                        placeholder="Type your Message Here...." tabIndex="6">

                    </textarea>
                </fieldset>
                <fieldset>
                    <div
                        tabIndex={'8'}
                        className="g-recaptcha" data-sitekey={process.env.REACT_APP_RECAPTCHA_KEY}></div>
                </fieldset>

                <fieldset>
                    <button
                        tabIndex={'9'}
                        className={'btn btn-primary'}
                        name="submit"
                        type="submit">Submit
                    </button>
                </fieldset>


            </form>


           <div className={'my-3'}>
               <h5>Not Working?</h5>
               <a
                   className={'btn btn-info btn-sm'}
                   href={'mailto:jchimien@gmail.com'}>
                   <i className={'fa fa-envelope'}>

                   </i>
                   Email
               </a>
           </div>
        </div>
    );
}

ContactForm.propTypes = {};
ContactForm.defaultProps = {};

export default ContactForm;
