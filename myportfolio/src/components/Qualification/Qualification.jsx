import React from 'react'
import "./Qualification.css"
const Qualification = () => {
    return (
        <section className='qualification section'>
            <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'> My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button-flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className="qualification__content qualification__content-active">
                    <div className="qualification__data">
                            <h3 className="qualification__title">Computer Engineering</h3>
                            <span className="qualification__subtitle">University of Uyo, Uyo</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> october 2017 till Date
                            </div>
                        </div>
                        <div className="qualification__data">
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">New Horizon</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> Febuary 2022 - April 2022
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qulaification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <h3 className="qualification__title">Learn React</h3>
                            <span className="qualification__subtitle">FreeCodeCamp</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> May 2022
                            </div>
                          
                        </div>


                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qulaification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <h3 className="qualification__title">Web Bootcamp</h3>
                            <span className="qualification__subtitle">KodeCamp</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> July 2022 - August 2022
                            </div>
                          
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification