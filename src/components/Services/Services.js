import React from "react";
import "./Services.css";
import robot from "../../assets/img/robot.png";

const Services = () => {
  return (
    <>
      <section className="services" id="services">
        <div className="container">
          <h2>About The Process</h2>
          <div className="services-box">
            <div className="services-card">
              <div className="services-card-image">
                <img src={robot} alt="Logo Genius Logo Design Service" />
              </div>
              <div className="services-info">
                <h3>01. Research</h3>
                <div className="services-item">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, aut qui!
                  </p>
                </div>
              </div>
            </div>

            <div className="services-card">
              <div className="services-card-image">
                <img src={robot} alt="Logo Genius Logo Design Service" />
              </div>
              <div className="services-info">
                <h3>02. Design</h3>
                <div className="services-item">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, aut qui!
                  </p>
                </div>
              </div>
            </div>

            <div className="services-card">
              <div className="services-card-image">
                <img src={robot} alt="Logo Genius Logo Design Service" />
              </div>
              <div className="services-info">
                <h3>03. Development</h3>
                <div className="services-item">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, aut qui!
                  </p>
                </div>
              </div>
            </div>

            <div className="services-card">
              <div className="services-card-image">
                <img src={robot} alt="Logo Genius Logo Design Service" />
              </div>
              <div className="services-info">
                <h3>04. Deployment</h3>
                <div className="services-item">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, aut qui!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="services-button">
            <a href="#pricing" className="btn-green">
              Start A Crossword
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
