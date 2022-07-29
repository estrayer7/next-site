import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'

const fishing = ({fish, temp}) => {
  return (
    <>
    <div className='flex justify-center'>
    <div className='border-black border-solid border-2 rounded w-[70vw]'>
    <h1 className='text-2xl text-center m-2'>Five Hour Forecast</h1>
      <div className='flex justify-center'>
        {temp.properties.periods.slice(0,5).map((weather) => (
          <div key={weather.number} className='mb-5 mr-5'>
            <p>Temperature: {weather.temperature} F</p>
            <p>Cover: {weather.shortForecast}</p>
            <p>Wind: {weather.windDirection} at {weather.windSpeed}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    <div className='flex gap-5 flex-wrap m-5 justify-center'>
      {fish.map((fishy) => (
        <div key={fishy._id}>
          <div className='relative w-[400px] h-[500px] grow basis-1/4 cursor-pointer'>
            <Link href={`/details/${fishy._id}`}>
              <div>
                <Image src={fishy.imageUrl} alt='pic' layout='fill' objectFit='cover' className='rounded-md'/>
              </div>
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
	const weather = await fetch(`https://api.weather.gov/gridpoints/CLE/10,59/forecast/hourly`);
	const weatherData = await weather.json();
	
  const res = await axios.get(`${BASE_URL}/api/fish`);
  return {
    props: {fish: res.data, temp: weatherData}
  }
}
