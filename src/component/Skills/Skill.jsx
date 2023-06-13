import React, { useContext } from "react";
import "./Skills.css";
import Skill1 from "../../image/Skill1.png";
import Skill2 from "../../image/Skill2.png";
import Skill3 from "../../image/Skill3.png";
import Skill4 from "../../image/Skill4.png";
import Skill5 from "../../image/Skill5.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Skill() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="skills">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>SkillS</span>
          <span style={{ fontSize: "20px" }}>
            • Front-End: HTML, CSS, JavaScript, React <br />
            • Back-End: Node.js ,Express.js <br />
            • Database Management: MongoDB, Elasticsearch • <br />
            • Version Control: Git, GitHub
            <br />
            • Collaboration and Teamwork
            <br />{" "}
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Skill2} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Skill3} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Skill1} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Skill4} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Skill5} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle blueCircle"></div>
      </div>
    </div>
  );
}

export default Skill;
