import React, { Component } from "react";
import { CardGrid } from "./CardGrid";
import { CardView } from "./CardView";
import classNames from "classnames";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSelection: null
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

  render() {
    if (this.state.currentSelection) {
      return (
        <div className={classNames("App")}>
          <CardView onClose={this.closeCardView}>
            {this.state.currentSelection}
          </CardView>
        </div>
      );
    }
    return (
      <div className={classNames("App")}>
        <CardGrid
          onSelectCard={this.selectCard}
        />
      </div>
    );
  }
}

export default App;
