import React from "react";
import "./button1.css";
import btn1 from "../../assets/btn1.png";
import { TiDownload } from "react-icons/ti";
const Button1 = () => {
  return (
    <div className="total">
      <img className="total-img" src={btn1} alt="#" />
      <h1 className="total-h1">نشان چه کاری انجام میده؟</h1>
      <p total-text>
        <p>
          نقشه و مسیریاب نشان» یک اپلیکیشن رایگان و کاربردی است که می‌توانید به
          وسیله آن»{" "}
        </p>
        <p>
          بهترین راه رسیدن به مقصد را با توجه به مسافت و ترافیک بدست بیاورید و
          تا رسیدن به
        </p>
        <p>مقصد از راهنمایی سخن‌گوی فارسی استفاده کنید</p>
      </p>
      <button className="total-btn">
        دانلود نشان
        <TiDownload />
      </button>
    </div>
  );
};

export default Button1;
