import React from 'react'
import UserImg from "../Rimages/Rectangle 14.png";
import User2Img from "../Rimages/Rectangle 15.png";
import User3Img from "../Rimages/Rectangle 16.png";
import User4Img from "../Rimages/Rectangle 17.png";
import User5Img from "../Rimages/Rectangle 18.png";
import User6Img from "../Rimages/Rectangle 19.png";
import User7Img from "../Rimages/Rectangle 20.png";
// import User8Img from "../Rimages/Rectangle 21.png";
// import User9Img from "../Rimages/Rectangle 26.png"
// import User10Img from "../Rimages/Rectangle 27.png"




function Release() {
  return (
    <div>
        <h1 className='text-white font-extrabold text-xl'>New Releases</h1>
        <div className='flex justify-evenly items-center'>
         
          <img src={UserImg} className="rounded-2xl "/>
          <img src={User2Img} className="rounded-2xl"/>
          <img src={User3Img} className="rounded-2xl"/>
          <img src={User4Img} className="rounded-2xl"/>
          <img src={User5Img} className="rounded-2xl"/>
          <img src={User6Img} className="rounded-2xl"/>
          <img src={User7Img} className="rounded-2xl"/>
          {/* <img src={User9Img} className="rounded-2xl"/> */}
          {/* <img src={User10Img} className="rounded-2xl  ml-6"/> */}

        </div>
    </div>
  )
}

export default Release