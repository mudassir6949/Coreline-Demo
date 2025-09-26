/* eslint-disable @next/next/no-img-element */
import React from "react";

function Page() {
  return (
    <>
      <div className="text-xl py-16 bg-[url(/bgimg3.webs.webp)] bg-no-repeat h-[400px] bg-cover max-w-[2000px] text-white text-center ">
        <h1 className="text-4xl"> Coreline</h1>

        <p className="text-2xl text-center py-3 ">
          Powering the future of gaming and IT. Explore immersive worlds,
          <br />
          cutting-edge technology, and innovative solutions—all in one place.
        </p>
      </div>

      <div className=" text-center *:bg-gray-600 ">
        <h1 className=" text-4xl">
          Our <span className="text-red-500">Services</span>
        </h1>
        <p className="text-1xl py-3 text-white">
          Explore our range of professional services, designed to empower your
          <br />
          business with innovative technology solutions.
        </p>
      </div>
      <div className="grid grid-cols-3 bg-gray-600 hover:box-decoration-clone ">
        <div className="text-xl px-10 w-[200px] py-16 bg-[url(/bg-img-game.webp)] bg-no-repeat hover:opacity-80 cursor-pointer">
          <span className="text-white">Game Development</span>
        </div>
        <div className="text-xl w-[200px] h-[200px] bg-[url(/bg-img-mobile.web.webp)] pt-20 bg pb-10 mx-auto bg-center hover:opacity-80 cursor-pointer  text-center">
          <span className=" text-white text-1xl">Mobile App Development</span>
        </div>
        <div className="text-xl w-[200px] h-[200px] bg-[url(/bg-img-website.webp)] pt-20 bg pb-10 mx-auto bg-center hover:opacity-80 cursor-pointer  text-center">
          <span className=" text-white text-1xl">Website Development</span>
        </div>
      </div>
      <div className="text-center bg-gray-600 text-white py-10">
        <span className="text-4xl">
          UpComing <span className="text-red-600">Game</span>
        </span>
        <p className="text-1xl ">
          Get a first look at our most anticipated title of the year. Pre-order
          now for exclusive
          <br /> content.
        </p>
      </div>

      <div className="bg-gray-600 grid grid-cols-2">
        <div>
          <span className="text-4xl text-red-500">
            Chakwa : Nothing Ends Here
          </span>
          <p className="text-2xl text-white ml-2">
            Experience true terror in a horror game inspired by ancient Indian
            mythology. Face supernatural forces,
            <br /> unravel dark legends, and survive the night as you uncover
            the mysteries
            <br /> lurking in the shadows of forgotten temples and haunted
            villages.
          </p>
          <div className="grid grid-cols-2 gap-4 text-white max-w-xl mx-auto pt-5 ">
            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="text-red-600 font-semibold">Release Date</h3>
              <p>Comming Soon...!</p>
            </div>
            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="text-red-600 font-semibold">Platforms</h3>
              <p>PlayStore</p>
            </div>

            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="text-red-600 font-semibold">Genre</h3>
              <p>Endless, Horror</p>
            </div>
            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="text-red-600 font-semibold">Players</h3>
              <p>Single</p>
            </div>
          </div>
        </div>

        <div>
          <div className=" rounded-lg p-10 text-right">
            <img
              src="/bg-play-.webp"
              alt="play image"
              className="inline-block -mt-10"
            />
          </div>
        </div>
      </div>

      <section className="w-full bg-black">
        <div className="flex max-w-9xl h-auto backface-hidden text-white p-6 shadow-md justify-center items-center">
          <div className="grid grid-cols-4 gap-40">
            <div className="grid grid-rows-2">
              <div className="border-2 rounded-lg bg-gray-600 border-red-600 hover:border-amber-500 h-[110px] w-[120px] flex items-center justify-center">
                <img
                  src="/Logo.png"
                  alt="Janvhi travel"
                  className="w-24 h-24"
                />
              </div>
              <h4>
                <span className="flex justify-center items-center">Janvi</span>
              </h4>
            </div>

            <div className="grid grid-rows-2">
              <div className="border-2 rounded-lg bg-gray-600 border-red-600 hover:border-amber-500 h-[110px] w-[120px] flex items-center justify-center">
                <img
                  src="/Pawna_nest.png"
                  alt="Pawna Nest c..."
                  className="w-24 h-24 rounded-full mb-4 mx-auto"
                />
              </div>
              <h4>
                <span className="flex justify-center items-center">
                  Pawna Nest C..
                </span>
              </h4>
            </div>

            <div className="grid grid-rows-2">
              <div className="border-2 rounded-lg bg-gray-600 border-red-600 hover:border-amber-500 h-[110px] w-[120px] flex items-center justify-center">
                <img
                  src="/ResearchPath.png"
                  alt="ResearchPath..."
                  className="w-24 h-24 rounded-full mb-4 mx-auto"
                />
              </div>
              <h4>
                <span className="flex justify-center items-center">
                  ResearcPath..
                </span>
              </h4>
            </div>

            <div className="grid grid-rows-">
              <div className="border-2 rounded-lg bg-gray-600 border-red-600 hover:border-amber-500 h-[110px] w-[120px] flex items-center justify-center">
                <img
                  src="/Vision_Solution_Logo.png"
                  alt="Vision-Solution.."
                  className="w-24 h-24 rounded-full mb-4 mx-auto"
                />
              </div>
              <h4>
                <span className="flex justify-center items-center">
                  Vision Solution
                </span>
              </h4>
            </div>
          </div>
        </div>
      </section>

<section className="bg-gray-600 text-white">
  <div className="grid">
        <div >
          <img
            src="/logo_with_new_bg.png"
            alt=""
            className="w-10 h-10 "
        />
          <h1 className="text-3xl font-bold">CoreLine
            
          </h1>
          <p className="mt-2">
            The ultimate gaming destination where gamers unite, explore,<br/> and
            conquer new digital realms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Games</h2>
          <ul className="space-y-1">
            <li>Action</li>
            <li>Horror</li>
            <li>Strategy</li>
            <li>RPG</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Support</h2>
          <ul className="space-y-1">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
            <li>Help Center</li>
          </ul>
        </div>

        <div className="col-span-4 text-center text-gray-400 mt-10">
          © 2025 CoreLine. All rights reserved.
        </div>
      </div>
      </section>
    </>
  );
}

export default Page;
