import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
const ContactSection = () => {
  return (
    <section className='bg-gray-900 text-white px-7' id='contact'>
        <div className='max-w-7xl flex justify-center items-center gap-6 mx-auto md:flex-row flex-col'>
        <div>
            {/* left text here  */}
            <div className='text-3xl sm:text-4xl md:text-5xl md:text-start text-center'><span>Let's work</span><span className='text-amber-400'> Together</span></div>
            <div className='text-lg text-gray-200 mt-4 md:text-start text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit id repellendus minus consequuntur</div>
        </div>
        <div>
            {/* right text here  */}
            <div className='grid grid-cols-2 gap-7'>
            <input className='input'  type="text" placeholder='Full Name*' />
            <input className='input' type="email" placeholder='Email*' />
            <input className='input' type="phone" placeholder='Phone' />
            <input className='input' type="text" placeholder='Subject' />
            <textarea className='col-span-2 h-[200px] py-3 px-2 text-black' name="message" id="message" placeholder='Message'></textarea>
            </div>
            <button className='btn mt-3 px-7 py-4 flex items-center gap-2 fond-bold text-xl'>Let's Talk <FaArrowRight/></button>
        </div>
        </div>
    </section>
  )
}

export default ContactSection
