import Link from 'next/link';
import React from 'react'

function Navbar() {
  return (
    <div>
      <ul className="grid grid-cols-7 scroll-m-10 text-xl text-right py-5 px-4 text-red-500">
        <li className="flex items-center space-x-2">
          <img
            src="/logo_with_new_bg.png"
            className="h-[40px]"
            alt="Coreline Logo"
          />
          <span>CORELINE</span>
        </li>

       <Link href={"/home"}> <li>Home</li></Link>
        <Link href={"/about"}> <li>About</li></Link>
       
        <Link href={"/services"}><li>Services</li></Link>
        <Link href={"/Latest release"}><li>Latest Release</li></Link>
        <Link  href={"/contact"}> <li>Contact</li></Link>
      </ul>
    </div>
  );
}

export default Navbar