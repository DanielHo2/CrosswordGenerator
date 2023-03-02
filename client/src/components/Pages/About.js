import React from "react";
import RobotImg from "../../assets/img/robot.png";

const About = () => {
  return (
    <>
      {/* About Section  */}
      <section class="about">
        <div class="container">
          <div class="about-box">
            <h4>Behind the scenes of the crossword generator</h4>
            <h2>Why We Created This</h2>
            <p>
              To play a crossword puzzle you either have to play one made by someone else
              or make one yourself. With the capabilities of today's technology we ponder the question:
              Why can't crossword puzzles be automatically generated?
            </p>
            <div class="about-button">
              <a href="#" class="btn-green">
                Make A Crossword
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="services" id="services">
        <div class="container">
          <div class="services-box">
            <div class="services-card">
              <div class="services-card-image">
                <img src={RobotImg} alt="Logo Genius Logo Design Service" />
              </div>
              <div class="services-info">
                <h3>01. Research</h3>
                <div class="services-item">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, aut qui!
                  </p>
                </div>
              </div>
            </div>

            <div class="services-card">
              <div class="services-card-image">
                <img src={RobotImg} alt="Logo Genius Logo Design Service" />
              </div>
              <div class="services-info">
                <h3>02. Design</h3>
                <div class="services-item">
                  <p>
                    With a proprietary algorithm, we are able to generate a crossword puzzle
                    with related words chosen based off of your selected keyword!
                  </p>
                </div>
              </div>
            </div>

            <div class="services-card">
              <div class="services-card-image">
                <img
                  src={RobotImg}
                  alt="Logo Genius Logo Design Service"
                />
              </div>
              <div class="services-info">
                <h3>03. Development</h3>
                <div class="services-item">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, aut qui!
                  </p>
                </div>
              </div>
            </div>

            <div class="services-card">
              <div class="services-card-image">
                <img src={RobotImg} alt="Logo Genius Logo Design Service" />
              </div>
              <div class="services-info">
                <h3>04. Deployment</h3>
                <div class="services-item">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, aut qui!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="services-button">
            <a href="#pricing" class="btn-green">
              Make A Crossword
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
