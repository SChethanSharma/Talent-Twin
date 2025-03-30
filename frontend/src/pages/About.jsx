import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>we believe that learning and growth should be a collaborative experience. Our platform is designed to connect individuals from diverse backgrounds, enabling them to exchange skills, share expertise, and build meaningful connections. Whether you’re looking to enhance your knowledge, teach others, or collaborate on new opportunities, our peer-to-peer skill-sharing network makes it easy, efficient, and rewarding.</p>
          <p>Our mission is to break down barriers to learning by creating a thriving community where knowledge flows freely. We empower individuals to learn from real-world experts, gain hands-on experience, and contribute their own skills to help others. By fostering an ecosystem of continuous learning and collaboration, we aim to make skill development more accessible, impactful, and engaging for everyone.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>To create a dynamic and collaborative platform where individuals can seamlessly exchange skills, share knowledge, and empower each other to grow personally and professionally. By fostering a community-driven learning ecosystem, we aim to make skill development more accessible, efficient, and mutually beneficial, ultimately shaping a world where expertise is shared freely and opportunities are created through meaningful connections.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Seamlessly connect with peers to exchange skills and knowledge without the hassle of long searches. Our streamlined platform makes it easy to find the right expertise and start learning instantly.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Gain access to a diverse and trusted network of professionals and enthusiasts across various fields. Whether you're looking to learn a new skill or share your own expertise, everything you need is right at your fingertips.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Get tailored skill recommendations and learning opportunities based on your interests and expertise. Our intelligent matching system ensures you connect with the right people to enhance your growth.</p>
        </div>
      </div>

    </div>
  )
}

export default About
