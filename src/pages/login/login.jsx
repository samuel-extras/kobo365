import React, { Component } from "react";
import Joi from "joi";
import Input from "../../components/common/input";

class Login extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };
  schema = Joi.object({
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  });
  validate = () => {
    const result = this.schema.validate(this.state.account, {
      abortEarly: false,
    });

    if (!result.error) return {};
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
  validateProperty = ({ id, value }) => {
    if (id === "username") {
      if (value.trim() === "") return "Username is required";
    }
    if (id === "password") {
      if (value.trim() === "") return "Password is required";
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (Object.keys(errors).length) return;
    console.log("submitted");
  };
  handleChange = ({ target: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.id] = errorMessage;
    else delete errors[input.id];
    const account = { ...this.state.account };
    account[input.id] = input.value;
    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div className="inner-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox shadow-sm">
              <div className="login-left" style={{backgroundImage:`url("./login.svg")`, backgroundSize: "400px", backgroundRepeat:"no-repeat", backgroundPosition: "center"}}>
                <img className="img-fluid" src="./logo.png" alt="Logo" style={{position: "relative", marginTop: "-350px"}} />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Login</h1>
                  <p className="account-subtitle">Access to dashboard</p>
                  <form onSubmit={this.handleSubmit}>
                    <Input
                      name="username"
                      value={account.username}
                      type="text"
                      onChange={this.handleChange}
                      errors={errors.username}
                      classNamees="col-12 form-group"
                    />
                    <Input
                      name="password"
                      value={account.password}
                      onChange={this.handleChange}
                      errors={errors.password}
                      classNamees="col-12 form-group"
                    />
<div classNameName="form-group">
<button classNameName="btn btn-theme btn-lg button-1 text-white ctm-border-radius btn-block" style={{width:"290px", marginLeft: "14px"}}>
  Login
</button>
</div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        /
      </div>
    );
  }
}

export default Login;
