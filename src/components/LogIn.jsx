import React, { Component } from "react";
import { Link } from "react-router-dom";

class LogIn extends Component {
  state = {
    accName: "",
    accPass: "",
    acc: [
      { name: "tu", pass: "123" },
      { name: "lam", pass: "456" },
      { name: "pro", pass: "789" },
    ],
    check: "false",
  };
  checkAccount = (e) => {
    e.preventDefault();
    var currentAcc = { name: this.state.accName, pass: this.state.accPass };
    const account = this.state.acc.filter((account) => {
      return (
        account.name === currentAcc.name && account.pass === currentAcc.pass
      );
    });
    // if (account.length !== 0) {
    //   this.setState({ check: "true" });
    // } else {
    // }
    console.log(account);
  };
  correctCheck = () => {};
  checkAccountName = (e) => {
    this.setState({ accName: e.target.value });
  };
  checkAccountPass = (e) => {
    this.setState({ accPass: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>ĐĂNG NHẬP</h1>

        <form onSubmit={this.correctCheck}>
          Tên tài khoản
          <input type="text" onChange={this.checkAccountName}></input>
          <br></br>
          Mật khẩu <input type="text" onChange={this.checkAccountPass}></input>
          <br></br>
          <button onClick={this.checkAccount}>Đăng nhập</button>
        </form>
        <Link to="/ToDolist">jhdjs</Link>
      </div>
    );
  }
}

export default LogIn;
