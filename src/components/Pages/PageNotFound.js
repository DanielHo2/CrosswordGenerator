import React from "react";
import { Link } from 'react-router-dom'
import RobotImg from "../../assets/img/robot.png";

const PageNotFound = () => (
    <div class="PageNotFound">
        <div class="PageNotFound-scene">
            <div class="services-card-image">
                <img src={RobotImg} alt="Logo Genius Logo Design Service" />
            </div>
            <div class="PageNotFound-text">404</div>
            <div class="PageNotFound-text">Page Not Found!</div>
            <br></br>
            <br></br>
            <Link class="btn-green" to="/">Back to Home</Link>
        </div>
    </div>
);
export default PageNotFound;