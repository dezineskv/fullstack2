import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import toast, { Toaster } from "react-hot-toast";

function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //   const [photo, setPhoto] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/signin", { email, password })
      .then((result) => {
        console.log(result);
        toast.success("Login Success!");

        navigate("/orders");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* <Toaster/> */}
      <div className="text-center mx-auto w-full flex ">
        <div className="max-w[1440px] mx-auto">
          <h1 className="text-black text-center">Sign In</h1>

          <div
            className="text-black mx-auto pb-4 border-2 border-black rounded-lg border-r-4 p-15 overflow-hidden shadow-sm"
            style={{ padding: "2rem" }}
          >
            <div className="max-w-[500px] p-15">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email">
                    <strong>
                      <span style={{ marginRight: "1rem" }}>Email:</span>
                    </strong>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password">
                    <strong>
                      <span style={{ marginRight: "1rem" }}>Password:</span>
                    </strong>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    className="form-control rounded-0"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <br />
                <button
                  type="submit"
                  className="btn btn-success w-100 rounded-0"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
          <br />
          <p>Create an account?</p>
          <Link to="/signup" className="w-100 text-decoration-none">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}

export default Signin;
