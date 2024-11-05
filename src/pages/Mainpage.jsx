import React from 'react'
import AdminPage from './AdminPage'
import Leaderboard from '../components/Leaderboard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
const Mainpage = ({API}) => {
  return (
    <div className='bg-blue-400'>
      {/* <AdminPage /> */}
      <Navbar />
      <Leaderboard API={API} />
      <About/>
      <Footer/>

    </div>
  )
}

export default Mainpage