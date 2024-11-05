import React from 'react'
import AdminPage from './AdminPage'
import Leaderboard from '../components/Leaderboard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import Motto from '../components/Motto'
import Gallery from '../components/Gallery'
const Mainpage = ({API}) => {
  return (
    <div className='bg-gradient-to-b from-blue-400 to-white'>
      {/* <AdminPage /> */}
      <Navbar />
      <Leaderboard API={API} />
      <About />
      <Motto/>
      <Gallery/>
      <Footer/>

    </div>
  )
}

export default Mainpage