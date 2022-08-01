import React from 'react'
import Image from 'next/image'
import self from '../public/images/pic.jpeg'
import bg from '../public/images/Bowling-Green-Falcons-Logo.png'
import compassion from '../public/images/compassion-logo.webp'

const About = () => {
  return (
    <div className='m-5'>
      <h1 className='text-xl'>About Elijah Strayer</h1>
      <div className='flex justify-between mt-5 mb-5'>
        <div className='relative w-[400px] h-[500px]'>
          <Image src={self} alt='picture of Elijah' layout='fill' objectFit='cover' />
        </div>
        <div className='relative w-[500px] h-[500px]'>
          <Image src={bg} alt='BGSU logo' layout='fill' objectFit='contain' />
        </div>
        <div className='relative w-[400px] h-[500px]'>
          <Image src={compassion} alt='Compassion logo' layout='fill' objectFit='contain' />
        </div>
      </div>
      <section>
        <p className='text-lg'>Hello! I am Elijah Strayer and this is my personal website built with NextJS. Currently,
          I am a Senior at Bowling Green State University getting my Bachelors of Science in
          Software Engineering with a general science minor. When it comes to development, web and 
          mobile development are what excite me the most. Also, I am interning at Compassion International 
          as a software engineer for the summer of 2022. In my free time I enjoy teaching myself the guitar 
          or going fishing with my friends.
        </p>
      </section>
    </div>
  )
}

export default About