import '../styles/mobileStyles/MobileTabView.css'
import {BsPeople, BsBell} from 'react-icons/bs'
import {RiHome7Fill} from 'react-icons/ri'
import {BsSearch} from 'react-icons/bs'
import {BiMessageRounded} from 'react-icons/bi'

function MobileTabView() {
  return (
    <div className='MobileTabView'>
        <RiHome7Fill size={25} />
        <BsSearch size={25} />
        <BsPeople size={25} />
        <BsBell size={25} />
        <BiMessageRounded size={25} />
    </div>
  )
}

export default MobileTabView