import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'

const Detail = ({fish}) => {
  return (
    <div>details</div>
  )
}

export default Detail

export const getServerSideProps = async (context) => {
  const {id} = context.query
  console.log(context.query)
  const res = await axios.get(`${BASE_URL}/api/fish/${id}`);
  return {
    props: {fish: res.data}
  }
}