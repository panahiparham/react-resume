import React, { Component } from "react";

import data from "../data.json";
import { SocialIcon } from "react-social-icons";

import "./TitleSection.css";

import Navigation from "../components/Navigation";
import DownIcon from "../components/DownIcon";
import { Link } from "react-scroll";

export default class TitleSection extends Component {
  render() {
    return (
      <div className="title-section">

        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
        <div className="contact-links">
          {Object.keys(data.links).map((key) => {
            return <SocialIcon url={data.links[key]} />;
          })}
        </div>

        <Link
          className="down-arrow"
          activeClass="active"
          to="aboutArrow"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <DownIcon icon={data.icons.down} />
        </Link>
      </div>
    );
  }
}
