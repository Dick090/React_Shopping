import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [rePwd, setRePwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [errMail, setErrmail] = useState("");
  const [checkPwd, setCheckPwd] = useState(false);
  const [checkPwd1, setCheckPwd1] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigation = useNavigate();

  const togglePwdCheck = () => {
    setCheckPwd((prev) => !prev);
  };
  const togglePwdCheckOne = () => {
    setCheckPwd1((prev) => !prev);
  };

  const toggleAuth = () => {
    setIsLoggedIn((p) => !p);
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    if (name == "") {
      setErrMsg("The Field name is mandatory");
    } else if (email == "") {
      setErrmail("The  Email Field is mandatory");
      setErrMsg("");
      setTimeout(() => {
        setErrmail("");
      }, 500);
    } else if (pwd == "") {
      setErrMsg("The Password field is missing");
    } else if (rePwd == "") {
      setErrMsg("The Re-Password field is missing");
    } else if (pwd !== rePwd) {
      setErrMsg("Password mixmatched");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("pwd", pwd);
      localStorage.setItem("auth", email);
      navigation("/dashboard");
    }
  };

  const LoginSubmit = (e) => {
    e.preventDefault();
    const local_email = localStorage.getItem("email");
    const local_pwd = localStorage.getItem("pwd");

    if (email == "") {
      setErrmail("The  Email Field is mandatory");
      setErrMsg("");
      setTimeout(() => {
        setErrmail("");
      }, 500);
    } else if (pwd == "") {
      setErrMsg("The Password field is missing");
    } else {
      if (email != local_email) {
        setErrMsg("User does not Exist");
      } else if (pwd != local_pwd) {
        setErrMsg("Wrong Password or Invalid User");
      } else {
        localStorage.setItem("auth", email);
        window.location.reload();
      }
    }
  };

  return (
    <div className="myForm">
      <form>
        <h1>{isLoggedIn ? "Login" : "Registration"} form With React</h1>
        <p style={{ color: "red" }}>{errMsg}</p>
        {isLoggedIn ? (
          ""
        ) : (
          <>
            {" "}
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Full name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
          </>
        )}
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter Your Valid Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p style={{ color: "red" }}>{errMail}</p>
        <br />
        <br />
        <div className="eye">
          <input
            type={checkPwd ? "text" : "password"}
            name=""
            id=""
            placeholder="Enter Passwordl"
            onChange={(e) => setPwd(e.target.value)}
          />
          {checkPwd ? (
            <FaEye id="ic" onClick={togglePwdCheck} />
          ) : (
            <FaEyeSlash id="ic" onClick={togglePwdCheck} />
          )}
        </div>
        {isLoggedIn ? (
          ""
        ) : (
          <>
            <div className="eye">
              <input
                type={checkPwd1 ? "text" : "password"}
                name=""
                id=""
                placeholder="Enter confirm Passwordl"
                onChange={(e) => setRePwd(e.target.value)}
              />
              {checkPwd1 ? (
                <FaEye id="ic" onClick={togglePwdCheckOne} />
              ) : (
                <FaEyeSlash id="ic" onClick={togglePwdCheckOne} />
              )}
            </div>
            <br />
            <br />
          </>
        )}
        {isLoggedIn ? (
          <button onClick={LoginSubmit}>Login</button>
        ) : (
          <button onClick={registerSubmit}>Register</button>
        )}
        <small onClick={toggleAuth}>
          {isLoggedIn
            ? "Don't have an accont? Sign up"
            : "Already have an account? Login here"}
        </small>
      </form>
    </div>
  );
}

export default MyForm;
