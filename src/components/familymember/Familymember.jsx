import React,  { Component } from 'react'
import './Familymember.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GiDatabase } from 'react-icons/gi';
import FmSlide from './FmSlide';
export default class Familymember extends Component {
    render(){
        this.state={
            datas:[
                {id:1,img:'https://images.pexels.com/photos/5804904/pexels-photo-5804904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',name:'محمدحسین رستمی' , job:'برنامه نویس وب'},
                {id:2,img:'https://images.pexels.com/photos/6246658/pexels-photo-6246658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',name:' سالار عظیمی' , job:'برنامه نویس اندروید'},
                {id:3,img:'https://images.pexels.com/photos/5788999/pexels-photo-5788999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',name:'سوسن ابراهیمی' , job:'برنامه نویس فلاتر'},
                {id:4,img:'https://images.pexels.com/photos/8441849/pexels-photo-8441849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',name:'نوید مرشد' , job:'برنامه نویس بلاک چین'},
                {id:5,img:'https://images.pexels.com/photos/8729188/pexels-photo-8729188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',name:'عرفان سالاری' , job:'برنامه نویس دیتا'},
                {id:6,img:'https://images.pexels.com/photos/5319323/pexels-photo-5319323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',name:'ابراهیم حسنی' , job:'برنامه نویس بک اند'},
                {id:7,img:'https://images.pexels.com/photos/5469190/pexels-photo-5469190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',name:'کامبیز دیرباز' , job:'برنامه نویس فرانت'},
            ]
        }
    const settings = {
      infinite: true,
      slidesToShow: 3,
      speed: 2000,
      autoplaySpeed: 2000,
      centerPadding: "100px",
      autoplay: true,
      variableWidth: true,
      responsive: [
        {
            breakpoint: 1500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
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
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
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
    <div className='familymember'>
        <div className="familymember__container">
            <div className="familymember__content">
                <p className="familymember__content__title">
                    اعضای خانواده کافه ویرا
                </p>
                <p className='familymember__content__text'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است           
           </p>
            </div>
            <div className='familymember__slider' dir='rtl'>
        <Slider {...settings}>
        {this.state.datas.map(data=>(
                <FmSlide data={data}/>
            ))}            
        </Slider>
      </div>
        </div>
    </div>
  )
}
}
