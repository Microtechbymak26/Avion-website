// "use client";

// import React, { useEffect, useState } from "react";
// import { Search, Filter } from "lucide-react";

// interface Product {
//   category?: { name: string; slug: string };
//   name: string;
//   description: string;
//   price: number;
// }

// export default function SearchAndFilter({
//   products,
//   onFilteredProducts,
// }: {
//   products: Product[];
//   onFilteredProducts: (filtered: Product[]) => void;
// }) {
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");
//   const [maxPrice, setMaxPrice] = useState<number>(0);

//   const categories = Array.from(
//     new Set(products.map((product) => product.category?.name || ""))
//   ).filter((category) => category);

//   useEffect(() => {
//     let filtered = products;

//     if (searchQuery) {
//       filtered = filtered.filter(
//         (product) =>
//           product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           product.description.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (selectedCategory !== "All") {
//       filtered = filtered.filter(
//         (product) => product.category?.name === selectedCategory
//       );
//     }

//     if (maxPrice > 0) {
//       filtered = filtered.filter((product) => product.price <= maxPrice);
//     }

//     onFilteredProducts(filtered);
//   }, [searchQuery, selectedCategory, maxPrice, products]);

//   return (
//     <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 bg-white shadow-md p-6 rounded-lg mb-8">
//       {/* Search */}
//       <div className="flex items-center w-full md:w-1/3 bg-gray-100 rounded-lg px-4 py-2">
//         <Search className="text-gray-500 mr-2" />
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full bg-transparent outline-none"
//         />
//       </div>

//       {/* Category Filter */}
//       <div className="flex items-center w-full md:w-1/3 bg-gray-100 rounded-lg px-4 py-2">
//         <Filter className="text-gray-500 mr-2" />
//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="w-full bg-transparent outline-none"
//         >
//           <option value="All">All Categories</option>
//           {categories.map((category, index) => (
//             <option key={index} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Price Filter */}
//       <div className="flex items-center w-full md:w-1/3 bg-gray-100 rounded-lg px-4 py-2">
//         <span className="text-gray-500 mr-2">£</span>
//         <input
//           type="number"
//           placeholder="Max Price"
//           value={maxPrice || ""}
//           onChange={(e) => setMaxPrice(Number(e.target.value))}
//           className="w-full bg-transparent outline-none"
//         />
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { Product } from "../product/[slug]/page";

// interface SearchAndFilterProps {
//   products: Product[];
//   onFilteredProducts: (filtered: Product[]) => void;
// }

// const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
//   products,
//   onFilteredProducts,
// }) => {
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   const handleSearch = () => {
//     const filtered = products.filter((product) =>
//       product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     onFilteredProducts(filtered); // Pass the filtered products to the parent component
//   };

//   return (
//     <div className="flex justify-between items-center">
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="px-4 py-2 border rounded-md"
//       />
//       <button
//         onClick={handleSearch}
//         className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-md"
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchAndFilter;



"use client";

import React, { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react"; // Importing icons
import { Product } from "../product/[slug]/page"; // Adjust path to Product interface

interface SearchAndFilterProps {
  products: Product[];
  onFilteredProducts: (filtered: Product[]) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  products,
  onFilteredProducts,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [maxPrice, setMaxPrice] = useState<number>(0);

  // Extract unique categories from the products
  const categories = Array.from(
    new Set(products.map((product) => product.category?.name || ""))
  ).filter((category) => category);

  useEffect(() => {
    let filtered = products;

    // Filter based on search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter based on selected category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category?.name === selectedCategory
      );
    }

    // Filter based on max price
    if (maxPrice > 0) {
      filtered = filtered.filter((product) => product.price <= maxPrice);
    }

    // Pass the filtered products to the parent component
    onFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, maxPrice, products]);

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 bg-white shadow-md p-6 rounded-lg mb-8">
      {/* Search */}
      <div className="flex items-center w-full md:w-1/3 bg-gray-100 rounded-lg px-4 py-2">
        <Search className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent outline-none"
        />
      </div>

      {/* Category Filter */}
      <div className="flex items-center w-full md:w-1/3 bg-gray-100 rounded-lg px-4 py-2">
        <Filter className="text-gray-500 mr-2" />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full bg-transparent outline-none"
        >
          <option value="All">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Price Filter */}
      <div className="flex items-center w-full md:w-1/3 bg-gray-100 rounded-lg px-4 py-2">
        <span className="text-gray-500 mr-2">£</span>
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice || ""}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default SearchAndFilter;
