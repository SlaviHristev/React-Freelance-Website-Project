import React from "react";
import "./Register.scss"

const Register =() =>{
    return (
        <div className="register">
          <form>
            <div className="left">
              <h1>Create a new account</h1>
              <label htmlFor="">Username</label>
              <input
                name="username"
                type="text"
                placeholder="johndoe"
              />
              <label htmlFor="">Email</label>
              <input
                name="email"
                type="email"
                placeholder="email"
              />
              <label htmlFor="">Password</label>
              <input name="password" type="password" />
              <label htmlFor="">Profile Picture</label>
              <input type="file" />
              <label htmlFor="">Country</label>
              <input
                name="country"
                type="text"
                placeholder="Usa"
              />
              <button type="submit">Register</button>
            </div>
            <div className="right">
              <h1>I want to become a seller</h1>
              <div className="toggle">
                <label htmlFor="">Activate the seller account</label>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
              <label htmlFor="">Phone Number</label>
              <input
                name="phone"
                type="text"
                placeholder="+1 234 567 89"

              />
              <label htmlFor="">Description</label>
              <textarea
                placeholder="A short description of yourself"
                name="desc"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </form>
        </div>
      );
}

export default Register