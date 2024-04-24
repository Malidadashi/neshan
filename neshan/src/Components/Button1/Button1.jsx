import React from 'react'
import './button1.css'
import btn1 from '../../assets/btn1.png'
import { TiDownload } from "react-icons/ti";
const Button1 = () => {
  return (
    <div>
<img className='navpic' src={btn1} alt='#'/>
<h1>نشان چه کاری انجام میده؟</h1>   
<p>نقشه و مسیر یاب نشان
    یک اپلیکیشن بسیار کاربردی و رایگان است که
     می تواند به وسیله آن بهترین راه رسیدن
به مقصد را با توجه به مسافت و ترافیک بدست بیاورید و تا رسیدن به مقصد از راهنمایی سخنگوی فارسی استفاده کنید
</p>

<button>دانلود نشان<TiDownload/></button>
</div>
  )
}

export default Button1