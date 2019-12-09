import React, { Component } from "react";
import { CardGrid } from "./CardGrid";
import { CardView } from "./CardView";
import { SettingsView } from "./SettingsView";
import classNames from "classnames";
import "./App.css";
import {settings} from "./Settings";
import {get, set} from "idb-keyval";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSelection: null,
      showSettings: false,
      settings: settings,
      style: {
        backgroundColor: settings.backgroundColor.default,
        color: settings.foregroundColor.default
      }
    };
  }

  async componentDidMount() {
    const loadedSettings = await get('settings');
    this.setState({
      settings: loadedSettings
    });
    this.changeSetting(loadedSettings);
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
    this.changeStyle(newSettings);
    set('settings', newSettings).then(() => console.log("settings stored"));
  };

  changeStyle(newSettings) {
    let style = {...this.state.style};

    style.backgroundColor = this.getBackgroundColor(newSettings);
    style.color = this.getForegroundColor(newSettings);
    this.setState({
      style: style
    })
  }

  getBackgroundColor(newSettings) {
    return newSettings.backgroundColor.value ?
        newSettings.backgroundColor.value : this.state.settings.backgroundColor.default;
  }

  getForegroundColor(newSettings) {
    return newSettings.foregroundColor.value ?
        newSettings.foregroundColor.value : this.state.settings.foregroundColor.default;
  }

  render() {
    if (this.state.currentSelection) {
      return (
        <div style={this.state.style} className={classNames("App")}>
          <CardView onClose={this.closeCardView}>
            {this.state.currentSelection}
          </CardView>
        </div>
      );
    }else if(this.state.showSettings){
      return (
        <div style={this.state.style} className={classNames("App")}>
          <SettingsView
              settings={this.state.settings}
              onChangeSetting={this.changeSetting}
              onCloseSettings={this.closeSettings}
          />
        </div>
      );
    }
    return (
      <div style={this.state.style} className={classNames("App")}>
        <CardGrid
          onSelectCard={this.selectCard}
          onOpenSettings={this.openSettings}
          style={this.state.style}
        />
      </div>
    );
  }
}

export default App;
