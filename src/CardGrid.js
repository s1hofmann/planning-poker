import React, { Component } from "react";
import classNames from "classnames";
import { Card } from "./Card";
import { TopBar } from "./TopBar";
import { Drawer } from "./Drawer";
import { standard, fibonacci, shirts } from "./Values";
import "./CardGrid.css";

export class CardGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      valueGenerator: fibonacci
    };
  }

  switchValueGenerator = value => {
    this.setState({
      valueGenerator: value
    });
    this.hideMenu();
  };

  renderCards = () => {
    return this.state.valueGenerator.func().map(val => (
      <Card
        className={classNames("overview")}
        // Should be ok, since we're dealing with static arrays?
        key={val}
        front={val}
        onSelect={this.props.onSelectCard}
      />
    ));
  };

  hideMenu = () => {
    this.setState({
      menuOpen: false
    });
  };

  toggleMenu = () => {
    const isMenuOpen = this.state.menuOpen;
    this.setState({
      menuOpen: !isMenuOpen
    });
  };

  render() {
    return (
      <div className={classNames("cardGrid")}>
        <TopBar
          left={
            <span
              className={classNames("text-left", "menu")}
              onClick={this.toggleMenu}
            >
              &#9776;
            </span>
          }
          center={
            <span className={classNames("text-centered")}>
              {this.state.valueGenerator.name}
            </span>
          }
        />
        <Drawer
          visible={this.state.menuOpen}
          items={[fibonacci, standard, shirts]}
          onSelect={this.switchValueGenerator}
        />
        {this.renderCards()}
      </div>
    );
  }
}