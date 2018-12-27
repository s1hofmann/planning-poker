import React, { Component } from "react";
import classNames from "classnames";
import "./Card.css";

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
      <div
        className={classNames(
          "card-body",
          { flipped: this.state.flipped },
          this.props.className
        )}
        onClick={this.props.onSelect || this.flip}
      >
        <Front>
          <h1 className={classNames("content-front")}>
            {this.props.front || "Flip it!"}
          </h1>
        </Front>
        <Back>
          <h1 className={classNames("content-back")}>{this.props.back}</h1>
        </Back>
      </div>
    );
  }
}

const Front = props => (
  <div className={classNames("card-front")}>{props.children}</div>
);
const Back = props => (
  <div className={classNames("card-back")}>{props.children}</div>
);
