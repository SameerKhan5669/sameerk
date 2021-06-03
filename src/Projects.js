import React, { Component, useState } from "react";
import { Img } from "react-image";
import VideocamIcon from "@material-ui/icons/Videocam";
import "./Projects.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import AlbumIcon from "@material-ui/icons/Album";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ExtensionIcon from "@material-ui/icons/Extension";
import ComputerIcon from "@material-ui/icons/Computer";
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
            <ComputerIcon style={{ color: "grey" }} />
            <h3>Memeberg Terminal</h3>
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
            <ExtensionIcon style={{ color: "red" }} />
            <h3>Prod-Pi</h3>
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
          <div className="">
            <div>
              <p style={{ fontSize: "25px" }}>
                {" "}
                Here is a demo of my MemeStonk Terminal that me and a few other
                developers are working on, you start by choosing a stock, in
                this case I chose TSLA. I then input related companies for
                comparision. After this we can see overview showing sectors and
                basic info, then financial information, and then we see
                performance. Lastly, we see a heat map of historical price
                comparision between these companies. This is currently in
                development and a GUI is in Progress!
              </p>

              <p style={{ fontSize: "25px" }}>
                {" "}
                Stay tuned to be able to use it!
              </p>
            </div>
            {
              <Img
                style={{ width: "100%", paddingBottom: "100px" }}
                src="terminal1.gif"
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
        {this.state.project == 3 ? (
          <div className="">
            <div>
              <p style={{ fontSize: "25px" }}>
                {" "}
                Here is a demo of my facebook clone, it uses the facebook
                design. It was build using ReactJS, and hosted using FireBase
              </p>

              <p style={{ fontSize: "25px" }}>
                {" "}
                View it <a href="https://facebook-clone-cd14e.web.app/">here</a>
                ! See source code{" "}
                <a href="https://github.com/SameerKhan5669/facebook-clone">
                  here
                </a>
              </p>
            </div>
            {
              <Img
                style={{ width: "100%", paddingBottom: "100px" }}
                src="fb.gif"
              />
            }
          </div>
        ) : null}
        {this.state.project == 4 ? (
          <div className="">
            <div>
              <p style={{ fontSize: "25px" }}>
                {" "}
                Here is a demo of Prod-pi, it is a chrome new tab extension to
                stop you from not being productive. Next time you try to open a
                new tab to go watch netflix, you will get a glimpse of how
                productive you are.
              </p>

              <p style={{ fontSize: "25px" }}>
                {" "}
                To use, go to the github link below and download as Zip, then go
                to extensions on chrome and click load unpacked, you can then
                click this file and next time you opne a new tab you will be
                greeted with this extension! <br /> <br />
                See source code
                <a href="https://github.com/SameerKhan5669/ProdPi"> here</a>
              </p>
            </div>
            {
              <Img
                style={{ width: "100%", paddingBottom: "100px" }}
                src="prod-pi.gif"
              />
            }
          </div>
        ) : null}
        {this.state.project > 4 ? (
          <div className="">
            <h2> Demo and description Coming Soon</h2>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Projects;
