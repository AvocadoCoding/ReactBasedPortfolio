import React, { Component } from "react";

import Card from "../components/Card";
import Alert from "../components/Alert";
import projectData from "../data/projectData.json";

// send card data through props, put in super and this.state
console.log(projectData);
class Portfolio extends Component {
  constructor() {
    super()
    this.state = { projectArr: [] };
  }
  componentDidMount() {
   let projectCards = projectData.map((project, key)=> {
    return (
      <div key={project.title}>
        <h1>{project.title}</h1>
        <h2>{project.deployed}</h2>
      </div>
    )
   })
   this.setState({projectArr: projectCards})
  }
  render() {
    return (
      <div className="container">
        <h1>Inside my container</h1>
        {this.state.projectArr}
      </div>
    );
  }
}

export default Portfolio;
