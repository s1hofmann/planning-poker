import React, { Component } from "react";
import { CardGrid } from "./CardGrid";
import { CardView } from "./CardView";
import { SettingsModal } from "./SettingsModal";
import themes, { Calm } from "./Themes";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { saveThemeData, loadThemeData } from "./Persistence";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${props => props.theme.body.color};
  background: ${props => props.theme.body.background};
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
      currentTheme: Calm
    };
  }

  componentDidMount() {
    loadThemeData().then(themeData => {
      const theme =
        themeData &&
        themeData.version &&
        themeData.name &&
        themes.filter(
          t => t.name === themeData.name && t.version === themeData.version
        );
      this.setState({
        ...this.state,
        currentTheme: (theme && theme.shift()) || Calm
      });
    });
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
    saveThemeData({ name: theme.name, version: theme.version });
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
