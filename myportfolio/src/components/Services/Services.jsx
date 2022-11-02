import React, {useState} from 'react'
import "./Services.css"
const Services = () => {
    const [toggleState, setTogglestate] = useState(0);

    const toggleTab = (index) => {
        setTogglestate(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title"> Web <br /> Devoloper</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(1)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title"> Web Developer</h3>
                        <p className="services__modal-description">Planning and developing software solutions and web applications, supporting and maintaining a company's websites and digital products</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'> I develop the user interface.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'> Web page development</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'> Design and mockups of products for companies.</p>
                            </li>
                        </ul>
                         
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title"> Ui/Ux <br /> Designer</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title"> Ui/Ux Designer</h3>
                        <p className="services__modal-description"> I create the user interface for apps, websites, or other interactive media</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'> I develop the user interface.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'>I can execute all visual design stages from concept to final hand-off to engineering</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'> Design and mockups of products for companies.</p>
                            </li>
                        </ul>
                         
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-analytics services__icon"></i>
                    <h3 className="services__title"> Data <br /> Analyst</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(3)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title"> Data Analyst</h3>
                        <p className="services__modal-description"> Examining data sets in order to find trends and draw conclusions about the information obtained</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'> I can work very well with Ms Excel</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'> Interpreting data, analyzing results using statistical techniques</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'> Acquiring data from primary or secondary data sources and maintaining databases</p>
                            </li>
                        </ul>
                         
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services