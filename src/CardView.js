import React, { Component } from "react";
import classNames from "classnames";
import { ShakeingCard } from "./ShakeingCard";
import { TopBar } from "./TopBar";
import "./CardView.css";

export class CardView extends Component {
  render() {
    return (
      <div className={classNames("cardView")}>
        <TopBar
          left={
            <div
              className={classNames("text-left")}
              onClick={this.props.onClose}
            >
              {"< Back"}
            </div>
          }
        />
        <div className={classNames("card-container")}>
          <ShakeingCard
            className={classNames("reveal")}
            isFlippable={true}
            back={this.props.children}
          />
        </div>
      </div>
    );
  }
}
