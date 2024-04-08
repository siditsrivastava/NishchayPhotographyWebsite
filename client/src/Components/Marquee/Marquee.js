import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
  return (
    <div className='marquee w-full py-20 bg-white rounded-t-lg text-black'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap uppercase'>
        <motion.h1 
          initial={{ x: "0" }} // Start from the right
          animate={{ x: "-100%" }} // Move to the left
          transition={{ ease: "linear", repeat: Infinity, duration:60 }} 
          className='text-[5rem] leading-none pt-10 -mt-15 pb-7 flex font-playfair font-semibold'
          style={{ fontFamily: '"Playfair Display", serif', fontWeight: 900, fontStyle: 'normal' }}
        >
          The Nishchay Srivastava Photography - The Nishchay Srivastava Photography -  The Nishchay Srivastava Photography -  The Nishchay Srivastava Photography - The Nishchay Srivastava Photography - The Nishchay Srivastava Photography -  The Nishchay Srivastava Photography -  The Nishchay Srivastava Photography
        </motion.h1>
        
      </div>
    </div>
  );
};

export default Marquee;
