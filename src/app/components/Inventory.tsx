"use client";

import React, { useEffect, useState } from "react";
import { fetchProducts } from "../queries";
import Link from "next/link";
import { Button } from "../components/ui/button";
import Swal from "sweetalert2";
import SearchAndFilter from "../components/SearchAndFilter";
import Pagination from "../components/Pagination";
import { addToCart } from "../actions/action";
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

const ITEMS_PER_PAGE = 4;

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
 

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
    </>
  );
};

export default Page;