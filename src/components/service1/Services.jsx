import React from 'react'
import './Services.css'
import image5 from './services.svg'
import image6 from './../../Assets/images/image6.png'
import ServicesSlider from './ServicesSlider'
export default class Services extends React.Component {
  render(){
  return (
    <div className='service'>
      <div className="service__top">
          <div className="service__top__right">
              <img src={image6} alt="" />
          </div>
          <div className="service__top__left">
             <div className="service__top__left__title">
                خدماتی که ارایه می دهیم
             </div>
             <div className="service__top__left__subtitle">
                برای شما که لایق بهترین هستید
             </div>
             <p className="service__top__left__content">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی
             </p>
        </div>  
      </div>
      <div className="service__bottom">
        <ServicesSlider />
      </div>
    </div>
  )
}
}
