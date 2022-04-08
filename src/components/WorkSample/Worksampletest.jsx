import React from 'react'
import './Worksampletest.css'
import image7 from './../../Assets/images/image7.png'
import {IoIosArrowDown} from 'react-icons/io'
import curve from './curve.svg'
export default function Worksampletest() {
  return (
    <div className='test'>
        <div className="test__container">
            <div className="test__container__image">
                <img src={curve} alt="" />
                <IoIosArrowDown size={30} color='#6523F7' className='test__container__image__icon' />
            </div>
            <div className="test__container__background">
                <div className="test__container__background__content">
                    <div className="test__container__background__content__title">آخرین نمونه کارهای ما</div>
                    <div className="test__container__background__content__subtitle">دسته بندی  موردنظر  خودتون  رو  انتخاب  کنید</div>
                </div>
            </div>
        </div>
    </div>
  )
}
