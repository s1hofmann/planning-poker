import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { TopBar } from "./TopBar";
import { Drawer } from "./Drawer";
import { standard, fibonacci, shirts } from "./Values";
import { HamburgerMenu } from "./HamburgerMenu";

const CardGridDiv = styled.div`
  position: absolute;
  top: 60px;
  left: calc(10vw / 2);
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 90vw;
  height: calc(100vh - 70px);
  margin: auto;
`;

const CenteredText = styled.span`
  text-align: center;
`;

export class CardGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      valueGenerator: fibonacci
    };
  }

  renderCards = () => {
    return this.state.valueGenerator.func().map(val => (
      <Card
        // Should be ok, since we're dealing with static arrays?
        key={val}
        front={val}
        onSelect={this.onSelect}
      />
    ));
  };

  onSelect = event => {
    if (this.state.menuOpen) {
      this.hideOpenMenu();
    } else {
      this.props.onSelectCard(event);
    }
  };

  switchValueGenerator = value => {
    this.setState({
      valueGenerator: value
    });
    this.hideOpenMenu();
  };

  hideOpenMenu = () => {
    if (this.state.menuOpen) {
      this.setState({
        menuOpen: false
      });
    }
  };

  toggleMenu = () => {
    const isMenuOpen = this.state.menuOpen;
    this.setState({
      menuOpen: !isMenuOpen
    });
  };

  render() {
    return (
      <div onClick={this.hideOpenMenu}>
        <TopBar>
          <HamburgerMenu
            open={this.state.menuOpen}
            onClick={this.toggleMenu}
          ></HamburgerMenu>
          <CenteredText>{this.state.valueGenerator.name}</CenteredText>
        </TopBar>
        <Drawer
          visible={this.state.menuOpen}
          items={[fibonacci, standard, shirts]}
          onSelect={this.switchValueGenerator}
        />
        <CardGridDiv onClick={this.hideOpenMenu}>
          {this.renderCards()}
        </CardGridDiv>
      </div>
    );
  }
}
