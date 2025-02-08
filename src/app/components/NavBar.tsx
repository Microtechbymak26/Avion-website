"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsCart } from 'react-icons/bs';
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <div className="w-full h-[132px] p-7 relative bg-white shadow-md">
        <div className="flex items-center justify-between">
          <Image src="/Search.svg" alt="Search Icon" width={20} height={20} className="hidden tablet:block" />
          <h2 className="font-clash text-2xl font-bold text-[#22202E]">Avion</h2>
          <div className="flex gap-4">


                        
                <Link
                  href="/cart"
                  className="flex items-center gap-1 hover:text-blue-500 transition"
                >
                  <BsCart size={20} />
                  Cart
                </Link>
          

              {/* Clerk Authentication */}
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>




            <Image src="/Search.svg" alt="Search Icon" height={20} width={20} className="block tablet:hidden" />
            {/* Menu icon for mobile */}
            <Image
              src="/Menu.svg"
              alt="Menu Icon"
              height={20}
              width={20}
              className="block tablet:hidden cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
        <hr className="mt-4 border-gray-300" />

        {/* Dropdown menu for mobile */}
        {menuOpen && (
          <div className="absolute top-[132px] left-0 w-full bg-white shadow-lg z-50">
            <ul className="flex flex-col gap-3 px-5 py-4 font-satochi text-[#22202E] text-[16px]">
              <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
                <Link href="/about">About Us</Link>
              </li>
              <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
                <Link href="/itemCart">Item Carts</Link>
              </li>
              <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
                <Link href="/shoppingCart">Shopping Cart</Link>
              </li>
               <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
                <Link href="/inventory">Inventory</Link>
              </li>
            </ul>
          </div>
        )}

        {/* Tablet/Desktop navigation */}
        <div className="hidden tablet:flex tablet:items-center tablet:justify-center mt-5">
        <Link href="inventory">
          <ul className="flex gap-5 font-satochi text-[#726E8D] text-[16px]">
            <li>Plant pots</li>
            <li>Ceramics</li>
            <li>Tables</li>
            <li>Chairs</li>
            <li>Crockery</li>
            <li>Tableware</li>
            <li>Cutlery</li>
            
          </ul>
          </Link>
        </div>
        {/* <hr className="mt-4 border-gray-300 hidden tablet:block" /> */}
        <div className="hidden tablet:flex tablet:items-center tablet:justify-center mt-10">
          <ul className="flex gap-5 font-satochi text-[#726E8D] text-[16px]">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/itemCart">
              <li>Item Carts</li>
            </Link>
            <Link href="/shoppingCart">
              <li>Shopping Cart</li>
            </Link>
            <Link href="/inventory">
              <li>Inventory</li>
            </Link>
            <li>
                <Link href="/cart">Cart</Link>
            </li> 
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;