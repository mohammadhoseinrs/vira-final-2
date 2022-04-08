import React from 'react'
import './Customer.css'
import image3 from './../../Assets/images/image3.png'

export default function CustomerMiddle() {
  return (
    
    <div className="customer__middle">
    <div className="customer__middle__image">
        <img src={image3} alt="customer-image" />
    </div>
    <div className="customer__middle__left">
        <div className="customer__middle__left__top">
            <div className="customer__middle__left__top__title">
                <p>قدم اول</p>
                <div>شناخت نیاز مشتری</div>
            </div>
            <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون</span>
        </div>
        <div className="customer__middle__left__bottom">
            <div className="customer__middle__left__bootom__title">
                <div className="customer__middle__left__bottom__1">
                    <div className="customer__middle__left__bottom__1__title">
                        <p>01</p>
                        <div>طراحی سایت</div>
                    </div>
                   <div className="customer__middle__left__bottom__1__text">
                   <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون</p>
                   </div>
                </div>

                <div className="customer__middle__left__bottom__1">
                    <div className="customer__middle__left__bottom__1__title">
                        <p>02</p>
                        <div> تولید محتوا</div>
                    </div>
                   <div className="customer__middle__left__bottom__1__text">
                   <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون</p>
                   </div>
                </div>
            </div>



            <div className="customer__middle__left__bootom__title margin-top">
                <div className="customer__middle__left__bottom__1">
                    <div className="customer__middle__left__bottom__1__title">
                        <p>03</p>
                        <div>سیوی سایت</div>
                    </div>
                   <div className="customer__middle__left__bottom__1__text">
                   <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون</p>
                   </div>
                </div>

                <div className="customer__middle__left__bottom__1">
                    <div className="customer__middle__left__bottom__1__title">
                        <p>04</p>
                        <div>  شناخت نیاز مشتری</div>
                    </div>
                   <div className="customer__middle__left__bottom__1__text">
                   <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون</p>
                   </div>
                </div>

            </div>
        </div>
    </div>
</div>
  )
}
