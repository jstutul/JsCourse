import React from "react";
import "./About.css";
import myimg from "../../slider/tutul.png";
const About = (props) => {
  return (
    <div className="about">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <img src={myimg} className="img-sluid" alt="" />
          <span className="text-justify text-warning">
            <h5>Web Developer</h5>
          </span>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 desc">
          <h3>Jafor Sadik Tutul</h3>
          <p>
            Creative web developer dedicated to developing and optimizing
            interactive, user-friendly, and feature-rich websites. Leverage
            analytical skills and strong attention to detail in order to deliver
            original and efficient web solutions, provide technical knowledge
            and Expertise, build new websites from start to finish, and
            successfully manage a team of web developers. I am a python
            developer and have good knowledge of Django. I have almost 2+ years
            of experience. I have completed several Web Applications using
            python.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
