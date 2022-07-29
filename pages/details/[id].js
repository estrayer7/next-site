import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Detail = ({fish}) => {
  const router = useRouter()
  return (
    <div>
      <button onClick={() => router.push('/fishing')}>
        <BsFillArrowLeftCircleFill className='text-black text-2xl ml-5'/>
      </button>
      <div className='flex justify-center'>
        <div>
          <div className='relative w-[400px] h-[500px] mb-3'>
            <Image src={fish.imageUrl} alt='pic' layout='fill' objectFit='cover' className='rounded-md'/>
          </div>
          <p>Bait used: {fish.bait}</p>
          <p>Date caught: {fish.date}</p>
          <p>Location caught: {fish.location}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail

export const getServerSideProps = async (context) => {
  const {id} = context.query
  const res = await axios.get(`${BASE_URL}/api/fish/${id}`);
  return {
    props: {fish: res.data}
  }
}