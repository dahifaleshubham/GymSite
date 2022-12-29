import React from "react";
import style from "./Pricing.module.css";
import imn from  "../images/sam.jpg"
const Pricing = () => {

  const myStyle={
    backgroundImage: `url(${imn})`,
    height:'100vh',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
};
  return (
    <>
    <div style={myStyle}/>
      <div className="row row-cols-1 row-cols-md-3 g-4"  >
        <div className={style.col} style={{ width: "22rem" }}>
          <div className="card" style={{ width: "19rem", paddingLeft: "10px" }}>
            <div className="box">
              <h2>Free</h2>
              <ul style={{ listStyle: "none" }}>
                <h3> ₹0/month</h3>
                <li>0 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
            </div>
            <div className="card-body">
              <a href="/signup" className="btn btn-primary">
                Signup Now
              </a>
            </div>
          </div>
        </div>
        <div className={style.col1} style={{ width: "21rem" }}>
          <div className="card" style={{ width: "20rem" }}>
            <div className="box">
              <h2>Pro</h2>
              <ul style={{ listStyle: "none" }}>
                <h3>₹150/month</h3>
                <li>0 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
            </div>
            <div className="card-body">
              <a href="/signup" className="btn btn-primary">
                Signup Now
              </a>
            </div>
          </div>
        </div>
        <div className={style.col2} style={{ width: "22rem" }}>
          <div className="card" style={{ width: "20rem" }}>
            <div className={style.box}>
              <h2>Enterprise</h2>
              <ul style={{ listStyle: "none" }}>
                <h3>₹500/month</h3>
                <li>0 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
            </div>
            <div className="card-body">
              <a href="/signup" className="btn btn-primary">
                Signup Now
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Pricing;
