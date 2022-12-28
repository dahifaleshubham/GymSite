import React from "react";
import style from "./Signup.module.css"
import imn from  "../images/training.jpg"
import { useState } from "react";

function Signup() {


    const myStyle={
        backgroundImage: `url(${imn})`,
        height:'100vh',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center",
    
    };

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
console.log(value)
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    alert("singnup successfully")
  };
  return (
    <div style={myStyle}>
      <div className={style.container}>
        <form >
          <div className="form-group">
            <label htmlFor="exampleInputPassword1"style={{color:"white"}}>Your Name</label>
            <input
              type="text"
              required
              name="name"
              className="form-control"
              id="exampleInputPassword1"
              value={user.name}
              
              onChange={handleInputs}
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1" style={{color:"white"}}>Email address</label>
            <input
              type="email"
              required
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={user.email}
              
              onChange={handleInputs}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" style={{color:"white"}} >Password</label>
            <input
              type="password"
              required
              className="form-control"
              name="password"
              id="exampleInputPassword1"
              value={user.password}
              
              onChange={handleInputs}
              placeholder="Password"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              onClick={postData}
              className="btn btn-primary  m-4">
              Register
            </button>
          </div>
        </form>
      </div>
    </div> 
  );
}

export default Signup;
