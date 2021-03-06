import React, { Component } from "react";
// import Fade from "react-reveal";

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio" style={CSS.portfolio}>
        <div className="row" style={{ width: "30%" }}>
          <h1 style={CSS.portfolio}>Dashboard</h1>
          <img src="./images/portfolio/1.png" alt="DASHBOARD" />
        </div>
        <div className="row" style={{ width: "30%" }}>
          <h1 style={CSS.portfolio}>2D Plot</h1>
          <img src="./images/portfolio/2.png" alt="2D PLOT" />
        </div>
        <div className="row" style={{ width: "30%" }}>
          <h1 style={CSS.portfolio}>Admixture</h1>
          <img src="./images/portfolio/3.png" alt="ADMIX" />
        </div>
      </section>
    );
  }
}

const CSS = {
  portfolio: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: "1%",
    marginBottom: "2%",
    fontSize: "2rem",
    fontWeight: "300",
  },
};

export default Portfolio;
