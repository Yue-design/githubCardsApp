import React, { useState } from "react";
import "./App.css";

function ValidationMessage(props) {
  if (!props.valid) {
    return <div>{props.message}</div>;
  }
  return null;
}

function LoginForm() {
  const [form, setValues] = useState({
    email: "",
    emailValid: false,
    password: "",
    // formValid: false,
    errMsg: {}
  });

  // const validateForm = () => {
  //   setValues({ formValid: form.emailValid });
  // };

  const handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "email") {
      if (validateEmail(value)) {
        form.emailValid = true;
      }
    }
    setValues({
      ...form,
      [name]: value
    });
  };

  // console.log(
  //   form.email,
  //   form.password,
  //   form.emailValid,
  //   form.errMsg,
  //   form.errMsg.email
  // );

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form.email, form.password);
    alert("it works!");
  };

  const validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            requried
          />
        </label>
        <ValidationMessage
          valid={form.emailValid}
          message={form.errMsg.email}
        />
        <br />
        <label>
          Password:
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            requried
          />
        </label>
        <br />
      </form>
      <button type="submit" disabled={!form.emailValid} onClick={handleSubmit}>
        submit
      </button>
    </div>
  );
}

export default LoginForm;
