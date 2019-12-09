import React, { Component } from "react";
import styled from "styled-components";

const CardBody = styled.div`
  position: relative;
  text-align: center;
  color: ${props => props.theme.color};
  background: ${props => props.theme.background};
  width: 90%;
  height: 90%;
  margin: auto;
  border-radius: 15px;
  border-style: solid;
  border-color: ${props => props.theme.color};
  border-width: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  perspective: 500px;
  transform: ${props => (props.flipped ? `rotateY(180deg)` : `rotateY(0deg)`)};
  transition: 0.6s;
`;

const ContentDiv = styled.div`
  position: absolute;
  text-align: center;
  backface-visibility: hidden;
  display: grid;
  align-items: center;
  justify-content: center;
  h1 {
    text-shadow: 1px 1px lightgray;
    font-size: 5em;
  }
`;
const FrontContent = styled(ContentDiv)`
  transform: rotateY(0deg);
`;
const BackContent = styled(ContentDiv)`
  transform: rotateY(180deg);
`;
const CardText = styled.h1`
  text-shadow: 1px 1px lightgray;
  font-size: 2em;
`;

const Front = props => <FrontContent>{props.children}</FrontContent>;
const Back = props => <BackContent>{props.children}</BackContent>;

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: this.props.isFlipped || false
    };
  }

  flip = () => {
    if (!this.props.back) {
      return;
    }
    const isFlipped = this.state.flipped;
    this.setState({
      flipped: !isFlipped
    });
    if (typeof this.props.onFlip === "function") {
      this.props.onFlip();
    }
  };

  render() {
    return (
      <CardBody
        flipped={this.state.flipped}
        onClick={this.props.onSelect || this.flip}
      >
        <Front>
          <CardText>{this.props.front || "Flip it!"}</CardText>
        </Front>
        <Back>
          <CardText>{this.props.back}</CardText>
        </Back>
      </CardBody>
    );
  }
}
