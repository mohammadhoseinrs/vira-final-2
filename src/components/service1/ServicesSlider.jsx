import React, { useEffect, useRef } from 'react'
import './ServicesSlider.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image8 from './../../Assets/images/image8.png'
import image9 from './../../Assets/images/image9.png'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'
export default function ServicesSlider() {
  const sliderRef=useRef(null)
  useEffect(()=>{
    console.log(sliderRef.current);
  },[])
      let datas=[
         {id:1,titel:'طراحی وب',img:image8,number:'۲۳۴'},
         {id:2,titel:'گرافیک',img:image9,number:'۵۷۶'},
         {id:3,titel:'فلاتر',img:image8,number:'۷۶۵'},
         {id:4,titel:'منهدس داده',img:image9,number:'۵۴۱'},
         {id:5,titel:'نرم افزار',img:image8,number:'۹۸۲'},
         {id:6,titel:'سخت افزار',img:image9,number:'۱۹۸'},
      ]
    const settings = {
        infinite: true,
        slidesToShow: 2,
        rtl:false,
        autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      slidesToScroll:-1,
      dots:false,
      variableWidth: true,
      
      responsive: [
       
         {
             breakpoint: 1200,
             settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
             }
           },
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             infinite: true,
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             initialSlide: 1,
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           }
         }
       ]
      };
  return (
    <div className='servicesslider'>
      <div className="seservicesslider__btn">
        <div className="seservicesslider__btn__right" onClick={()=>sliderRef.current.slickNext()}>
        <FaAngleRight />
        </div>
        <div className="seservicesslider__btn__right" onClick={()=>sliderRef.current.slickPrev()}>
        <FaAngleLeft />
        </div>
      </div>
         <Slider ref={sliderRef} {...settings}>
            {datas.map(data=>(

          <div className='servicesslider__item' key={data.id}>
             <div className="servicesslider__item__inside">
                <div className="servicesslider__item__inside__content">
                   <div className="servicesslider__item__inside__content__top">
                      <div className="servicesslider__item__inside__content__top__img">
                         <img src={data.img} alt="" />
                      </div>
                      <div className="servicesslider__item__inside__content__top__text">
                         <div className="servicesslider__item__inside__content__top__text__title">  {data.title} </div>
                         <div className="servicesslider__item__inside__content__top__text__body">لورم ایپسوم متن ساختگی</div>
                      </div>
                   </div>
                   <div className="servicesslider__item__inside__content__body">
                   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی
                   </div>
                   <div className="servicesslider__item__inside__content__bottom">
                      <div className="servicesslider__item__inside__content__bottom__right"> 
                      <p className="servicesslider__item__inside__content__bottom__right__number">{data.number}</p>
                      <p className='servicesslider__item__inside__content__bottom__right__text'>پروژه انجام شده</p>
                     </div>
                      <div className="servicesslider__item__inside__content__bottom__left">
                         <button className='servicesslider__item__inside__content__bottom__left__btn'>اطلاعات بیشتر</button>
                           <AiOutlineArrowLeft className='servicesslider__item__inside__content__bottom__left__btn__icon' />
                      </div>
                   </div>
                </div>
             </div>
          </div>
          ))}
        </Slider>
    </div>
  )
}
