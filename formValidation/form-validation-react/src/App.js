import React, { useState } from "react";
import "./App.css";

function SignUpForm() {
  const [form, setValues] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form.username, form.password);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            value={form.password}
            onChange={handleChange}
            requried
          />
        </label>
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
        <label>
          Password Confirmation:
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            requried
          />
        </label>
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;
