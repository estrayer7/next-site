import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'

const fishing = ({fish, forecast}) => {
  return (
    <>
    <div className='flex justify-center'>
    <div className='border-black border-solid border-2 rounded w-[80vw]'>
    <h1 className='text-2xl text-center m-2'>Five Hour Forecast</h1>
      <div className='flex justify-center'>
        {forecast.properties.periods.slice(1,6).map((weather) => (
          <div key={weather.number} className='m-3 p-3 w-1/5'>
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
              <div className='relative w-[400px] h-[500px]'>
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
    props: {fish: res.data, forecast: weatherData}
  }
}
