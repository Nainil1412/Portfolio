import React, { useState } from "react";
import styles from "./Card.module.css";
import MyVerticallyCenteredModal from "../Modal/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = ({ emoji, heading, detail, color }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleLearnMore = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  const renderModalContent = () => {
    switch (heading) {
      case "Software Developer":
        return (
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={closeModal}
            heading={heading}
          >
            <p>
              I am motivated and enthusiastic intern seeking a software
              developer role to apply knowledge and skills gained through 4
              months of internship experience. Strong communication and
              problem-solving skills, with a passion for eDelta Enterprise
              Solution. Proven ability to work effectively in team environments
              and adapt quickly to new challenges.
            </p>
            <p>Key Skills: MERN Stack, JavaScript, Python, Git, </p>
          </MyVerticallyCenteredModal>
        );
      case "Education":
        return (
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={closeModal}
            heading={heading}
          >
            <p>
              I am doing my Bachelor of Engineering specialization in
              Information Technology in G H Patel College of Engineering and
              Technology.
            </p>
            <p>CGPA - 8.09 (Till 7th semester)</p>
          </MyVerticallyCenteredModal>
        );
      case "Projects":
        return (
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={closeModal}
            heading={heading}
          >
            <p>
              I have done many projects during my college. some of them are
              below.
            </p>
            <div>
              <b>
                {" "}
                • College Event Management, Event Management Portal for
                students:{" "}
              </b>
              <p>
                - This is Event Management portal for colleges form which
                students can see all events which will be organized college.
                Also students can book or register the event.
              </p>
            </div>
            <div>
              <b> • Shorting Visualizer: </b>
              <p>
                - It is a Shorting based project in which you can visualize the
                algorithm how it is short.
              </p>
            </div>
            <div>
              <b> • TextUtils, Text manipulate website:</b>
              <p>
                - In this you can convert your text to Uppercase, Lowercase also
                you can copy, clear your text and remove extra space in between
                text. You can also see your text summery.
              </p>
            </div>
            <div>
              <b> • To-Do list: </b>
              <p>
                - A todo list is a straightforward application that allows users
                to create, manage, and track their tasks or to-do items. It
                provides a user-friendly interface where users can add new
                tasks, mark tasks as completed, and remove tasks from their
                list.
              </p>
            </div>
          </MyVerticallyCenteredModal>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className={`${styles.card}`} style={{ borderColor: color }}>
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className={`${styles["c-button"]}`} onClick={handleLearnMore}>
          LEARN MORE
        </button>
      </div>
      {renderModalContent()}
    </>
  );
};

export default Card;
