import React from "react";
import "./body.css";
import miladtower from "../../assets/miladtower.jpg";
const Body = () => {
  return (
    <div className="post">
      <img className="post-miladtower" src={miladtower} alt="asd" />
      <h1 className="post-text">
باهم بهترین مسیر رو<br/>
پیدا می کنیم
      </h1>
    </div>
  );
};

export default Body;
