import React from "react";
import styled from "styled-components";

const TopBarDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: grid;
  grid-template-columns: auto auto auto;
  width: 100%;
  height: 50px;
  background: ${props => props.theme.topbar.background};
  color: ${props => props.theme.topbar.color};
  font-size: 2em;
  font-weight: bold;
  padding: 0 0 2% 1%;
  z-index: 3;
  box-shadow: ${props => props.theme.topbar.boxshadow};
`;

export const TopBar = props => <TopBarDiv>{props.children}</TopBarDiv>;
