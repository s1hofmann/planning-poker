import React from "react";
import styled from "styled-components";

const DrawerItemDiv = styled.h1`
  border-bottom: 2px solid;
  cursor: pointer;
`;

const DrawerItem = props => (
  <DrawerItemDiv onClick={props.onClick}>{props.children}</DrawerItemDiv>
);

const DrawerDiv = styled.div`
  position: absolute;
  height: 100%;
  top: 50px;
  left: 0;
  z-index: 10;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  padding: 0 3% 0 3%;
  transform: ${props =>
    props.visible ? `translateX(0px)` : `translateX(-100%)`};
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  h1 {
    border-bottom: 2px solid;
  }
`;

export const Drawer = props => {
  return (
    <DrawerDiv visible={props.visible}>
      {props.items.map(child => (
        <DrawerItem
          key={child.name}
          onClick={() => {
            props.onSelect(child);
          }}
        >
          {child.name}
        </DrawerItem>
      ))}
    </DrawerDiv>
  );
};
