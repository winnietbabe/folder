import React from "react";
import Header from "../components/Header";
import UserImg from "../components/images.png";
import { AiFillHeart } from "react-icons/ai";
import Charts from "../components/Charts";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="flex justify-between">
        <div className="h-[372px] bg-blue-400 rounded-3xl w-[700px] flex m-5 p-4 justify-evenly ">
          <div className="m-6 space-y-20 ">
            <p className="mb-8  text-gray-200">Currated playlists</p>
            <h1 className="text-4xl font-bold text-white">R & B hits</h1>
            <span className="text-gray-200 text-sm ">
              Ms. Third ward, your first question – what is your aspiration in
              life? Oh... My aspiration in life... would be... to be happy
            </span>
            <h5 className="mt-[2em] flex items-center text-gray-100">
              {" "}
              <AiFillHeart /> 35 Likes
            </h5>
          </div>
          <div className="w-[60em] ">
            <img src={UserImg} className="h-[20em]" />
          </div>
        </div>
        <div>
          <Charts />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
