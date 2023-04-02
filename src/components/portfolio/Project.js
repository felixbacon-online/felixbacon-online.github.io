import React, { Component } from "react";

class Project extends Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  };

  render() {
    let { name, languagesIcons, source, link, picture } = this.props.item;
    return (
      <div className="project">
        <div className="icon">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h2>{name}</h2>
        <img src={picture} alt="" onClick={this.handleInfo} />
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>
        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <div className="sourceCode">
                  <a
                    href={link}
                    rel="noopener noreferrer"
                    className="button"
                    target="_blank"
                  >
                    lien vers la page web
                  </a>
                </div>
                <div className="sourceCode">
                  <a
                    href={source}
                    rel="noopener noreferrer"
                    className="button"
                    target="_blank"
                  >
                    Code source
                  </a>
                </div>
              </div>
              <img src={picture} alt=""></img>
              <div className="button return" onClick={this.handleInfo}>
                Retourner sur portfolio
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Project;
