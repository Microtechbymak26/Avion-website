// "use client";
// import Image from "next/image";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaPinterest,
//   FaSkype,
//   FaTwitter,
// } from "react-icons/fa";
// import BrandDetails from "../components/BrandDetail";
// import NewCeramics from "../components/NewCeramics";
// import Club from "../components/club";
// import { Button } from "../components/ui/button";
// import Link from "next/link";
// import { useState } from "react";
// import { BsCart } from "react-icons/bs";

// const Page = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       {/* Desktop navbar */}
//       <div className="w-full h-[132px] relative">
//         <div className="hidden tablet:flex flex-col">
//           <div className="h-[41px] w-full bg-[#2A254B] flex items-center justify-center gap-2 mb-10">
//             <Image src="/Delivery.svg" alt="" height={16} width={16} />
//             <p className="font-satochi font-normal text[16px] text-white">
//               Free delivery on all orders over £50 with code easter checkout
//             </p>
//           </div>
//           <div className="flex items-center justify-between px-4 laptop-sm:px-10">
//             {/* Logo */}
//             <h2 className="font-clash text-2xl font-normal text-[#22202E]">
//               Avion
//             </h2>

//             {/* Navigation and Icons */}
//             <div className="flex gap-4 items-center">
//               {/* Icons */}
//               <Image
//                 src="/Search.svg"
//                 alt="Search Icon"
//                 width={20}
//                 height={20}
//                 className="hidden tablet:block"
//               />

//               <Link
//                 href="/cart"
//                 className="flex items-center gap-1 hover:text-blue-500 transition"
//               >
//                 <BsCart size={20} />
//                 Cart
//               </Link>

//               <Image
//                 src="/UserAvatar.svg"
//                 alt="User Avatar Icon"
//                 width={20}
//                 height={20}
//                 className="hidden tablet:block"
//               />

//               <Image
//                 src="/Search.svg"
//                 alt="Search Icon"
//                 width={20}
//                 height={20}
//                 className="block tablet:hidden"
//               />

//               {/* Mobile Menu Icon */}
//               <Image
//                 src="/Menu.svg"
//                 alt="Menu Icon"
//                 width={20}
//                 height={20}
//                 className="block tablet:hidden cursor-pointer"
//                 onClick={toggleMenu}
//               />
//               {/* Dropdown Menu (Mobile) */}
//               {menuOpen && (
//                 <div className="absolute top-[130px] left-0 w-full bg-white shadow-lg z-50  tablet:hidden">
//                   <ul className="flex flex-col gap-3 px-5 py-4 font-satochi text-[#22202E] text-[16px]">
//                     <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
//                       <Link href="/">Home</Link>
//                     </li>
//                     <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
//                       <Link href="/about">About us</Link>
//                     </li>

//                     <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
//                       <Link href="/shoppingCart">Shopping Cart</Link>
//                     </li>
//                     <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
//                       <Link href="/blog">Blog</Link>
//                     </li>
//                     <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
//                       <Link href="/inventory">Inventory</Link>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className=" h-16 w-full flex items-center justify-center px-5 laptop-sm:px-20 mt-4 bg-[#F9F9F9]">
//             <ul className="flex flex-items-center justify-center gap-5 font-satochi text-[#726E8D] text-[16px]">
//               <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
//                 <Link href="/">Home</Link>
//               </li>
//               <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
//                 <Link href="/about">About Us</Link>
//               </li>
//               <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
//                 <Link href="/shoppingCart">Shopping Cart</Link>
//               </li>
//               <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md px-2 py-2">
//                 <Link href="/inventory">Inventory</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         {/* Mobile navbar */}
//         <div className="tablet:hidden bg-[#362F78] text-white text-center py-2 text-sm flex justify-between items-center px-4 tablet:px-8">
//           <p>
//             Free delivery on all orders over £50 with code{" "}
//             <strong>easier checkout</strong>
//           </p>
//           <button className="text-white hover:text-gray-400">✕</button>
//         </div>

//         {/* Main Header */}

//         <div className="w-full relative flex flex-col laptop-sm:flex-row">
//           <Image
//             src="/chairFour.svg"
//             alt=""
//             width={721}
//             height={759}
//             className="tablet:w-full"
//           />
//           <div className="p-5 laptop-sm:p-20 flex flex-col">
//             <div className="flex flex-col">
//               <h1 className="font-clash text-[34px] text-[#2A254B] ">
//                 The Dandy Chair
//               </h1>
//               <p className="font-satochi text-[24px]">£250</p>
//             </div>
//             <div className="flex flex-col mt-6 gap-3 laptop-sm:gap-10">
//               <p className="font-clash text-[16px] text-[#2A254B]">
//                 Description
//               </p>
//               <p className="font-satochi text-[16px] text-[#2A254B]">
//                 A timeless design, with premium materials features as one of our
//                 most popular and iconic pieces. The dandy chair is perfect for
//                 any stylish living space with beech legs and lambskin leather
//                 upholstery.
//               </p>
//               <ul className="font-satochi text-[16px] text-[#2A254B]">
//                 <li className="">. Premium material</li>
//                 <li>. Handmade upholstery</li>
//                 <li>. Quality timeless classic</li>
//               </ul>
//             </div>
//             <div className="flex flex-col mt-6 gap-3 laptop-sm:gap-10">
//               <p className="font-clash text-[16px] text-[#2A254B]">
//                 Dimensions
//               </p>
//               <div className="flex justify-evenly laptop-sm:justify-start gap-10">
//                 <p className="font-clash text-[14px] text-[#2A254B]">Height</p>
//                 <p className="font-clash text-[14px] text-[#2A254B]">width</p>
//                 <p className="font-clash text-[14px] text-[#2A254B]">Depth</p>
//               </div>
//               <div className="flex justify-evenly laptop-sm:justify-start gap-10">
//                 <p className="font-clash text-[14px] text-[#2A254B]">110cm</p>
//                 <p className="font-clash text-[14px] text-[#2A254B]">75cm</p>
//                 <p className="font-clash text-[14px] text-[#2A254B]">50cm</p>
//               </div>
//             </div>
//             <div className="mt-9 flex flex-col items-center justify-center laptop-sm:flex-row laptop-sm:justify-start">
//               <div className="flex flex-col gap-4 laptop-sm:flex-row items-center laptop-sm:gap-5">
//                 <p>Amount:</p>
//                 <div className="w-[342px] laptop-sm:w-[122px] h-[46px] bg-[#F9F9F9] flex justify-evenly items-center laptop-sm:gap-2">
//                   <span>-</span>
//                   <span>1</span>
//                   <span>+</span>
//                 </div>
//                 <div>
//                   <Button className="w-[342px] laptop-sm:w-[143px] h-[56px] bg-[#2A254B] text-white hover:bg-white hover:text-black laptop-sm:ml-44 rounded-none">
//                     Add to cart
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <NewCeramics heading="You might also like" />
//         <BrandDetails />
//         <Club />

//         <footer className="w-full bg-[#2A254B] text-white">
//           {/* Grid Layout for all screen sizes */}
//           <div className="grid grid-cols-2 gap-6 px-6 py-8 tablet:grid-cols-2 laptop-sm:grid-cols-4 laptop-sm:px-16 laptop-sm:py-12">
//             {/* Avion Details */}
//             <div>
//               <h1 className="font-clash text-[18px] tablet:text-[36px] mb-2">
//                 Avion
//               </h1>
//               <p className="font-satochi text-[14px] leading-6">
//                 21 New York Street
//               </p>
//               <p className="font-satochi text-[14px] leading-6">
//                 New York City
//               </p>
//               <p className="font-satochi text-[14px] leading-6">
//                 United States of America
//               </p>
//               <p className="font-satochi text-[14px] leading-6">432 34</p>
//             </div>

//             {/* Social Links */}
//             <div>
//               <h1 className="font-clash text-[16px] mb-2">Social Links</h1>
//               <div className="flex flex-col laptop-sm:flex-row gap-4">
//                 <div className="flex gap-4">
//                   <FaLinkedin className="h-6 w-6 cursor-pointer hover:text-gray-300" />
//                   <FaFacebook className="h-6 w-6 cursor-pointer hover:text-gray-300" />
//                   <FaInstagram className="h-6 w-6 cursor-pointer hover:text-gray-300" />
//                 </div>
//                 <div className="flex gap-4">
//                   <FaTwitter className="h-6 w-6 cursor-pointer hover:text-gray-300" />
//                   <FaPinterest className="h-6 w-6 cursor-pointer hover:text-gray-300" />
//                   <FaSkype className="h-6 w-6 cursor-pointer hover:text-gray-300" />
//                 </div>
//               </div>
//             </div>

//             {/* Menu Links */}
//             <div>
//               <h1 className="font-clash text-[16px] mb-2">Menu</h1>
//               <ul className="font-satochi text-[14px] space-y-1">
//                 <li>New arrivals</li>
//                 <li>Best sellers</li>
//                 <li>Recently viewed</li>
//                 <li>Popular this week</li>
//                 <li>All products</li>
//               </ul>
//             </div>

//             {/* Categories */}
//             <div>
//               <h1 className="font-clash text-[16px] mb-2">Categories</h1>
//               <ul className="font-satochi text-[14px] space-y-1">
//                 <li>Crockery</li>
//                 <li>Furniture</li>
//                 <li>Homeware</li>
//                 <li>Plant pots</li>
//                 <li>Chairs</li>
//               </ul>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="border-t border-gray-700 py-4 px-6 flex flex-col items-center laptop-sm:flex-row laptop-sm:justify-between laptop-sm:px-16">
//             <p className="font-satochi text-[14px] text-center">
//               Copyright © 2022 Avion LTD
//             </p>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// };

// export default Page;

// "use client";
// import Image from "next/image";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaPinterest,
//   FaSkype,
//   FaTwitter,
// } from "react-icons/fa";
// import BrandDetails from "../components/BrandDetail";
// import NewCeramics from "../components/NewCeramics";
// import Club from "../components/club";
// import { Button } from "../components/ui/button";
// import Link from "next/link";
// import { useState } from "react";
// import { BsCart } from "react-icons/bs";

// const Page = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       {/* Desktop navbar */}
//       <div className="w-full h-[132px] relative">
//         <div className="hidden tablet:flex flex-col">
//           <div className="h-[41px] w-full bg-[#2A254B] flex items-center justify-center gap-2 mb-10">
//             <Image src="/Delivery.svg" alt="" height={16} width={16} />
//             <p className="font-satochi font-normal text[16px] text-white">
//               Free delivery on all orders over £50 with code easter checkout
//             </p>
//           </div>
//           <div className="flex items-center justify-between px-4 laptop-sm:px-10">
//             <h2 className="font-clash text-2xl font-normal text-[#22202E]">
//               Avion
//             </h2>

//             <div className="flex gap-4 items-center">
//               <Image src="/Search.svg" alt="Search" width={20} height={20} className="hidden tablet:block" />
//               <Link href="/cart" className="flex items-center gap-1 hover:text-blue-500 transition">
//                 <BsCart size={20} />
//                 Cart
//               </Link>
//               <Image src="/UserAvatar.svg" alt="User" width={20} height={20} className="hidden tablet:block" />
//               <Image src="/Menu.svg" alt="Menu" width={20} height={20} className="block tablet:hidden cursor-pointer" onClick={toggleMenu} />
//             </div>
//           </div>

//           <div className="h-16 w-full flex items-center justify-center px-5 laptop-sm:px-20 mt-4 bg-[#F9F9F9]">
//             <ul className="flex items-center justify-center gap-5 font-satochi text-[#726E8D] text-[16px]">
//               <li><Link href="/">Home</Link></li>
//               <li><Link href="/about">About Us</Link></li>
//               <li><Link href="/shoppingCart">Shopping Cart</Link></li>
//               <li><Link href="/inventory">Inventory</Link></li>
//             </ul>
//           </div>
//         </div>

//         {/* Mobile Navbar */}
//         <div className="tablet:hidden flex justify-between items-center p-4 bg-[#2A254B] text-white">
//           <h2 className="font-clash text-2xl">Avion</h2>
//           <button onClick={toggleMenu} className="text-white text-lg">☰</button>
//         </div>
//         {menuOpen && (
//           <div className="tablet:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4 z-50">
//             <ul className="flex flex-col gap-4 text-[#22202E] text-[16px]">
//               <li><Link href="/">Home</Link></li>
//               <li><Link href="/about">About us</Link></li>
//               <li><Link href="/shoppingCart">Shopping Cart</Link></li>
//               <li><Link href="/blog">Blog</Link></li>
//               <li><Link href="/inventory">Inventory</Link></li>
//             </ul>
//           </div>
//         )}
//       </div>

//     </>
//   );
// };

// export default Page;

"use client";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import BrandDetails from "../components/BrandDetail";
import NewCeramics from "../components/NewCeramics";
import Club from "../components/club";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { BsCart } from "react-icons/bs";

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Desktop navbar */}
      <div className="w-full h-[132px] relative">
        <div className="hidden tablet:flex flex-col">
          <div className="h-[41px] w-full bg-[#2A254B] flex items-center justify-center gap-2 mb-10">
            <Image src="/Delivery.svg" alt="" height={16} width={16} />
            <p className="font-satochi font-normal text-[16px] text-white">
              Free delivery on all orders over £50 with code easter checkout
            </p>
          </div>
          <div className="flex items-center justify-between px-4 laptop-sm:px-10">
            <h2 className="font-clash text-2xl font-normal text-[#22202E]">
              Avion
            </h2>
            <div className="flex gap-4 items-center">
            <div className="hidden tablet:flex tablet:items-center tablet:justify-center mt-1">

          <ul className="flex gap-5 font-satochi text-[#726E8D] text-[16px]">
            <Link href="/">
              <li className="hover:text-[#2A254B]">
                Home
                </li>
            </Link>
            <Link href="/about">
              <li className="hover:text-[#2A254B]">
                About
              </li>
            </Link>
           
            <Link href="/shoppingCart">
              <li className="hover:text-[#2A254B]">
                Shopping Cart
               </li>
            </Link>
            <Link href="/inventory">
              <li className="hover:text-[#2A254B]">
                Inventory
              </li>
            </Link>
            
          </ul>
        </div>
              <Link
                href="/cart"
                className="flex items-center gap-1 hover:text-blue-500 transition"
              >
                <BsCart size={20} />
                Cart
              </Link>
              <Image
                src="/Search.svg"
                alt="Search"
                width={20}
                height={20}
                className="hidden tablet:block"
              />
              <Image
                src="/UserAvatar.svg"
                alt="User"
                width={20}
                height={20}
                className="hidden tablet:block"
              />
              <Image
                src="/Menu.svg"
                alt="Menu"
                width={20}
                height={20}
                className="block tablet:hidden cursor-pointer"
                onClick={toggleMenu}
              />
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="tablet:hidden flex justify-between items-center p-4 bg-[#2A254B] text-white">
          <h2 className="font-clash text-2xl">Avion</h2>
          <button onClick={toggleMenu} className="text-white text-lg">
            ☰
          </button>
        </div>
        {menuOpen && (
          <div className="tablet:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4 z-50">
            <ul className="flex flex-col gap-4 text-[#22202E] text-[16px]">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/shoppingCart">Shopping Cart</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/inventory">Inventory</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="w-full relative flex flex-col laptop-sm:flex-row">
        <Image
          src="/chairFour.svg"
          alt=""
          width={721}
          height={759}
          className="tablet:w-full"
        />
        <div className="p-5 laptop-sm:p-20 flex flex-col">
          <div className="flex flex-col">
            <h1 className="font-clash text-[34px] text-[#2A254B] ">
              The Dandy Chair
            </h1>
            <p className="font-satochi text-[24px]">£250</p>
          </div>
          <div className="flex flex-col mt-6 gap-3 laptop-sm:gap-10">
            <p className="font-clash text-[16px] text-[#2A254B]">Description</p>
            <p className="font-satochi text-[16px] text-[#2A254B]">
              A timeless design, with premium materials features as one of our
              most popular and iconic pieces. The dandy chair is perfect for any
              stylish living space with beech legs and lambskin leather
              upholstery.
            </p>
            <ul className="font-satochi text-[16px] text-[#2A254B]">
              <li className="">. Premium material</li>
              <li>. Handmade upholstery</li>
              <li>. Quality timeless classic</li>
            </ul>
          </div>
          <div className="flex flex-col mt-6 gap-3 laptop-sm:gap-10">
            <p className="font-clash text-[16px] text-[#2A254B]">Dimensions</p>
            <div className="flex justify-evenly laptop-sm:justify-start gap-10">
              <p className="font-clash text-[14px] text-[#2A254B]">Height</p>
              <p className="font-clash text-[14px] text-[#2A254B]">width</p>
              <p className="font-clash text-[14px] text-[#2A254B]">Depth</p>
            </div>
            <div className="flex justify-evenly laptop-sm:justify-start gap-10">
              <p className="font-clash text-[14px] text-[#2A254B]">110cm</p>
              <p className="font-clash text-[14px] text-[#2A254B]">75cm</p>
              <p className="font-clash text-[14px] text-[#2A254B]">50cm</p>
            </div>
          </div>
          <div className="mt-9 flex flex-col items-center justify-center laptop-sm:flex-row laptop-sm:justify-start">
            <div className="flex flex-col gap-4 laptop-sm:flex-row items-center laptop-sm:gap-5">
              <p>Amount:</p>
              <div className="w-[342px] laptop-sm:w-[122px] h-[46px] bg-[#F9F9F9] flex justify-evenly items-center laptop-sm:gap-2">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <div>
                <Button className="w-[342px] laptop-sm:w-[143px] h-[56px] bg-[#2A254B] text-white hover:bg-white hover:text-black laptop-sm:ml-44 rounded-none">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <NewCeramics heading="You might also like" />
      <BrandDetails />
      <Club />

      <footer className="w-full bg-[#2A254B] text-white">
        {/* Grid Layout for all screen sizes */}
        <div className="grid grid-cols-2 gap-6 px-6 py-8 tablet:grid-cols-2 laptop-sm:grid-cols-4 laptop-sm:px-16 laptop-sm:py-12">
          {/* Avion Details */}
          <div>
            <h1 className="font-clash text-[18px] tablet:text-[36px] mb-2">
              Avion
            </h1>
            <p className="font-satochi text-[14px] leading-6">
              21 New York Street
            </p>
            <p className="font-satochi text-[14px] leading-6">New York City</p>
            <p className="font-satochi text-[14px] leading-6">
              United States of America
            </p>
            <p className="font-satochi text-[14px] leading-6">432 34</p>
          </div>

          {/* Social Links */}
          <div>
            <h1 className="font-clash text-[16px] mb-2">Social Links</h1>
            <div className="flex flex-col laptop-sm:flex-row gap-4">
              <div className="flex gap-4">
                <FaLinkedin className="h-6 w-6 cursor-pointer hover:text-gray-300" />
                <FaFacebook className="h-6 w-6 cursor-pointer hover:text-gray-300" />
                <FaInstagram className="h-6 w-6 cursor-pointer hover:text-gray-300" />
              </div>
              <div className="flex gap-4">
                <FaTwitter className="h-6 w-6 cursor-pointer hover:text-gray-300" />
                <FaPinterest className="h-6 w-6 cursor-pointer hover:text-gray-300" />
                <FaSkype className="h-6 w-6 cursor-pointer hover:text-gray-300" />
              </div>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h1 className="font-clash text-[16px] mb-2">Menu</h1>
            <ul className="font-satochi text-[14px] space-y-1">
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h1 className="font-clash text-[16px] mb-2">Categories</h1>
            <ul className="font-satochi text-[14px] space-y-1">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 py-4 px-6 flex flex-col items-center laptop-sm:flex-row laptop-sm:justify-between laptop-sm:px-16">
          <p className="font-satochi text-[14px] text-center">
            Copyright © 2022 Avion LTD
          </p>
        </div>
      </footer>
    </>
  );
};

export default Page;
