import React from "react";
import image from "../assets/json.webp";
import avatar from "../assets/avatar.jpg";

export default function Home({start}) {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full md:w-2/3 h-4/5 mx-6 my-2 mb-5 md:mx-auto items-center" >
      <img src={image} alt="json-pic" className="h-full md:w-3/6 cursor-move" />

      <div className="bg-white dark:bg-gray-800 md:w-3/6 h-auto shadow-lg mx-6 md:mx-auto rounded-xl p-4">
        <p className="text-gray-600 md:text-lg dark:text-white">
          <span className="text-lg font-bold text-indigo-500">“</span>
            It is sometimes a big hassle having to get data that you can use as a developer to test your application, especially during developement.
            I'm also a victim, I'm a dedicated Frontend developer who loves building amazing UI to sooth users' experience before advancing my skills into a Fullstack software developer, my designs are still sloggish, forgive me, I'm getting better!
            <br/><br/>
            This application is built majorly to aid your developement process and also for individuals who will like to convert their files into an EXCEL or a JSON data.


          <span className="text-lg font-bold text-indigo-500">”</span>
        </p>
        <div className="flex items-center mt-4">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={avatar}
              className="mx-auto object-cover rounded-full h-14 w-14 "
            />
          </a>
          <div className="flex flex-col justify-between ml-2">
            <span className="text-base font-semibold text-indigo-500">
              Ibrahim Yemi.
            </span>
            <span className="flex items-center text-sm dark:text-gray-400">
              Fullstack Software Developer.
            </span>
            <button onClick={start} className="bg-indigo-700 w-3/5 rounded-sm my-1 text-white text-center hover:bg-indigo-800" >start building</button>
          </div>
        </div>
      </div>
    </div>
  );
}