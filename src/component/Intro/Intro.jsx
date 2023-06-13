import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../image/github.png";
import LinkedIn from "../../image/linkedin.png";
import Instagram from "../../image/instagram.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
import Vector1 from "../../image/Vector1.png";
import Vector2 from "../../image/Vector2.png";
import boy from "../../image/boy.png";
import glassesimoji from "../../image/glassesimoji.png";
import coffee from "../../image/coffee.png";
import mern from "../../image/mern.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";

function Intro() {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Intro" id="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}> Hey! I am </span>
          <span style={{ marginLeft: "50px" }}> Nainil Oza </span>
          <span
            style={{
              textalign: "justify",
              fontSize: "22px",
              marginRight: "20px",
            }}
          >
            {" "}
            I am 22 years old web developer living in Ahmedabad, India. I am a
            Information Technology Engineer. Seeking a challenging career with a
            progressive organization that provides an opportunity to capitalized
            my technical skills and abilities in the field of Engineering. I am
            always excited to work with like minded people.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/Nainil1412" target="_blank">
            <img src={Github} alt=""></img>
          </a>
          <a href="https://www.linkedin.com/in/nainiloza" target="_blank">
            <img src={LinkedIn} alt=""></img>
          </a>
          <a href="https://www.instagram.com/nainil_14.12/" target="_blank">
            <img src={Instagram} alt=""></img>
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img
          style={{ left: "14%", transform: "scale(1.4)" }}
          src={boy}
          alt=""
        />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={mern} text1="Software" text2="Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={coffee} text1="Coffee" text2="with Me :)" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
