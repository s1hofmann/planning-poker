import React, { Component } from "react";
import { CardGrid } from "./CardGrid";
import { CardView } from "./CardView";
import { Settings } from "./Settings";
import classNames from "classnames";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSelection: null,
      showSettings: false
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
          <Settings
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
