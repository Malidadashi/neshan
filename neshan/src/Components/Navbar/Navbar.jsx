import React from 'react'
import './navbar.css'
import  { ReactComponent as Logo } from "../../assets/logo.svg"
import  '../../assets/logo.svg'
import { FiDownload } from "react-icons/fi";
const Navbar = () => {
  return (
    <div >
<div className='logo'>
    <Logo/>
</div>

<div className='uls1'>

<div className='uls2'>

<ul className='uls3'>
  <li>نقشه شهر</li>
  <li>فاصله شهرها</li>
  <li>قابلیت ها</li>
  <li>تبلیغ در نشان</li>
  <li>حریم خصوصی</li>
  <li>بلاگ</li>
  <li>فرصت های شغلی</li>
</ul>
</div>
</div>
<div>
  <button className='blbtn'><a >دانلود نشان<FiDownload /></a></button>
  
</div>
    </div>
  )
}

export default Navbar