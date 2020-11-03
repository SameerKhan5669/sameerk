import React, { Component, useState } from "react";
import { Img } from "react-image";
import VideocamIcon from "@material-ui/icons/Videocam";
import "./Projects.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import AlbumIcon from "@material-ui/icons/Album";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

class Projects extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { project: 1 };
  }
  render() {
    return (
      <div>
        <div className="messageSender_bottom">
          <div
            className={
              this.state.project == 1 ? "clicked" : "messageSender_option"
            }
            onClick={() => this.setState({ project: 1 })}
          >
            <DriveEtaIcon style={{ color: "black" }} />
            <h3>Tesla Controls Chrome Extesion</h3>
          </div>

          <div
            className={
              this.state.project == 2 ? "clicked" : "messageSender_option"
            }
            onClick={() => this.setState({ project: 2 })}
          >
            <VideocamIcon style={{ color: "red" }} />
            <h3>Amazon Clone</h3>
          </div>

          <div
            className={
              this.state.project == 3 ? "clicked" : "messageSender_option"
            }
            onClick={() => this.setState({ project: 3 })}
          >
            <FacebookIcon style={{ color: "blue" }} />
            <h3>Facebook Clone</h3>
          </div>

          <div
            className={
              this.state.project == 4 ? "clicked" : "messageSender_option"
            }
            onClick={() => this.setState({ project: 4 })}
          >
            <AlbumIcon style={{ color: "black" }} />
            <h3>Car & Pedestrain tracker</h3>
          </div>

          <div
            className={
              this.state.project == 5 ? "clicked" : "messageSender_option"
            }
            onClick={() => this.setState({ project: 5 })}
          >
            <TrendingDownIcon style={{ color: "red" }} />
            <h3>WSB Sentiment tracker</h3>
          </div>

          <div
            className={
              this.state.project == 6 ? "clicked" : "messageSender_option"
            }
            onClick={() => this.setState({ project: 6 })}
          >
            <TrendingUpIcon style={{ color: "green" }} />
            <h3>Hyped Stock Tracker</h3>
          </div>
        </div>{" "}
        {this.state.project == 1 ? (
          <div className="Text">
            <div>
              <p style={{ fontSize: "25px" }}>
                {" "}
                Ever since I got my tesla Model 3 I was immediately in love with
                the ability to control the car from my phone, however when I am
                busy with work I do not use my phone and spent some time
                searchig for a chrome extension that this exactly this. However,
                I was unable to find a working one.
              </p>
              <p style={{ fontSize: "25px" }}>
                {" "}
                However, lucky for me, I'm a developer, so I decided to make one
                myself and now I am able to contorl all my car's funcitons from
                the comfort of my computer without getting distracted by my
                phone
              </p>
            </div>
            {
              <Img
                style={{ width: "450px", paddingLeft: "50px" }}
                src="tesla.gif"
              />
            }
          </div>
        ) : null}
        {this.state.project == 2 ? (
          <div className="">
            <div>
              <p style={{ fontSize: "25px" }}>
                {" "}
                Here is a demo of my amazon clone, instead of items I sell my
                skills and the ratings (1-5) is for my proficency with these
                skills. Lastly, the price is my opinion of the demand and
                availablity of these skills, you can create an account, add
                stuff to cart and also log in.
              </p>

              <p style={{ fontSize: "25px" }}>
                {" "}
                View it <a href="https://clone-aa3f5.web.app/">here</a>! See
                source code{" "}
                <a href="https://github.com/SameerKhan5669/AmazonClone">here</a>
              </p>
            </div>
            {
              <Img
                style={{ width: "100%", paddingBottom: "100px" }}
                src="amazon.gif"
              />
            }
          </div>
        ) : null}
        {this.state.project > 2 ? (
          <div className="">
            <h2> Demo and description Coming Soon</h2>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Projects;
