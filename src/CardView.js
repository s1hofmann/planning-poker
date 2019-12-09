import React, { Component } from "react";
import classNames from "classnames";
import styled from "styled-components";
import { ShakeingCard } from "./ShakeingCard";
import { TopBar } from "./TopBar";

const CardViewDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 60px;
  width: 100vw;
  @media (min-width: 768px) {
    width: calc(100vw / 2);
  }
  @media (min-width: >1024px) {
    width: calc(100vw / 3);
  }
  height: calc(100vh - 70px);
`;

const BackButton = styled.div`
  text-align: left;
  padding-left: 10px;
  cursor: pointer;
`;

export class CardView extends Component {
  render() {
    return (
      <CardViewDiv>
        <TopBar id="top-menu">
          <BackButton id="backButton" onClick={this.props.onClose}>{"<"}</BackButton>
        </TopBar>
        <CardContainer id="cardContainer">
          <ShakeingCard
            id="shakingCard"
            className={classNames("reveal")}
            isFlippable={true}
            back={this.props.children}
          />
        </CardContainer>
      </CardViewDiv>
    );
  }
}
