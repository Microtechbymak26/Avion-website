"use client";

import React, { useEffect, useState } from "react";
import { fetchProducts } from "../queries";
import Link from "next/link";
import { Button } from "../components/ui/button";
import Swal from "sweetalert2";
import SearchAndFilter from "../components/SearchAndFilter";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import { addToCart } from "../actions/action";
import { BsCart } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for hamburger menu
import Image from "next/image";


export interface Review {
  author: string;
  date: string;
  comment: string;
  rating: number;
}

export interface Product {
  id: string;
  quantity: number;
  _id: string;
  name: string;
  description: string;
  slug: { current: string };
  image: { asset: { url: string } };
  price: number;
  tags?: string[];
  features?: string[];
  dimensions?: {
    height: number;
    width: number;
    depth: number;
  };
  category?: {
    name: string;
    slug: string;
  };
  params: {
    slug: string;
  };
  reviews: Review[];  // Added reviews
  rating: number;     // Added rating
}


const ITEMS_PER_PAGE = 4 ;

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [menuOpen, setMenuOpen] = useState(false); // State for the mobile menu

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      console.log('data fetxhed',data)
      setFilteredProducts(data);
    };
    getProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addToCart(product);

    Swal.fire({
      position: "center",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <main className="mb-5">
        {/* Navbar */}
        <div className="bg-white shadow-md">
          <nav className="flex items-center justify-between px-5 py-4 tablet:px-10">
            <Link href="/">
              <h1 className="text-lg font-bold text-gray-800 cursor-pointer">
                Avion
              </h1>
            </Link>
              
              


            {/* Hamburger Menu for Mobile */}
            <div className="block tablet:hidden">
              {menuOpen ? (
                <FiX
                  size={24}
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                />
              ) : (
                <FiMenu
                  size={24}
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(true)}
                />
              )}
            </div>
            {/* Links for Tablet and Desktop */}
            <ul className="hidden tablet:flex gap-5 font-medium text-gray-700">
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-500 transition">
                  About
                </Link>
              </li>
              <li 
              className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md  px-2  ">
                <Link href="/itemCart">Item Carts</Link>
              </li>
              <li className="hover:text-[#726E8D] hover:bg-gray-100 rounded-md  px-2">
                <Link href="/shoppingCart">Shopping Cart</Link>
              </li>
              <Link
                  href="/cart"
                  className="flex items-center gap-1 hover:text-blue-500 transition"
                >
                  <BsCart size={20} />
                  Cart
                </Link>
            </ul>
          </nav>
          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="block tablet:hidden bg-white shadow-md p-5">
              <li className="mb-3">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-500 transition py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-500 transition py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className=" hover:text-blue-500  rounded-md  py-2  ">
                <Link href="/itemCart">Item Carts</Link>
              </li>
              <li className=" hover:text-blue-500 rounded-md  py-2">
                <Link href="/shoppingCart">Shopping Cart</Link>
              </li>
              <Link
                  href="/cart"
                  className="flex items-center gap-1 hover:text-blue-500 transition py-2"
                >
                  <BsCart size={20} />
                  Cart
                </Link>
            </ul>
          )}
        </div>

        {/* Banner Section */}
        <section className="relative">
          <div className="w-full">
            <Image
              src="/Banner.svg"
              alt="Banner"
              height={2}
              width={2}
              className="hidden tablet:block w-full object-cover"
            />
            <Image
              src="/Banner.svg"
              alt="Mobile Banner"
              height={2}
              width={2}
              className="block tablet:hidden w-full object-cover"
            />
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="my-10 px-5 tablet:px-10">
          <SearchAndFilter
            products={products}
            onFilteredProducts={setFilteredProducts} // This works fine now
          />
        </section>

        {/* Product Grid Section */}
        <section className="px-5 tablet:px-10">
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-6">
            {paginatedProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105"
              >
                <Link href={`/product/${product.slug.current}`}>
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={product.image.asset.url}
                      alt={product.name}
                      height={500}
                      width={500}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 truncate">
                      {product.name}
                    </h4>
                    <p className="text-gray-600 text-sm mt-2">
                      £{product.price}
                    </p>
                  </div>
                </Link>
                <div className="p-4">
                  <Button
                    className="w-full py-2 px-4 text-sm font-medium text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-all"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pagination Section */}
        <section className="my-10">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;