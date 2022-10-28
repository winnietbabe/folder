import React from "react";
import Header from "../components/Header";
import UserImg from "../components/images.png";
import {AiOutlineHeart } from "react-icons/ai";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="h-[300px] bg-blue-100 rounded-2xl w-[600px] flex m-5 p-4 ">
      <div className=" ">
      <p>Currated playlists</p>
      <h1>R & B</h1>
      <span>Ms. Third ward, your first question – what is your aspiration in life?
      Oh... My aspiration in life... would be... to be happy</span>
      <span>  <AiOutlineHeart/> 35 Likes</span>
     
      </div>
        <div>
          <img src={UserImg} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
