import React, { Component } from "react";
import styled from "styled-components";

const CardBody = styled.div`
  position: relative;
  text-align: center;
  color: ${props => props.theme.card.color};
  background: ${props => props.theme.card.background};
  width: 90%;
  height: 90%;
  margin: auto;
  border-radius: 5px;
  box-shadow: ${props => props.theme.card.boxshadow};
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  perspective: 500px;
  transform: ${props => (props.flipped ? `rotateY(180deg)` : `rotateY(0deg)`)};
  transition: 0.6s;
  cursor: pointer;
`;

const ContentDiv = styled.div`
  position: absolute;
  text-align: center;
  backface-visibility: hidden;
  display: grid;
  align-items: center;
  justify-content: center;
`;
const FrontContent = styled(ContentDiv)`
  transform: rotateY(0deg);
`;
const BackContent = styled(ContentDiv)`
  transform: rotateY(180deg);
`;
const CardText = styled.h1`
  text-shadow: ${props => props.theme.card.textshadow};
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
          <CardText style={this.props.style}>{this.props.front || "Flip it!"}</CardText>
        </Front>
        <Back>
          <CardText style={this.props.style}>{this.props.back}</CardText>
        </Back>
      </CardBody>
    );
  }
}
