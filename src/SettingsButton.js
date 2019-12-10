import React from "react";
import styled from "styled-components";

const StyledButton = styled.span`
  color: ${props => props.theme.topbar.color};
  text-align: right;
  padding-right: 10px;
  text-shadow: 1px 1px lightgray;
  font-size: 1em;
  cursor: pointer;
`;

export const SettingsButton = props => (
  <StyledButton onClick={props.onClick}>&#9881;</StyledButton>
);
