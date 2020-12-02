import React from 'react';
import react from '../assets/icons/react.svg'
import python from '../assets/icons/python.svg'
import java from '../assets/icons/java.svg'
import javascript from '../assets/icons/java-script.svg'
import c from '../assets/icons/c.svg'
import css from '../assets/icons/css.svg'
import html from '../assets/icons/html.svg'
import sql from '../assets/icons/sql.svg'
import editor from '../assets/icons/edit.svg'
import eclipse from '../assets/icons/eclipse.svg'
import github from '../assets/icons/github.svg'
import window from '../assets/icons/windows.svg'
import ubuntu from '../assets/icons/ubuntu.svg'
import Bar from './Bar';

const languages = [
    {
        icon: java,
        name: 'Java (Core)',
        level: '60'
    },
    {
        icon: c,
        name: 'C-language',
        level: '75'
    },
    {
        icon: html,
        name: 'HTML/CSS',
        level: '80'
    },
    {
        icon: javascript,
        name: 'Java-Script',
        level: '80'
    },
    {
        icon: react,
        name: 'React',
        level: '70'
    },
    {
        icon: react,
        name: 'NodeJs/ExpressJs ',
        level: '75'
    },
    {
        icon: css,
        name: 'Bootstrap/Materialize',
        level: '80'
    },
    {
        icon: sql,
        name: 'MongoDB/SQL',
        level: '80'
    }
]

const tools = [
    {
        icon: github,
        name: 'Git/Github',
        level: '85'
    },
    {
        icon: editor,
        name: 'VS Code',
        level: '75'
    },
    {
        icon: eclipse,
        name: 'Eclipse IDE',
        level: '60'
    },
    {
        icon: window,
        name: 'Window',
        level: '75'
    },
    {
        icon: ubuntu,
        name: 'Ubuntu',
        level: '50'
    },

]


const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Computer Science Enginnering
                        </h5>
                        <p className="resume-card__name">
                            Raj Kumar goel Institute of Technology(2017-2021)
                        </p>
                        <p className="resume-card__details">I am currently persuing B.tech in Computer Science Engineering from Raj Kumar goel Institute of Technology</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Training
                        </h5>
                        <p className="resume-card__name">
                        SPRYOX (01/2020 - 02/2020)
                        </p>
                        <p className="resume-card__details">I work as a intern in SPRYOX and also completed some projects on MERN</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;