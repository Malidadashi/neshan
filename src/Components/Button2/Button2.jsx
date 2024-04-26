import React from "react";
import "./button2.css";
import sign1 from "../../assets/sign1.png";
import sign2 from "../../assets/sign2.png";
import sign3 from "../../assets/sign3.png";
const Button2 = () => {
  return (
    <div className="bluecard">
      <div className="">
        <img src={sign1} alt="sign1" />
        <h3>با هم بهترین مسیر رو مسیر پیدا می کنیم</h3>
        <p>
          نشان یک مسیریاب فارسی است که در پیدا کردن اطلاعات تمام مکان های روی
          نقشه و یافتن بهترین مسیر به هشت میلیون کاربر خود کمک می کند
        </p>
      </div>

      <div>
        <img src={sign2} alt="sign2" />
        <h3>دیگه تو ترافیک جریمه نشو</h3>
        <p>
          نشان به کمک گزارش نشان‌داران از اتفاقات هر مسیر، بهترین مسیر را با در
          نظر گرفتن ترافیک آنلاین به شما پیشنهاد می‌دهد و در بین مسیر با اعلام
          پلیس، دوربین و سرعت‌گیرهای مسیر در کنار شماست.
        </p>
      </div>

      <div>
        <img src={sign3} alt="sign3" />
        <h3>هر جا و هر جور میخوای بری از نشان بپرس!</h3>
        <p>
          در نشان با خودرو، وسایل حمل و نقل همگانی،موتور،دوچرخه و پیاده مسیر
          یابی کنید و مقصد خود را پیدا کنید
        </p>
      </div>
    </div>
  );
};

export default Button2;
