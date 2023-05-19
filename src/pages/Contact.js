import React, { useContext } from 'react';
// import Image
import { WomanContact } from "../img"
// import motion
import { motion } from "framer-motion"
// import transition
import { transition1 } from "../transitions"
// import CursorProvider
import { CursorContext } from '../context/CursorContext';

const Contact = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return( 
    <motion.section 
      initial={{ opacity:0, y:'100%' }}
      animate={{ opacity:1, y: 0 }}
      exit={{ opacity:0, y: "100%" }}
      transition={transition1}
      className='section bg-white'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
          {/* Bg */}
          {/*======== Kiri [text & form] ========*/}
          <motion.div 
            initial={{ opacity:0, y:'100%' }}
            animate={{ opacity:1, y: 0 }}
            exit={{ opacity:0, y: "100%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          className='lg:flex-1 lg:pt-32 px-4 z-10'>
            {/*-- Text --*/}
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12'>I would love to get suggestions from you23.</p>
            {/*-- form --*/}
            <form className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>
                <input type='text' placeholder='Your name' className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'></input>
                <input type='text' placeholder='Your e-mail address' className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'></input>
              </div>
              <input type='text' placeholder='Your message' className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'></input>

              {/*-- Button --*/}
              <button className='btn mb-[30px] mx-auto lg:mx-0  self-start'>Send it</button>
            </form>
          </motion.div>

          {/*======== Kanan [Image] ========*/}
          <motion.div 
            initial={{ opacity:0, y:'100%' }}
            animate={{ opacity:1, y: 0 }}
            exit={{ opacity:0, y: "100%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='lg:flex-1'>
            <img src={WomanContact} alt='womanContact'/>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
};

export default Contact;
