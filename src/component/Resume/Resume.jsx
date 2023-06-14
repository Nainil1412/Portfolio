import React, { useContext } from "react";
import "./Resume.css";
import Card from "../Card/Card";
import Glasses from "../../image/glasses.png";
import HeartEmoji from "../../image/heartemoji.png";
import Humble from "../../image/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import resume from "./resume.pdf";

function Resume() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="resume">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My</span>
        <span style={{ marginLeft: "20px" }}>Resume</span>
        <span style={{ fontSize: "20px" }}>
          <b
            style={{
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            {" "}
            Nainil Oza
          </b>
          <br />
          <br /> • IT Engineer, Web developer, Graphic Designer.
          <br />
          • Ahmedabad, Gujarat, India
          <br />• (+91) 78745 39433
          <br />• ozanainil@gmail.com
        </span>
        <a href={resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "35rem" }}
          whileInView={{ left: "24rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Software Developer"}
            detail={"Html, Css, JavaScript, MERN stack and many more"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-5rem", top: "12rem" }}
          whileInView={{ left: "4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Education"}
            detail={"Bachelor of Engineering in Information Technology"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "30rem" }}
          whileInView={{ left: "22rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Projects"}
            detail={"The one thing keeps me awake all night"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Resume;
