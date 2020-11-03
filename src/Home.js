import React, { Component } from "react";
import { Img } from "react-image";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="baby">{<Img src="bg.gif" />}</div>
        <h4>Welcome to my site,</h4>

        <p>
          Thank you for visiting. I am a third year student at the University of
          Waterloo
        </p>

        <p>
          I am an incoming SWE intern at Taplytics and have completed two prior
          internships at Halp and Royaltymine in Tornoto
        </p>

        <p>
          I am a day trader by day and math student by the night, I have a
          trading guide <a href="/#/stocks">published here</a> which guides you
          through introduction to technical analysis and common candlestick
          patterns.
        </p>

        <p>
          I have also created a few stock markets bots that have outperfomred
          the market, have built an Tesla like AI pedastrain and car tracker,
          and build a Chrome extension to Control my Tesla model 3 with chrome.
        </p>

        <p>
          Apart from all that, I&apos;m a big fan of Call of Duty and would love
          to play wiht anyone, feel free to reach out anytime.
        </p>

        <p>
          If you have any questions about my experiences, education, projects or
          want to connect about an opportunity, feel free to reach me at
          647-914-8990 or
          <a href="mailto:sa74khan@uwaterloo.ca"> email me</a> anytime!
        </p>
      </div>
    );
  }
}

export default Home;
