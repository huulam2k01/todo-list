import React, { Component } from "react";
import ToDoList from "../components/ToDoList";

class LogIn extends Component {
  state = {
    accName: "",
    accPass: 0,
    check: false,
    acc: [
      { name: "tu", pass: "123" },
      { name: "lam", pass: "456" },
      { name: "pro", pass: "789" },
    ],
  };
  checkAccount = (e) => {
    e.preventDefault();
    var currentAcc = { name: this.state.accName, pass: this.state.accPass };
    const acc = this.state.acc.filter((acc) => {
      return acc.name === currentAcc.name && acc.pass === currentAcc.pass;
    });

    if (acc !== []) {
      this.setState({ check: true });
    } else {
      return "nhập lại";
    }
  };
  correctCheck = () => {
    if (this.state.check === true) {
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
        <form onSubmit={this.correctCheck}>
          Tên tài khoản
          <input type="text" onChange={this.checkAccountName}></input>
          <br></br>
          Mật khẩu <input type="text" onChange={this.checkAccountPass}></input>
          <br></br>
          <button onClick={this.checkAccount}>Đăng nhập</button>
        </form>
      </div>
    );
  }
}

export default LogIn;
