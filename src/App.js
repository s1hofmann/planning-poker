import React, { Component } from "react";
import { CardGrid } from "./CardGrid";
import { CardView } from "./CardView";
import { SettingsView } from "./SettingsView";
import classNames from "classnames";
import "./App.css";
import {settings} from "./Settings";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSelection: null,
      showSettings: false,
      settings: settings
    };
  }

  selectCard = event => {
    this.setState({
      currentSelection: event.target.innerText
    });
  };

  closeCardView = () => {
    this.setState({
      currentSelection: null
    });
  };

  openSettings = () => {
    this.setState({
      showSettings: true,
    });
  };

  closeSettings = () => {
    this.setState({
      showSettings: false
    });
  };

  changeSetting = newSettings => {
    this.setState({
      settings: newSettings
    });
  };

  render() {
    if (this.state.currentSelection) {
      return (
        <div className={classNames("App")}>
          <CardView onClose={this.closeCardView}>
            {this.state.currentSelection}
          </CardView>
        </div>
      );
    }else if(this.state.showSettings){
      return (
        <div className={classNames("App")}>
          <SettingsView
              settings={this.state.settings}
              onChangeSetting={this.changeSetting}
              onCloseSettings={this.closeSettings}
          />
        </div>
      );
    }
    return (
      <div className={classNames("App")}>
        <CardGrid
          onSelectCard={this.selectCard}
          onOpenSettings={this.openSettings}
        />
      </div>
    );
  }
}

export default App;
