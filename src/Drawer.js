import React, { Component } from "react";
import classNames from "classnames";
import "./Drawer.css";

export class Drawer extends Component {
  render() {
    return (
      <div className={classNames("drawer", { visible: this.props.visible })}>
        {this.props.items.map(child => (
          <DrawerItem
            key={child.name}
            onClick={() => {
              this.props.onSelect(child);
            }}
          >
            {child.name}
          </DrawerItem>
        ))}
      </div>
    );
  }
}

class DrawerItem extends Component {
  render() {
    return <h1 className={classNames("menuItem")} onClick={this.props.onClick}>{this.props.children}</h1>;
  }
}
