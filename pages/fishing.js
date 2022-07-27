import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
// import { client } from '../utils/client'
// import imageUrlBuilder from '@sanity/image-url'

// const builder = imageUrlBuilder(client)
// function urlFor(source) {
//   return builder.image(source)
// }

const fishing = ({fish}) => {
  return (
    <>
    <div className='flex gap-5 flex-wrap bg-gray-300'>
      {fish.map((temp) => (
        <div key={fish._id}>
          {/* <p>{temp.bait}</p>
          <p>{temp.location}</p>
          <p>{temp.date}</p> */}
          <div className='relative w-[400px] h-[500px] grow basis-1/4'>
            <Link href={`/details/${temp._id}`}>
              <Image src={temp.imageUrl} alt='pic' layout='fill' objectFit='cover' className='rounded-md'/>
            </Link>
          </div>
        </div>
      )
      )} 
    </div>
    </>
  )
}

export default fishing

export const getServerSideProps = async (context) => {
  const res = await axios.get(`${BASE_URL}/api/fish`);
  return {
    props: {fish: res.data}
  }
}