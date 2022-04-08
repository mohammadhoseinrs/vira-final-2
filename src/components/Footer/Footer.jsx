import React from 'react'
import './Footer.css'
import {BsWhatsapp , BsInstagram , BsTwitter} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
export default function Footer() {
    const icons=[
        <FaTelegramPlane />,
        <BsInstagram />,
        <BsTwitter />,
        <BsWhatsapp />
    ]
  return (
    <div className='footer'>
        <div className="footer__container">
            <div className="footer__right">
                <div className="footer__right__title">کافه ویرا</div>
                <p className="footer__right__text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                </p>
                <p className="footer__right__text__2">کافه ویرا در شبکه های اجتماعی</p>
                <div className="social__icon">
                {icons.map((icon,index)=>(
                    <div key={index}>{icon}</div>
                ))}
                </div>
                <div className="privacy">
                    تمامی حقوق محفوظ و متعلق به کیان فناوران ویرا است.
                </div>
            </div>
            <div className="footer__left">
                <div className="footer__left__title">پل های ارتباطی</div>
                <div className="address">آدرس : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</div>
                <div className="footer__left__bottom">
                    <div className="footer__left__bottom__item">
                        <div className="footer__left__bottom__item__title">مدیریت بخش برنامه نویسی</div>
                        <p>۶۸۴۵ ۴۸۵ ۰۹۱۲</p>
                    </div>
                    <div className="footer__left__bottom__item">
                        <div className="footer__left__bottom__item__title">مدیریت بخش برنامه نویسی</div>
                        <p>۶۸۴۵ ۴۸۵ ۰۹۱۲</p>
                    </div>
                </div>

                <div className="footer__left__bottom">
                    <div className="footer__left__bottom__item">
                        <div className="footer__left__bottom__item__title">مدیریت بخش برنامه نویسی</div>
                        <p>۶۸۴۵ ۴۸۵ ۰۹۱۲</p>
                    </div>
                    <div className="footer__left__bottom__item">
                        <div className="footer__left__bottom__item__title">مدیریت بخش برنامه نویسی</div>
                        <p>۶۸۴۵ ۴۸۵ ۰۹۱۲</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
