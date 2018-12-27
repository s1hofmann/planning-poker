import React, { Component } from "react";
import classNames from "classnames";
import "./TopBar.css";

export class TopBar extends Component {
  render() {
    return (
      <div className={classNames("top-bar")}>
        {this.props.left || <div />}
        {this.props.center || <div />}
        {this.props.right || <div />}
      </div>
    );
  }
}
