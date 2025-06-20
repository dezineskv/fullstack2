import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //   const [photo, setPhoto] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/signup", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/signin");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="text-center mx-auto w-full flex ">
      <div className="max-w[1440px] mx-auto">
        <h1 className="text-black text-center">Sign Up</h1>

        <div
          className="text-black mx-auto pb-4 border-2 border-black rounded-lg border-r-4 p-15 overflow-hidden shadow-sm"
          style={{ padding: "2rem" }}
        >
          <div className="max-w-[500px] p-15">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name">
                  <strong>
                    <span style={{ marginRight: "1rem" }}>Name:</span>
                  </strong>{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  autoComplete="off"
                  name="email"
                  className="form-control rounded-0"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>
                    <span style={{ marginRight: "1rem" }}>Email:</span>
                  </strong>{" "}
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
              {/* <div className="mb-3">
            <label htmlFor="photo">
                                <span style={{ marginRight: "1rem" }}>Photo</span>

            </label>
            <input
              type="image"
              placeholder="Enter Image"
              autoComplete="off"
              name="photo"
              className="form-control rounded-0"
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div> */}
              <div className="mb-3">
                <label htmlFor="password">
                  <strong>
                    <span style={{ marginRight: "1rem" }}>Password:</span>
                  </strong>{" "}
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
              <button type="submit" className="btn btn-success w-100 rounded-0">
                Submit
              </button>
            </form>
          </div>
        </div>
        <br />
        <p>Already have an account?</p>
        <Link to="/signin" className="w-100 text-decoration-none">
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Signup;
