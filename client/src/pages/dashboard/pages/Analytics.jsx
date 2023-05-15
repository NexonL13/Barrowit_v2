import React from 'react'
import Statistics from '../components/analytics/Statistics'
import AssetsChart from '../components/analytics/AssetsChart'
import SocialTraffic from '../components/analytics/SocialTraffic'
import NewUsers from '../components/analytics/NewUsers'

const Analytics = () => {
  return (
    <>
    <Statistics />
    <AssetsChart />
    <div className="flex mt-10 pb-5">
    <SocialTraffic />
    <NewUsers />
    </div>
    </>
  )
}

export default Analytics