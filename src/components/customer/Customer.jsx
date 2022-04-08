import React from 'react'
import './Customer.css'
import CustomerMiddle from './CustomerMiddle'
import CustomerTop from './CustomerTop'
import CustomerBottom from './CustomerBottom'


export default function Customer() {
  return (
    <div className='customer'>
        <div className="customer__container">
            <CustomerTop />
            <CustomerMiddle />
            <CustomerBottom />
        </div>
    </div>
  )
}
