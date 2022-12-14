import React from "react"
import UserImg from "./image2.jpg";
import User2Img from "./images3.jpeg";
import User3Img from "../Rimages/Lead-image.png";
import {AiOutlineHeart } from "react-icons/ai";


function Charts() {

  return (
    <div className="ml-20">
        <h1 className="text-white font-bold mt-[-1em]">Top Chart</h1>
        <div className=" mt-4 flex justify-between bg-black p-[1em] w-[28em] rounded-2xl">
          <div  className="flex">
            <img src={UserImg} className="max-w-[5em] rounded-md"/>
            <div className=" ml-2 text-gray-200">
            <h2>Golden age of 20s</h2>
            <p className="text-gray-600">Chris Brown</p>
            <span>3:12</span></div>
          </div>
          <div className="h-[3em] w-[3em] rounded-[50%]  border-gray-700 border-[2px]  cursor-pointer hover:text-yellow-500">
            <AiOutlineHeart className="text-yellow-400 m-3.5"/>
          </div>
        </div>

        <div className=" mt-4 flex justify-between bg-black p-[1em] w-[28em] rounded-2xl">
          <div  className="flex">
            <img src={User2Img} className="max-w-[5em] rounded-md"/>
            <div className=" ml-2 text-gray-200">
            <h2>Golden age of 20s</h2>
            <p className="text-gray-600">Chris Brown</p>
            <span>3:12</span></div>
          </div>
          <div className="h-[3em] w-[3em] rounded-[50%]  border-gray-700 border-[2px]  cursor-pointer hover:text-yellow-500">
            <AiOutlineHeart className="text-yellow-400 m-3.5"/>
          </div>
        </div>

        <div className=" mt-4 flex justify-between bg-black p-[1em] w-[28em] rounded-2xl">
          <div  className="flex">
            <img src={User3Img} className="max-w-[5em] rounded-md"/>
            <div className=" ml-2 text-gray-200">
            <h2>Tomorrow Tunes</h2>
            <p className="text-gray-600">Obidatti</p>
            <span>3:12</span></div>
          </div>
          <div className="h-[3em] w-[3em] rounded-[50%]  border-gray-700 border-[2px]  cursor-pointer hover:text-yellow-500">
            <AiOutlineHeart className="text-yellow-400 m-3.5"/>
          </div>
        </div>
    </div>
  )
}

export default Charts