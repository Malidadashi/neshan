import React from "react";
import "./button2.css";
import sign1 from "../../assets/sign1.png";
import sign2 from "../../assets/sign2.png";
import sign3 from "../../assets/sign3.png";
const Button2 = () => {
  return (
    <div className="maincard">
      <div className="maincard-card1">
        <img src={sign1} alt="sign1" />
        <h3 className="maincard-card1-h1">
          با هم بهترین مسیر رو مسیر پیدا می کنیم
        </h3>
        <p className="maincard-card1-p">
          <p>نشان یک مسیریاب فارسی است که در پیدا کردن اطلاعات</p>
          <p>تمام مکان‌های روی نقشه و یافتن بهترین مسیر به هشت</p>
          <p>میلیون کاربران خود کمک می‌کند.</p>
        </p>
      </div>

      <div className="maincard-card2">
        <img className="maincard-card2-img" src={sign2} alt="sign2" />
      </div>
      <div>
        <p className="maincard-card2-p">
          <h3>دیگه تو ترافیک جریمه نشو</h3>
          <p>نشان به کمک گزارش نشان‌داران از اتفاقات هر مسیر،</p>
          <p>بهترین مسیر را با در نظر گرفتن ترافیک آنلاین به شما</p>
          <p>پیشنهاد می‌دهد و در بین مسیر با اعلام پلیس، دوربین</p>
          <p>و سرعت‌گیرهای مسیر در کنار شماست.</p>
        </p>
      </div>
<div  className="maincard-card3" >
<div>
        <img className="maincard-card3-img" src={sign3} alt="sign3" />
      </div>
      <div className="maincard-card3-p">
        <h3>
          هر جا و هر جور میخوای بری از نشان بپرس!
        </h3>
        <p>
          <p>در نشان با خودرو، وسایل حمل‌ونقل همگانی، موتور، دوچرخه</p>
          <p>و پیاده مسیریابی کنید و مقصد خود را پیدا کنید.</p>
        </p>
      </div>
</div>

    </div>
  );
};

export default Button2;
