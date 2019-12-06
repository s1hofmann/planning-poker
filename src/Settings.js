import React, { Component } from "react";
import classNames from "classnames";
import { TopBar } from "./TopBar";
import "./Settings.css";

export class Settings extends Component {

  render() {
    return (
      <div className={classNames("cardGridView")}>
        <TopBar
            left={
              <div
                  className={classNames("text-left", "back")}
                  onClick={this.props.onCloseSettings}
              >
                {"< Back"}
              </div>
            }
            center={
                <div className={classNames("text-centered", "settings")}>
                    {"Settings"}
                </div>
            }
        />
      </div>
    );
  }
}
