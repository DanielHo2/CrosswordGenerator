import React from "react";
import "./Details.css";
import robot from "../../assets/img/robot.png";

const Details = () => {
  return (
    <>
      {/* Detail Section */}
      <section className="detail">
        <div className="container">
          <div className="detail-box">
            <div className="detail-text">
              <h2>Word Search Database</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                labore amet ut, nostrum sequi similique fuga aliquam vel quos
                perspiciatis dolorem aperiam delectus quibusdam consequatur
                corrupti illo, et maxime eaque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur rerum corrupti dolores deleniti odio vitae.
              </p>
              <div className="detail-button-box">
                <div className="detail-button">
                  <a href="#" className="btn-green">
                    Create
                  </a>
                </div>
                <div className="detail-button">
                  <a href="#" className="btn-blank">
                    Learn More &#8594;
                  </a>
                </div>
              </div>
            </div>
            <div className="detail-image">
              <img src={robot} alt="robot1" />
            </div>
          </div>
        </div>
      </section>

      {/* Detail 2 Section */}
      <section className="detail2">
        <div className="container">
          <div className="detail2-box">
            <div className="detail2-image">
              <img src={robot} alt="" />
            </div>
            <div className="detail2-text">
              <h2>Clue Search Database</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                labore amet ut, nostrum sequi similique fuga aliquam vel quos
                perspiciatis dolorem aperiam delectus quibusdam consequatur
                corrupti illo, et maxime eaque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur rerum corrupti dolores deleniti odio vitae.
              </p>
              <div className="detail2-button-box">
                <div className="detail2-button">
                  <a href="#" className="btn-green">
                    Create
                  </a>
                </div>
                <div className="detail2-button">
                  <a href="#" className="btn-blank">
                    Learn More &#8594;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
