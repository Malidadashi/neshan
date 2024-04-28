import React from "react";
import { FaLessThan } from "react-icons/fa";
import magicbox from '../../assets/magicbox.png'
import '../../assets/shakehand.png'
import "./dev.css";

const Dev = () => {
  return (
    <div className="box">
      <img src={magicbox} alt="#"/>
      <h4>توسعه دهندگان</h4>
      <p>
        ِبیشتر
        <FaLessThan />
      </p>
      <h4>ره کار های سازمانی</h4>
      <p>
        ِبیشتر
        <FaLessThan />
      </p>
    </div>
  );
};

export default Dev;
