import React from 'react'
import '../styles/Home.css'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import Widget from '../components/Widget'

function Home() {
  return (
    <div className='home'>
        <div className='home1'>
        <div className='sb'>
            <Sidebar />
        </div>
        <div className='mn'>
            <Main />
        </div>
        <div className='wdgt'>
            <Widget />
        </div>
        </div>
    </div>
  )
}

export default Home