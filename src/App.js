import React, { Component } from "react";
import { CardGrid } from "./CardGrid";
import { CardView } from "./CardView";
import { SettingsModal } from "./SettingsModal";
import { BlackAndWhite } from "./Themes";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${props => props.theme.color};
  background: ${props => props.theme.background};
}

*,
::after,
::before {
  box-sizing: border-box;
}
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSelection: null,
      showModal: false,
      currentTheme: BlackAndWhite
    };
  }

  selectCard = event => {
    this.setState({
      ...this.state,
      currentSelection: event.target.innerText
    });
  };

  closeCardView = () => {
    this.setState({
      ...this.state,
      currentSelection: null
    });
  };

  closeSettingsModal = () => {
    this.setState({
      ...this.state,
      showModal: false
    });
  };

  toggleSettingsModal = () => {
    const isShown = this.state.showModal;
    this.setState({
      ...this.state,
      showModal: !isShown
    });
  };

  updateTheme = theme => {
    this.setState({
      ...this.state,
      currentTheme: theme
    });
  };

  render() {
    if (this.state.currentSelection) {
      return (
        <ThemeProvider theme={this.state.currentTheme}>
          <GlobalStyle />
          <SettingsModal
            show={this.state.showModal}
            onClose={this.closeSettingsModal}
            onChangeSettings={this.updateTheme}
            onCloseSettings={this.closeSettingsModal}
          />
          <CardView
            onClose={this.closeCardView}
            onSettingsButton={this.toggleSettingsModal}
          >
            {this.state.currentSelection}
          </CardView>
        </ThemeProvider>
      );
    }
    return (
      <ThemeProvider theme={this.state.currentTheme}>
        <GlobalStyle />
        <SettingsModal
          show={this.state.showModal}
          onClose={this.closeSettingsModal}
          onChangeSettings={this.updateTheme}
          onCloseSettings={this.closeSettingsModal}
        />
        <CardGrid
          onSelectCard={this.selectCard}
          onSettingsButton={this.toggleSettingsModal}
        />
      </ThemeProvider>
    );
  }
}

export default App;
