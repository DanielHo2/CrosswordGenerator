import React from "react";
import robotImg from "../../assets/img/robot.png";

const Home = () => {
  return (
    <>
      <header class="header" id="header">
        <div class="container">
          <div class="header-box">
            <div class="header-text">
              <h1>The Crossword Generator</h1>
              <h4>
                Use our crossword generator to generate the crossword puzzle of
                your dreams.
              </h4>
            </div>
            <div class="header-form">
              <form name="header" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="header" />
                <div class="header-item">
                  <input
                    type="email"
                    name="Email Address"
                    id=""
                    class="input"
                    placeholder="Enter a keyword"
                    required
                  />
                  <input
                    type="submit"
                    value="Make your puzzle!"
                    class="btn-submit"
                  />
                </div>
              </form>
            </div>
            <div class="header-image">
              <img src={robotImg} alt="Fiverr Reviews logogenius5" />
            </div>
          </div>
        </div>
      </header>
      {/* Detail Section */}
      <section class="detail">
        <div class="container">
          <div class="detail-box">
            <div class="detail-text">
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
              <div class="detail-button-box">
                <div class="detail-button">
                  <a href="#" class="btn-green">
                    Create
                  </a>
                </div>
                <div class="detail-button">
                  <a href="#" class="btn-blank">
                    Learn More &#8594;
                  </a>
                </div>
              </div>
            </div>
            <div class="detail-image">
              <img src={robotImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Detail 2 Section */}
      <section class="detail2">
        <div class="container">
          <div class="detail2-box">
            <div class="detail2-image">
              <img src="img/robot.png" alt="" />
            </div>
            <div class="detail2-text">
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
              <div class="detail2-button-box">
                <div class="detail2-button">
                  <a href="#" class="btn-green">
                    Create
                  </a>
                </div>
                <div class="detail2-button">
                  <a href="#" class="btn-blank">
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

export default Home;
