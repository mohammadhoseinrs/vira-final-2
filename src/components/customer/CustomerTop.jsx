import React from 'react'
import image2 from './../../Assets/images/image2.png'

export default function CustomerTop() {
  return (
    <div className="customer__top">
                <h2 className='customer__top__title'>برخی از مشتریان ما</h2>
                <p className='customer__top__text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها</p>
                <div className="customer__top__bottom">
                    <img src={image2} alt="customer-logo" />
                </div>
    </div>
  )
}
