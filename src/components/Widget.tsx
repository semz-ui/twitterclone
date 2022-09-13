import React from 'react'
import '../styles/Widget.css'
import {BsSearch} from 'react-icons/bs'

function Widget() {
  return (
    <div className='widget'>
        <div className='wgt__input'>
          <BsSearch className='wgt__icon'/>
          <input placeholder='Search Twitter' className='wgt_search' />
        </div>
        <div className='wgt1'>
          <div className='wgt2'>
            <h3 className='text'>What's happening</h3>
          </div>
          <div className='wgt3'>
            <p className=''>Mourn of the Queen</p>
            <p className=''>Mourn of the Queen</p>
            <p className=''>Mourn of the Queen</p>
            <p className=''>Mourn of the Queen</p>
            <p className=''>Mourn of the Queen</p>
            <p className=''>Mourn of the Queen</p>
            <p className=''>Mourn of the Queen</p>
          </div>
          <div></div>
        </div>
        <div className='wgt4'>
          <div className='wgt2'>
            <h3 className='text'>What's happening</h3>
          </div>
          <div className='wgt3'>
            <p className=''>Mourn of the Queen</p>
            <p className=''>Mourn of the Queen</p>
            <p className=''>Mourn of the Queen</p>
            <p className=''>Mourn of the Queen</p>
            <p className=''>Mourn of the Queen</p>
            <p className=''>Mourn of the Queen</p>
            <p className=''>Mourn of the Queen</p>
          </div>
          <div></div>
        </div>
    </div>
  )
}

export default Widget