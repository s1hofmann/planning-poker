import React from "react";
import styled from "styled-components";
import themes from "./Themes";

const ModalDiv = styled.div`
  display: ${props => (props.show ? `block` : `none`)};
  position: fixed;
  z-index: 100;
  margin-left: 2%;
  margin-right: 2%;
  top: 10px;
  width: 96%;
  height: 96%;
  border-radius: 15px;
  border-style: solid;
  border-color: ${props => props.theme.settings.color};
  border-width: 2px;
  color: ${props => props.theme.settings.color};
  background-color: ${props => props.theme.settings.background};
  overflow: auto;
`;

const ModalContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const PreviewDiv = styled.div`
  width: 80%;
  height: 60px;
  padding: 20px;
  margin: 20px;
  text-align: center;
  text-shadow: 1px 1px lightgray;
  font-size: 1em;
  border-radius: 15px;
  border-style: solid;
  border-color: ${props => props.theme.settings.color};
  border-width: 3px;
  color: ${props => props.theme.settings.color};
  background: ${props => props.theme.settings.background};
  cursor: pointer;
`;

const CloseButton = styled.div`
  position: relative;
  left: -10px;
  top: 10px;
  float: right;
  width: 30px;
  height: 25px;
  text-align: center;
  text-shadow: 1px 1px lightgray;
  font-size: 1em
  border-radius: 5px;
  border-style: solid;
  border-color: ${props => props.theme.settings.color};
  border-width: 2px;
  cursor: pointer;
`;

const renderThemePreview = updateThemeFunc => {
  return themes.map((theme, index) => {
    return (
      <PreviewDiv key={index} theme={theme} onClick={() => updateThemeFunc(theme)}>
        {theme.name}
      </PreviewDiv>
    );
  });
};

export const SettingsModal = props => {
  return (
    <ModalDiv id="modalContainer" show={props.show}>
      <CloseButton onClick={props.onClose}>X</CloseButton>
      <ModalContentDiv id="modalContent">
        {renderThemePreview(props.onChangeSettings)}
      </ModalContentDiv>
    </ModalDiv>
  );
};
