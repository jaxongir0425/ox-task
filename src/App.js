import React, { Component } from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Product from "./components/products/Product";
import Home from "./components/home/Home";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
    };
  }

  componentDidMount() {
    const { history } = this.props;
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/");
    } else {
      this.setState({ auth: true });
    }
  }

  render() {
    const { auth } = this.state;

    return (
      <>
        {auth ? (
          <>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/products" exact component={Product} />
            </Switch>
          </>
        ) : (
          <Login />
        )}
      </>
    );
  }
}

export default withRouter(App);
