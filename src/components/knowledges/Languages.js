import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  //react class component
  state = {
    languages: [
      //1er tableau languages
      { id: 1, value: "HTML & CSS", xp: 2.02 }, 
      { id: 2, value: "Javascript", xp: 1.6 },
      { id: 3, value: "PHP", xp: 1 },
      { id: 4, value: "SQL", xp: 0.6 },
    ],
    frameworks: [
      //2è tableau frameworks
      { id: 1, value: "WordPress", xp: 1 },
      { id: 2, value: "Bootstrap", xp: 1.5 },
      { id: 3, value: "VueJs", xp: 1.1 },
      { id: 4, value: "React", xp: 1.3 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          title="languages"
          className="languagesDisplay"
        />
        <ProgressBar
          languages={frameworks}
          title="frameworks & bibliothèques"
          className="frameworksDisplay"
        />
      </div>
    );
  }
}

export default Languages;


