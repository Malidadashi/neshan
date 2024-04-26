import React from "react";
import "./footer.css";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import awards from "../../assets/awards.png";
const Footer = () => {
  return (
    <div>
      <div>
        <p>دانلود</p>
        <ul>
          <li>گوگل پلی</li>
          <li>بازار</li>
          <li>سیب اپ</li>
        </ul>
      </div>
      <ul>
        <li>توسعه دهندگان</li>
        <li>فرصت های شغلی</li>
        <li>حریم خصوصی</li>
        <li>شرایط استفاده از اپلیکیشن نشان</li>
      </ul>

      <div>
        <div>
          <ul>
            <li>
              پشتیبانی کاربران در تلگرام <FaTelegram />
            </li>
            <li>
              پشتیبانی کاربران در واتس اپ <FaWhatsapp />
            </li>
            <li>
              پست الکترونیکی <MdEmail />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src={awards} alt="#"/>
        <p>بهترین مسیریابی ایران در سال 97،98،99 و 1400</p>
      </div>
      <div className="notice">
        <p>
          © کلیه حقوق و محتوای این وب‌سایت و اپلیکیشن برای
          <a href="http://rajman.org/">سازه‌های اطلاعاتی راژمان</a>
          محفوظ می‌باشد
        </p>
      </div>
    </div>
  );
};

export default Footer;
