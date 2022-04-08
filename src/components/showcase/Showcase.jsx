import React, { useEffect, useRef } from 'react'
import showcaseimage from './../../Assets/images/image1.png'
import {BsArrowLeft} from 'react-icons/bs'
import {IoIosArrowBack , IoIosArrowForward} from 'react-icons/io'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";
import './Showcase.css'

export default function Showcase() {
    const sliderRef=useRef(null)
    useEffect(()=>{
    console.log(sliderRef.current)
    },[])
    const settings = {
        className: "",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
      };
  return (
    <section className='showcase'>
        <div className="slider__btn">
            <div className="next__btn  " onClick={()=>sliderRef.current.slickNext()}>
                <IoIosArrowForward size={20} />
            </div>
            <div className="previous__btn " onClick={()=>sliderRef.current.slickPrev()}>
                <IoIosArrowBack size={20} />
            </div>
        </div>

        <Slider ref={sliderRef} {...settings} className='slider'>

        <section className="showcase__container sh1">
            <section className="showcase__container__right">
                <img src={showcaseimage} alt="" />
            </section>
            <section className="showcase__container__left">
            <div className="showcase__container__left__content">
                <div className="showcase__container__left__content__top">
                    <p>خدمات ما</p>
                </div>
                <div className="showcase__container__left__content__middle">طراحی اپلیکیشن</div>
                <div className="showcase__container__left__content__bottom">
                    <div>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از</div>
                    <div> صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها</div>
                </div>
                <div className="showcase__container__left__content__bottom__content">
                    <div className="showcase__container__left__content__bottom__content__right">
                    <p>                        مشاهده نمونه کارها</p>
                        <BsArrowLeft />
                    </div>
                    <span>درخواست مشاوره</span>
                </div>
            </div>
            </section>
        </section>



        <div className="showcase__container sh1">
            <div className="showcase__container__right">
                <img src={showcaseimage} alt="" />
            </div>
            <div className="showcase__container__left">
            <div className="showcase__container__left__content">
                <div className="showcase__container__left__content__top">
                    <p>خدمات </p>
                </div>
                <div className="showcase__container__left__content__middle">طراحی اپلیکیشن</div>
                <div className="showcase__container__left__content__bottom">
                    <div>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از</div>
                    <div> صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها</div>
                </div>
                <div className="showcase__container__left__content__bottom__content">
                    <div className="showcase__container__left__content__bottom__content__right">
                    <p>                        مشاهده نمونه کارها</p>
                        <BsArrowLeft />
                    </div>
                    <span>درخواست مشاوره</span>
                </div>
            </div>
            </div>
        </div>

        <div className="showcase__container sh1">
            <div className="showcase__container__right">
                <img src={showcaseimage} alt="" />
            </div>
            <div className="showcase__container__left">
            <div className="showcase__container__left__content">
                <div className="showcase__container__left__content__top">
                    <p>خدمات موجود </p>
                </div>
                <div className="showcase__container__left__content__middle">طراحی اپلیکیشن</div>
                <div className="showcase__container__left__content__bottom">
                    <div>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از</div>
                    <div> صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها</div>
                </div>
                <div className="showcase__container__left__content__bottom__content">
                    <div className="showcase__container__left__content__bottom__content__right">
                    <p>                        مشاهده نمونه کارها</p>
                        <BsArrowLeft />
                    </div>
                    <span>درخواست مشاوره</span>
                </div>
            </div>
            
            </div>
            
        </div>
        </Slider>
    </section>
  )
}