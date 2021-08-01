import React, { Component } from "react";
import ToDoList from "./ToDoList";

class LogIn extends Component {
  state = {
    accName: "",
    accPass: 0,
    acc: [
      { name: "tu", pass: "123" },
      { name: "lam", pass: "456" },
      { name: "pro", pass: "789" },
    ],
  };
  checkAccount = (e) => {
    // e.preventDefault();
    var currentAcc = { name: this.state.accName, pass: this.state.accPass };
    const account = this.state.acc.filter((account) => {
      return (
        account.name === currentAcc.name && account.pass === currentAcc.pass
      );
    });
    if (account !== []) {
      console.log(account);
      return <ToDoList />;
    }
  };
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
        <form onSubmit={this.checkAccount}>
          Tên tài khoản
          <input type="text" onChange={this.checkAccountName}></input>
          <br></br>
          Mật khẩu <input type="text" onChange={this.checkAccountPass}></input>
          <br></br>
          <button>Đăng nhập</button>
        </form>
      </div>
    );
  }
}

export default LogIn;
