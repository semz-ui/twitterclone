import React from 'react'
import '../styles/Sidebar.css'
import {BsTwitter, BsHash, BsPeople, BsBell, BsBookmark, BsPerson} from 'react-icons/bs'
import {RiHome7Fill} from 'react-icons/ri'
import {CgMoreO} from 'react-icons/cg'
import {BiMessageRounded} from 'react-icons/bi'
import {GiFeather} from 'react-icons/gi'

function Sidebar() {
  return (
    <div className='sidebar'>
      <BsTwitter color='white' size={30} />
      <div className='icon_sidebar'>
        <RiHome7Fill color='white' size={30} />
        <span className='text_sidebar'>Home</span>
      </div>
      <div className='icon_sidebar'>
      <BsHash color='white' size={30} />
        <span className='text_sidebar'>Explore</span>
      </div>
      <div className='icon_sidebar'>
      <BsPeople color='white' size={25} />
        <span className='text_sidebar'>Communities</span>
      </div>
      <div className='icon_sidebar'>
      <BsBell color='black' size={25} />
        <span className='text_sidebar'>Notifications</span>
      </div>
      <div className='icon_sidebar'>
      <BiMessageRounded color='black' size={25} />
        <span className='text_sidebar'>Messages</span>
      </div>
      <div className='icon_sidebar'>
      <BsBookmark color='black' size={25} />
        <span className='text_sidebar'>Bookmarks</span>
      </div> 
      <div className='icon_sidebar'>
      <BsPerson color='black' size={25} />
        <span className='text_sidebar'>Profile</span>
      </div>
      <div className='icon_sidebar'>
      <CgMoreO color='black' size={25} />
        <span className='text_sidebar'>More</span>
      </div>
      <div className='icon_button'>
        <button className='sidebar__button'>Tweet</button>
      </div>
      <div className=''>
        <GiFeather color='blue' className='icon_button1' size={30} />
      </div>
      {/* <div className='vl'></div> */}
    </div>
  )
}

export default Sidebar