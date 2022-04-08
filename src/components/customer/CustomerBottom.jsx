import React from 'react'
import './Customer.css'
import image4 from './../../Assets/images/image4.png'

export default function CustomerBottom() {
  return (
    <div className='customer__bottom'>
        <div className="customer__bottom__right">
            <h2>مشاوره کسب و کار</h2>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
            <div className="customer__bottom__right__button">
            <button className='customer-btn orange'>درخواست مشاوره</button>
            <button className='customer-btn black'>0912 453 6284</button>

            </div>
        </div>
        <div className="customer__bottom__left">
            <img src={image4} alt="" />
        </div>
    </div>
  )
}
