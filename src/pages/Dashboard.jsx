import React from 'react'
import { fetchData } from '../helper'

// loader
export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName }
}

export const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}