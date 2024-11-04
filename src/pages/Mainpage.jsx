import React from 'react'
import AdminPage from './AdminPage'
import Leaderboard from '../components/Leaderboard'
import Navbar from '../components/Navbar'
const Mainpage = ({API}) => {
  return (
    <div className='bg-blue-400'>
      {/* <AdminPage /> */}
      <Navbar />
      <Leaderboard API={API} />
    </div>
  )
}

export default Mainpage