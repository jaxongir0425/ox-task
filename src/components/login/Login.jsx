import React, { Component } from "react";
import axios from "axios";
import "./LoginStyle.css";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: "",
      subdomen: "",
      invalid: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let userData = new FormData();
    userData.append("_username", this.state.login);
    userData.append("_password", this.state.password);
    userData.append("_subdomain", this.state.subdomain);

    axios
      .post(
        `https://${this.state.subdomain}.ox-sys.com/security/auth_check`,
        userData
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        if (localStorage.getItem("token")) {
          this.props.history.push("/products");
        }
        console.log(res);
      })
      .catch((err) => {
        this.setState({ invalid: true });
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <div className="main-container">
          <div className="form-container">
            <div className="form-body">
              <h2 className="title">Log in</h2>
              {this.state.invalid && (
                <div className="wrong_credentials">Invalid credentials!</div>
              )}

              <form action="" className="the-form" onSubmit={this.handleSubmit}>
                <label htmlFor="subdomen">Subdomen</label>
                <input
                  type="text"
                  placeholder="Enter your subdomen"
                  name="subdomain"
                  value={this.state.subdomain}
                  onChange={this.handleChange}
                  required
                />

                <label htmlFor="login">Login</label>
                <input
                  type="text"
                  placeholder="Enter your login"
                  name="login"
                  value={this.state.login}
                  onChange={this.handleChange}
                  required
                />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />

                <input
                  type="submit"
                  onClick={this.handleLogin}
                  value="Log In"
                />
              </form>
            </div>
            <div className="form-footer">
              <div>
                <span>Don't have an account?</span> <Link to="/">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;

// import React, { Component } from "react";
// import axios from "axios";
//
// class Login extends Component {
//   constructor(props) {
//     super(props);
//
//     th/s.state = {
//       login: "",
//       password: "",
//       subdomen: "",
//       invalid: false,
//     };
//   }
//
//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//
//   handleSubmit = (e) => {
//     e.preventDefault();
//
//     // const data = {
//     //   email: this.email,
//     //   password: this.password,
//     // };
//
//     let userData = new FormData();
//     userData.append("_username", this.state.login);
//     userData.append("_password", this.state.password);
//     userData.append("_subdomain", this.state.subdomain);
//
//     axios
//       .post(
//         `https://${this.state.subdomain}.ox-sys.com/security/auth_check`,
//         userData
//       )
//       .then((res) => {
//         localStorage.setItem("token", res.data.token);
//         if (localStorage.getItem("token")) {
//           this.props.history.push("/products");
//         }
//         console.log(res);
//       })
//       .catch((err) => {
//         this.setState({ invalid: true });
//         console.log(err);
//       });
//   };
//
//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <h3>Login</h3>
//
//           <div className="form-group">
//             <label>Login</label>
//             <input
//               type="text"
//               placeholder="Login"
//               name="login"
//               value={this.state.login}
//               onChange={this.handleChange}
//               required
//             />
//           </div>
//
//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//               required
//             />
//           </div>
//
//           <div className="form-group">
//             <label>Subdomen</label>
//             <input
//               type="text"
//               placeholder="Subdomain"
//               name="subdomain"
//               value={this.state.subdomain}
//               onChange={this.handleChange}
//               required
//             />
//           </div>
//
//           <button className="sign-up">Sign Up</button>
//         </form>
//       </>
//     );
//   }
// }
//
// export default Login;
