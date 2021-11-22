import React from "react";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <h3>Follow Us</h3>
        <BsTwitter style={{ width: 30, height: 30 }} />
        <BsFacebook style={{ width: 30, height: 30 }} />
        <BsInstagram style={{ width: 30, height: 30 }} />
        <BsLinkedin style={{ width: 30, height: 30 }} />
      </div>
    );
  }
}

export default Footer;
