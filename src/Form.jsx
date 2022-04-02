import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPasswordErr] = useState(false);

  function logInHendle(e) {
    if (username.length < 4 && password.length < 8 && email.length < 5) {
      alert("Please type currect value");
    } else {
      alert("You are successfully logged in");
    }

    e.preventDefault();
  }
  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 4) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUsername(item);
  }
  function emailHandler(e) {
    let item = e.target.value;
    if (item.length < 6 && item.type === email) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    setEmail(item);
  }
  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 6) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    setPassword(item);
  }

  return (
    <>
      <form onSubmit={logInHendle}>
        <div class="form">
          <div class="form_in">
            <label htmlFor="User Name ">User Name : </label>
            <br />
            <input
              type="text"
              name="User Name"
              id="User Name"
              autoComplete="off"
              onChange={userHandler}
            />
            <br />
            {userErr ? <span>User not valid</span> : ""}
            <br />
          </div>

          <div class="form_in">
            <label htmlFor="email">Email : </label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              onChange={emailHandler}
            />
            <br />
            {emailErr ? <span>Email not valid</span> : ""}
            <br />
          </div>
          <div class="form_in">
            <label htmlFor="password ">Password : </label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              onChange={passwordHandler}
            />
            <br />
            {passErr ? <span>Password not valid</span> : ""}
            <br />
          </div>
          <button class="form_in" type="submit">
            {" "}
            Log In
          </button>
        </div>
      </form>
    </>
  );
};
export default Form;
