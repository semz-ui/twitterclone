import React from 'react'
import { FaTimes } from 'react-icons/fa'
import '../styles/mobileStyles/MobileSideBar.css'

function MobileSideBar() {
  const img = "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="

  return (
    <div className='MobileSideBar'>
      <div className='msb1'>
        <div className='acc__info'>
          <div>Account Info</div>
          <div><FaTimes /></div>
        </div>
        <div className='avatar__img'>
          <div>
            <img src={img} className="mbHeaderImg" />
          </div>
          <div>+</div>
        </div>
        <div>
          <p>Mike</p>
          <p className='user_text'>@semz01</p>
        </div>
      </div>
      <div className='msb2'></div>
    </div>
  )
}

export default MobileSideBar