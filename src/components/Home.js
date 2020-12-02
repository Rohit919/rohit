import React from 'react';
import office from '../assets/icons/officecomputer.png'
import cv from '../assets/icons/cv.svg'
import flickr from '../assets/icons/flickr.svg'
import ppt from '../assets/icons/ppt.svg'
import gitub from '../assets/icons/github.svg'
import medium from '../assets/icons/medium.svg'
const Home = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        LET ME INTRODUCE MYSELF
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title branch">
                            Hey there ! I Am Rohit Kumar!
                        </h5>
                        <p className="resume-card__name">
                            Computer Science Enginnering
                        </p>
                        <h5 className="resume-card__title branch">
                            Raj Kumar Goel Institute of Technology
                        </h5>
                        <p className="resume-card__details">I am currently persuing B.tech in Computer Science Engineering from Raj Kumar Goel Institute of Technology</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Some other links to nice things
                    </h4>
                    <div className="resume-card__body">
                        <div className="bar">
                            <div className="bar__wrapper" >
                                <span className="bar__name">
                                    <a href="#">
                                        <img src={flickr} alt="icon" className="bar__icon mr-2" />
                                        Flickr [photos]
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className="bar__wrapper" >
                                <span className="bar__name">
                                    <a href="#">
                                        <img src={ppt} alt="icon" className="bar__icon mr-2" />
                                    Speaker Deck [presentations]
                                   </a>
                                </span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className="bar__wrapper" >
                                <span className="bar__name">
                                    <a href="#">
                                        <img src={gitub} alt="icon" className="bar__icon mr-2" />
                                    Github [Projects]
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className="bar__wrapper" >
                                <span className="bar__name">
                                    <a href="#">
                                        <img src={medium} alt="icon" className="bar__icon mr-2" />
                                    Medium [Blog]
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className="bar__wrapper" >
                                <span className="bar__name">
                                    <a href="#">
                                        <img src={cv} alt="icon" className="bar__icon mr-2" />
                                    Resume [pdf]
                                    </a>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h6 class="intro" >
                        Hi, I am a web developer and I love to make interactive websites which are both functional and beautiful. learning how to become better every day.
                    I'm also learning Back-End Development and looking forward to be a Full Stack Web Developer.<br />I describe myself as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions.
                    <br /><br /><div>Need something built or simply want to have chat? Reach out to me on social media or send me an email.</div>
                    </h6>
                    <div className="resume-language__body mt-3">

                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <div className="resume-body mt-3">
                        <img src={office} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;