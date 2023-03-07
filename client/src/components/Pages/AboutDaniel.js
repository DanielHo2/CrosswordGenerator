import React from "react";
import RobotImg from "../../assets/img/robot.png";

const AboutDaniel = () => {
  return (
    <>
      {/* AboutMember Section  */}
      <section class="aboutMember">
        <div class="container">
          
          <div class="aboutMember-box">
            <h1>About</h1>
            
            <h2>Daniel Ho</h2>
            
            <h3>What is another project you've worked on that helped you here?</h3>
            <p>
              One of my internships required work to be completed in React Native, so the work I did there really helped me hit the ground running faster.
            </p>
            <h3>What do you hope to take away from this project?</h3>
            <p>
              I was hoping to be able to increase my experience with react and create another resume stuffer.
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

export default AboutDaniel;
