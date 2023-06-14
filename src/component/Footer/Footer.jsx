import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#f5f5f5",
      padding: "20px",
      marginTop: "20px",
      textAlign: "center",
    },
    text: {
      color: "#888",
      fontSize: "20px",
      margin: 0,
    },
    get: {
      textAlign: "end",
      color: "#888",
    },
  };
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        No copy right issues :) | Design by Nainil Oza | ozanainil@gmail.com
      </p>
    </footer>
  );
};

export default Footer;
