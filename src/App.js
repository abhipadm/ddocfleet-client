import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import CopyRightInfo from "./components/common/CopyRightInfo";
import NavBar from "./components/common/NavBar";
import AppRouter from "./components/AppRouter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      // https://www.wix.com/website-template/view/html/653
      // https://material-ui.com/getting-started/usage/
      // https://github.com/only2dhir/react-js-material/tree/master/src
      // https://www.devglan.com/react-js/reactjs-material-ui-example
      // https://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/
      <div>
        <NavBar />
        <Container>
          <AppRouter />
        </Container>
        <CopyRightInfo />
      </div>
    );
  }
}

export default App;
