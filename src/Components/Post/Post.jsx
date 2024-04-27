import React from "react";
import "./post.css";
import { IoMdSearch } from "react-icons/io";
import { BsBasket } from "react-icons/bs";
import { MdOutlineAtm } from "react-icons/md";
import { FaHospitalSymbol } from "react-icons/fa";
import { RiRestaurant2Fill } from "react-icons/ri";
import { FaLessThan } from "react-icons/fa";

const Post = () => {
  return (
    <div className="graybox">
      <div className="input">
        <h2>دنبال هرچی می‌گردی همین حالا در نشــان پیداش کن.</h2>
        <input placeholder="رستوران،مراکز درمانی،مراکز تفریحی"></input>
        <IoMdSearch />

        <div className="icons">
          <BsBasket />
          <MdOutlineAtm />
          <FaHospitalSymbol />
          <RiRestaurant2Fill />
        </div>
        <div>
          <button>
            نقشه شهر های ایران
            <FaLessThan />
          </button>
        </div>


      </div>
    </div>
  );
};

export default Post;
