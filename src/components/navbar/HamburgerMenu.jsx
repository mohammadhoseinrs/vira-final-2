import React from 'react'
import {GrFormClose} from 'react-icons/gr'
import { motion ,AnimatePresence  } from "framer-motion"

export default function HamburgerMenu({setOpenMenu}) {
  return (
      <AnimatePresence>
    <div
    className='hamburgermenu' onClick={()=>setOpenMenu(false)}>
        <motion.div
        initial={{opacity:0,x:1000}}
        animate={{opacity:1,x:0}}
        transition={{duration:0.9,ease:'easeIn'}}
        exit={{x:1000}}
        className="hamburgermenu__item" onClick={(event)=>event.stopPropagation()}>
            <div className="close__btn" >
                <GrFormClose onClick={()=>setOpenMenu(false)} /> 
            </div>

        <ul className='hamburgermenu__item__items'>
        <li>خانه</li>
        <li>فروشگاه</li>
        <li>درباره ما</li>
        <li>تماس با ما</li>
      </ul>
        </motion.div>
    </div>
    </AnimatePresence>
  )
}
