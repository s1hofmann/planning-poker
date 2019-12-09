import React, { Component } from "react";
import { CardGrid } from "./CardGrid";
import { CardView } from "./CardView";
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
      currentTheme: BlackAndWhite
    };
  }

  selectCard = event => {
    this.setState({
      currentSelection: event.target.innerText
    });
  };

  closeCardView = () => {
    this.setState({
      currentSelection: null
    });
  };

  render() {
    if (this.state.currentSelection) {
      return (
        <ThemeProvider theme={this.state.currentTheme}>
          <GlobalStyle />
          <CardView onClose={this.closeCardView}>
            {this.state.currentSelection}
          </CardView>
        </ThemeProvider>
      );
    }
    return (
      <ThemeProvider theme={this.state.currentTheme}>
        <GlobalStyle />
        <CardGrid onSelectCard={this.selectCard} />
      </ThemeProvider>
    );
  }
}

export default App;
