import { useState } from "react";

import "./../bootstrap.css";
import "./../components/Registration.css";

export default function Registration() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setPassword(e.target.value);
  }

  const handleValidation = (e) => {
    e.preventDefault();
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (password === "") {
      setMessage("Please enter password (must be 8 characters long)");
    } else if (regExp.test(password)) {
      setMessage("Password is Valid ✔️");
    } else if (!regExp.test(password)) {
      setMessage(
        "Password is no Valid (There must be at least one uppercase letter, one lowercase letter and one character)"
      );
    } else {
      setMessage("");
    }
  };

  return (
    <div className="card  bg-white">
      <h2>Password Validation</h2>
      <form onSubmit={handleValidation}>
        <label htmlFor="password" className="form-control-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          onChange={handleChange}
          value={password}
        />
        <p className="err">{message}</p>
        <button className="btn btn-success w-100">Check</button>
      </form>
    </div>
  );
}
