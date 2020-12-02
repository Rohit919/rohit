import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="contact-section">
                <form className="contact-container">
                    <div className="contact1-header">
                        <h3>Get In Touch</h3>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="inputbox">
                                <input type="text" required />
                                <span className="text">First Name</span>
                                <span className="line" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="inputbox">
                                <input type="text" required />
                                <span className="text">Last Name</span>
                                <span className="line" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="inputbox">
                                <input type="email" required />
                                <span className="text">Email</span>
                                <span className="line" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="inputbox">
                                <input type="tel" required />
                                <span className="text">Mobile</span>
                                <span className="line" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="inputbox textarea">
                                <textarea name id cols={30} rows={10} maxLength={250} required defaultValue={""} />
                                <span className="text">Type Your Message Here...</span>
                                <span className="line" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <button type="submit">
                            <svg>
                                <rect />
                            </svg>
                Get In Touch
              </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Contact;