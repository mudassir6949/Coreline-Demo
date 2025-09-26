import React from 'react'

function page() {
  return (
    <>
      <div className="text-4xl text-center text-pink-600 bg-[url(/services-.webp)] ...bg-no-repeat h-[400px] bg-cover max-w-[2000px]">
        <span>Our Services</span>
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
      <div className="text-center bg-gray-500 ">
        <span className="text-4xl ">
          What we <span className="text-red-500 ">Do</span>{" "}
        </span>
        <p className="text-3xl">
          Explore our diverse range of services, from game development to IT
          solutions, tailored to your needs.
        </p>
     
      <div className="grid grid-cols-4 gap-2  text-red-500 font-semibold hover:">
        <button className="border border-gray-600 rounded px-6 py-3">
          Skill & Mind Games
        </button>
        <button className="border border-gray-700 rounded px-6 py-3">
          Software Development
        </button>
        <button className="border border-gray-700 rounded px-6 py-3">
          Mobile Application Development
        </button>
        <button className="border border-gray-00 rounded px-6 py-3">
          Digital Marketing
        </button>

       
      </div>
      </div>
      <div className='text-center bg-gray-500 py-5 '>
        <span className='text-center text-4xl'>All <span className='text-red-600 '>Games</span></span>
        <p className='text-3xl'>Discover our complte library of gaming Experience</p>
      </div>
       

       <div className='grid grid-cols-4 text-right  bg-gray-500 py-5'>
        <div>
          <h2 className="text-xl font-semibold mb-2 ">Quick Links</h2>
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
    
    </>
  );
}

export default page
