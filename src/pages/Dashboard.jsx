import React from 'react'
import { fetchData } from '../helper'
import { useLoaderData } from 'react-router-dom';
import Intro from '../components/Intro';

// library imports
import { toast } from 'react-toastify';

// loader
export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName }
}

// action
export async function dashboardAction({request}) {
    const data = await request.formData();

    const formData = Object.fromEntries(data);
    try{
        throw new Error("Uh-oh! problem while creating your account.")
        localStorage.setItem("userName", JSON.
        stringify(formData.userName))
        return toast.success(`Welcome, ${formData.userName}`)
    } catch(e) {
        throw new Error("Uh-oh! problem while creating your account.")
    }
}

export const Dashboard = () => {
  const {userName} = useLoaderData() 

  return (
    <div>
        {userName ? (<p>{userName}</p>) : 
        (<Intro />)}
    </div>
  )
}

export default Dashboard