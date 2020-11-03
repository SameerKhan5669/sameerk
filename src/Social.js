import React, { Component } from "react";
import { Img } from "react-image";
import VideocamIcon from "@material-ui/icons/Videocam";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Projects.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FileCopyIcon from "@material-ui/icons/FileCopy";
class Social extends Component {
  render() {
    return (
      <div className="social_container">
        <div className="messageSender_bottom">
          <a href="https://github.com/SameerKhan5669">
            <div className="messageSender_option">
              <GitHubIcon style={{ color: "black" }} />
              {/* <h3>Amazon Clone - My SKills</h3> */}
            </div>
          </a>

          <a href="https://www.linkedin.com/in/sameerkhan5669/">
            <div className="messageSender_option">
              <LinkedInIcon style={{ color: "#0e76a8" }} />
              {/* <h3>Amazon Clone - My SKills</h3> */}
            </div>
          </a>

          <a href="mailto:sa74khan@uwaterloo.ca">
            <div className="messageSender_option">
              <MailOutlineIcon style={{ color: "black" }} />
              {/* <h3>Amazon Clone - My SKills</h3> */}
            </div>
          </a>

          <a href="#/resume">
            <div className="messageSender_option">
              <FileCopyIcon style={{ color: "grey" }} />
              {/* <h3>Amazon Clone - My SKills</h3> */}
            </div>
          </a>

          <a href="https://www.facebook.com/profile.php?id=100009848502237">
            <div className="messageSender_option">
              <FacebookIcon style={{ color: "#3b5998" }} />
            </div>
          </a>
        </div>{" "}
      </div>
    );
  }
}

export default Social;
