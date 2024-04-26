import React from "react";
import "./body.css";
import miladtower from "../../assets/miladtower.jpg";
const Body = () => {
  return (
    <div className="post">
      <img className="miladtower" src={miladtower} alt="asd" />
     
      <div className="a">
        <h1>
          <div className="text-1">با هم</div>
          <div className="text-2">بهترین مسیر رو</div>
          <div className="text3">پیدا می‌کنیم</div>
        </h1>
      </div>
    </div>
  );
};

export default Body;
