import React from 'react';
import PropTypes from 'prop-types';

import './ContactForm.css'

function ContactForm({handleSubmit, handleChange}) {
    return (
        <div className="form-container">
            <form id="contact" onSubmit={handleSubmit}>
                <h3>Quick Contact</h3>
                <h4>Contact us today, and get reply with in 24 hours!</h4>
                <fieldset>
                    <input
                        name={'name'}
                        className={'form-control'}
                        placeholder="Your name" type="text" tabIndex="1" required autoFocus
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <input
                        name={'email'}
                        className={'form-control'}
                        placeholder="Your Email Address" type="email" tabIndex="2"
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <input
                        name={'phone'}
                        className={'form-control'}
                        placeholder="Your Phone Number" type="tel" tabIndex="3"
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <input
                        name={'website'}
                        className={'form-control'}
                        placeholder="Your Web Site starts with http://" type="url" tabIndex="4"
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <textarea
                        name={'message'}
                        className={'form-control'}
                        placeholder="Type your Message Here...." tabIndex="5">

                    </textarea>
                </fieldset>
                <fieldset>
                    <button
                        className={'btn btn-primary'}
                        name="submit"
                        type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>

                <div className="g-recaptcha" data-sitekey="6LeRE3YUAAAAAJBcgHhKwbwV2Ctewx8ialYj6xYu"></div>

            </form>


        </div>
    );
}

ContactForm.propTypes = {};
ContactForm.defaultProps = {};

export default ContactForm;
