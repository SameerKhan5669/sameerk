import React, { Component } from "react";
import { Img } from "react-image";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="baby">{<Img src="bg.gif" />}</div>
        <h4>Welcome to my site,</h4>

        <p>
          Thank you for visiting. I am a fourth year student at the University of
          Waterloo
        </p>

        <p>
          I am currenlty looking for Fall 2022 internships. In the past, I have
          completed five internships: 2 at Freshbooks, Taplytics (YC, 2011), Halp, and
          Royaltymine
        </p>

        <p>
          When not on CO-OP, I am a trader by day and math student by the night,
          I have a trading guide <a href="/#/stocks">published here</a> which
          guides you through introduction to technical analysis and common
          candlestick patterns.
        </p>

        <p>
          I have also created a few stock markets bots that have outperfomred
          the market, and currenlty am working on a 'Memeberg Terminal' with a
          few buddies.
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
