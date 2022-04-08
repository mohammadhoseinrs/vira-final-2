import React from 'react'
import {BsThreeDots} from 'react-icons/bs'

export default function FmSlide({data}) {
  return (
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
  )
}
