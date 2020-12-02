import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import linkedin from '../assets/icons/linkedin.svg'
import twitter from '../assets/icons/twitter.svg'
import telegram from '../assets/icons/telegram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/cv.svg'
import mightycoder from '../assets/mightycoder.svg'
import resume from '../assets/resume.pdf'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:codesumax@gmail.com")
    }
    return (
        <div className="sidebar">
            <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Rohit <span>Kumar</span> </div>
            <div className="sidebar__item sidebar__title">Full Stack Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="!#"><img src={facebook} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href="!#"><img src={instagram} alt="instagram" className="sidebar__icon mr-3" /></a>
                <a href="!#"><img src={linkedin} alt="linkedin" className="sidebar__icon mr-3" /></a>
                <a href="!#"><img src={twitter} alt="twitter" className="sidebar__icon mr-3" /></a>
                <a href="!#"><img src={telegram} alt="telegram" className="sidebar__icon " /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="!#"><img src={github} alt="github" className="sidebar__icon mr-3" />Github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Delhi, India</div>
                <div className="sidebar__item">rohitkumar0667@gmail.com</div>
                <div className="sidebar__item">9199932245/8789642037</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Email Me</div>
        </div>
    )
}

export default Sidebar;