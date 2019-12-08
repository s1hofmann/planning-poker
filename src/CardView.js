import React, { Component } from "react";
import classNames from "classnames";
import styled from "styled-components";
import { ShakeingCard } from "./ShakeingCard";
import { TopBar } from "./TopBar";

const CardContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 60px;
  width: 100vw;
  height: calc(100vh - 70px);
`;

const BackButton = styled.div`
  text-align: left;
  cursor: pointer;
`;

export class CardView extends Component {
  render() {
    return (
      <div>
        <TopBar>
          <BackButton onClick={this.props.onClose}>{"< Back"}</BackButton>
        </TopBar>
        <CardContainer>
          <ShakeingCard
            className={classNames("reveal")}
            isFlippable={true}
            back={this.props.children}
          />
        </CardContainer>
      </div>
    );
  }
}
