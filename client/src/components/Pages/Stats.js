import React from "react";
import RobotImg from "../../assets/img/robot.png";

const Stats = () => {
  return (
    <>
      {/* Stats Section  */}
      <section class="stats">
        <div class="container">
          <div class="stats-box">
            <h4>Username Here</h4>
            <h2>Personal Stats</h2>
            <p>
              Crosswords generated: 
            </p>
            <p>
              Crosswords completed:
            </p>
            <p>
              Average Time: 
            </p>
            <p>
              Daily Streak: 
            </p>
            <div class="stats-box-image">
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

export default Stats;
