import React from "react";
import "./body.css";
import miladtower from "../../assets/miladtower.jpg";
const Body = () => {
  return (
    <div className="post">
      <img className="miladtower" src={miladtower} alt="asd" />
      <h1 className="h1">با هم بهترین مسیر رو پیدا می کنیم</h1>
    </div>
  );
};

export default Body;
