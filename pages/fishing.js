import React from 'react'
import Image from 'next/image'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'

const fishing = ({fish}) => {
  return (
    <>
    <div>{fish}</div>
    </>
  )
}

export const getServerSideProps = async () => {
  const fish = await axios.get(`${BASE_URL}/api/fish`);
  console.log(fish)
  return {
    props: {fish}
  }
}

export default fishing