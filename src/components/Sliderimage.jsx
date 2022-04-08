import React from 'react'
import './Sliderimage.css'
import { A11y , Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay'
import {BsThreeDots} from 'react-icons/bs'

export default function Sliderimage() {
  const datas=[
    {id:1,img:'https://images.pexels.com/photos/5804904/pexels-photo-5804904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',name:'محمدحسین رستمی' , job:'برنامه نویس وب'},
    {id:2,img:'https://images.pexels.com/photos/6246658/pexels-photo-6246658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',name:' سالار عظیمی' , job:'برنامه نویس اندروید'},
    {id:3,img:'https://images.pexels.com/photos/5788999/pexels-photo-5788999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',name:'سوسن ابراهیمی' , job:'برنامه نویس فلاتر'},
    {id:4,img:'https://images.pexels.com/photos/8441849/pexels-photo-8441849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',name:'نوید مرشد' , job:'برنامه نویس بلاک چین'},
    {id:5,img:'https://images.pexels.com/photos/8729188/pexels-photo-8729188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',name:'عرفان سالاری' , job:'برنامه نویس دیتا'},
    {id:6,img:'https://images.pexels.com/photos/5319323/pexels-photo-5319323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',name:'ابراهیم حسنی' , job:'برنامه نویس بک اند'},
    {id:7,img:'https://images.pexels.com/photos/5469190/pexels-photo-5469190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',name:'کامبیز دیرباز' , job:'برنامه نویس فرانت'},
]
  return (
    <Swiper
    className='familymember__swiper'
    modules={[A11y , Autoplay]}
    spaceBetween={450}
    slidesPerView={5}
    centeredSlidesBounds={true}
    centeredSlides= {true}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter:true,
    }}
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}

    >
      {datas.map(data=>(
        <SwiperSlide className='slide1'>
          <div className='slider__item' key={data.id}>
                <div className="slider__item__item" style={{backgroundImage:`url(${data.img})`}}>
                    <div className="slider__item__item__content">
                        <div className="slider__item__item__content__icon">
                            <BsThreeDots/>
                                <div className='ishown'>
                                    <div className='ishown__profile'>مشاهده پروفایل</div>
                                    <div className='ishown__req'>درخواست مشاوره</div>
                                </div>
                        </div>
                        <div className="slider__item__item__content__box">
                            <p className='slider__item__item__content__box__top'>{data.name} </p>
                            <div className="slider__item__item__content__box__bottom">{data.job}</div>
                        </div>
                    </div>
                </div>
            </div>
      </SwiperSlide>
      ))}
    </Swiper>
  )
}
