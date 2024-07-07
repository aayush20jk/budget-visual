import React from 'react'
import { fetchData } from '../helper'
import { useLoaderData , Outlet} from 'react-router-dom';

// assets
import wave from "../assets/wave.svg"

// components
import Nav from '../components/Nav';

// loader
export function mainLoader() {
    const userName = fetchData("userName");
    return { userName }
}

const Main = () => {
  const {userName} = useLoaderData() 

  return (
    <div className='layout'>
        <Nav />
        <main>
            <Outlet />
        </main>
        <img src={wave} alt="" />
    </div>
  )
}
export default Main