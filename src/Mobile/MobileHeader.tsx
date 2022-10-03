import { useState } from 'react';
import '../styles/mobileStyles/MobileHeader.css'
import MobileSideBar from './MobileSideBar';

function MobileHeader() {
    const [sideOpen, setSideOpen] = useState(false)


    const img = "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="

    const sideBar = () => {
    setSideOpen(!sideOpen)
  }
  console.log(sideOpen)
  return (
    <div className='MobileHeader'>
        <div className='mobImg' onClick={sideBar}>
            {
                sideOpen ? <><MobileSideBar /></>: <></>
            }
            <img src={img} className="mbHeaderImg" />
        </div>
        <div className='mobHome'>
            <div className='homemob'>
                <p>Home</p>
            </div>
            <div>
                <p>*</p>
            </div>
        </div>
    </div>
  )
}

export default MobileHeader