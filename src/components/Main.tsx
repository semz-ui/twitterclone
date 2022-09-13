import React from 'react'
import '../styles/Main.css'
import {BsStars, BsImage, BsFillEmojiSmileFill, BsChatText } from 'react-icons/bs'
import {AiOutlineFileGif, AiOutlineSchedule, AiOutlineRetweet} from 'react-icons/ai'
import {GiSelfLove} from 'react-icons/gi'
import {TiWorld} from 'react-icons/ti'
import {FaPollH, FaRegComment} from 'react-icons/fa'
import {FiShare} from 'react-icons/fi'
import {MdOutlineLocationOn} from 'react-icons/md'

function Main() {
  const usersTweets = [
    {
      name: "Olotu Michael",
      id: 1,
      userName: "Semz",
      text: "What are you saying",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDBtOqyPCIxD5YOGQ5ZM8663I63KFooDWg_I0poHmvUx_7f7SGZ-HbBarJ1UWppPPiWM&usqp=CAU"
    },
    {
      name: "Mutai Ridi",
      id:2,
      userName: "melan",
      text: "Men are scum",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV31kWc3m4AgUDbfIMGkETqipf8iFG_D-7nQ&usqp=CAU"
    },
    {
      name: "Tobi Kunle",
      id:3,
      userName: "tunde",
      text: "If she have yansh, she can take my soul",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQJMkbKV18bvVdFgtsmaOarnryH2QtUoxc923zUHdoCIC-3i2RFpb8vkeoHhEIQBX1LU&usqp=CAU"
    },
    {
      name: "Simi Michael",
      id:4,
      userName: "riri",
      text: "I hate today",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQz-LUy3gsadYbicrOYJs39c4q8Di2lkkbQ&usqp=CAU"
    },
    {
      name: "Olotu Michael",
      id:5,
      userName: "Semz",
      text: "What are you saying",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDBtOqyPCIxD5YOGQ5ZM8663I63KFooDWg_I0poHmvUx_7f7SGZ-HbBarJ1UWppPPiWM&usqp=CAU"
    },
    {
      name: "Mutai Ridi",
      id:6,
      userName: "melan",
      text: "Men are scum",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV31kWc3m4AgUDbfIMGkETqipf8iFG_D-7nQ&usqp=CAU"
    },
    {
      name: "Tobi Kunle",
      id:7,
      userName: "tunde",
      text: "If she have yansh, she can take my soul",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQJMkbKV18bvVdFgtsmaOarnryH2QtUoxc923zUHdoCIC-3i2RFpb8vkeoHhEIQBX1LU&usqp=CAU"
    },
    {
      name: "Simi Michael",
      id:8,
      userName: "riri",
      text: "I hate today",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQz-LUy3gsadYbicrOYJs39c4q8Di2lkkbQ&usqp=CAU"
    }
  ]
  return (
    <div className='main'>
        <div className='vl'></div>
        <div style={ { width: "100%" } }>
          <div className='main__content'>
          <div className='head'>
            <div className='main__header__home'>
              <h4>Home</h4>
              <BsStars size={20} />
            </div>
            <div className='post__main'>
                <div>
                  <img src='https://static.remove.bg/remove-bg-web/37843dee2531e43723b012aa78be4b91cc211fef/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg' className='main__profileimg' />
                </div>
                <div className='input__div'>
                  <div className='input_div1'>
                    <input placeholder='What is happening' className="main__input" />
                  </div>
                  {/* <div className='main__world'>
                    <TiWorld />
                    <p style={ {marginLeft: '10px', color: 'rgb(29, 155, 240)'} }>Everyone can reply</p>
                  </div> */}
                  <div className='wl'></div>
                  <div className='main__gif'>
                    <BsImage size={15} color='blue' />
                    <AiOutlineFileGif />
                    <FaPollH />
                    <BsFillEmojiSmileFill />
                    <AiOutlineSchedule color='white' />
                    <MdOutlineLocationOn />
                  </div>
                </div>
            </div>
          </div>
        </div>
          <div className='wl'></div>
            {
              usersTweets.map((user) => (
                <div key={user.id}>
                  <div className='main__content'>
              <div className='post__main1'>
                <div>
                  <img src={user.img} className='main__profileimg' />
                </div>
                <div className='input__div'>
                  <div className='input__div1'>
                  <span className='user_name'>{user.name}</span><span className='username'>{user.userName} . 13min</span> 
                </div>
                <div>
                  <p>{user.text}</p>
                </div>
                <div className='main_body_icon'>
                  <div className='main_body_icon1'>
                  <FaRegComment color='grey' size={20} />
                  </div>
                  <div className='main_body_icon1'>
                  <AiOutlineRetweet color='grey' size={20} className='main_body_icon1' />
                  </div>
                  <div className='main_body_icon1'>
                  <GiSelfLove color='grey' size={20} className='main_body_icon1' />
                  </div>
                  <div className='main_body_icon1'>
                  <FiShare color='grey' size={20} className='main_body_icon1' />
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className='wl'></div>
                </div>
              ))
            }
        </div>
        <div className='vl'></div>
    </div>
  )
}

export default Main