import React from "react";
import RobotImg from "../../assets/img/robot.png";

const AboutCameron = () => {
  return (
    <>
      {/* AboutMember Section  */}
      <section class="aboutMember">
        <div class="container">
          
          <div class="aboutMember-box">
            <h1>About</h1>
            
            <h2>Cameron Evans</h2>
            
            <h3>What is another project you've worked on that helped you here?</h3>
            <p>
              Generic fluff answer number 1
            </p>
            <h3>What do you hope to take away from this project?</h3>
            <p>
              Generic fluff answer number 2:
            </p>
            <div class="aboutMember-box-image">
                    <img
                    src={RobotImg}
                    alt="Logo Genius Logo Design Service"
                    />
            </div>
          </div>
        </div>
      </section>
      </>
  );
}; 

export default AboutCameron;
