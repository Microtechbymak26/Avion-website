import { Button } from "@/app/components/ui/button";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";

export interface Product {
  quantity: number;
  _id: string;
  name: string;
  description: string;
  slug: { current: string };
  image: { asset: { url: string } };
  price: number;
  tags?: string[];
  features?: string[]; // Typed as string[]
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
}

async function getProducts(slug: string) {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
              _id,
              name,
              description,
              quantity,
              slug,
              image {
                asset->{
                  url
                }
              },
              price,
              tags,
              features,
              dimensions {
                height,
                width,
                depth
              },
              category->{
                name,
                slug
              }
            }`,
    { slug }
  );
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const product = await getProducts(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Product Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="relative flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden">
          {product.image && (
            <Image
              src={product.image.asset.url}
              width={600}
              height={600}
              alt={product.name}
              className="object-cover w-full h-auto"
            />
          )}
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col gap-6">
          {/* Product Name */}
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

          {/* Product Price */}
          <p className="text-2xl text-gray-700">
            Price: <span className="font-semibold">£{product.price}</span>
          </p>

          {/* Category */}
          {product.category && (
            <p className="text-lg text-gray-600">
              Category:{" "}
              <span className="font-medium text-gray-800">
                {product.category.name}
              </span>
            </p>
          )}

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
            {product.description}
          </p>

          {/* Features */}
          {product.features && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Features:</h2>
              <ul className="list-disc pl-5 text-gray-700">
                {product.features.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Dimensions */}
          {product.dimensions && (
            <p className="text-lg text-gray-600">
              Dimensions:{" "}
              <span className="font-medium text-gray-800">
                {product.dimensions.height} x {product.dimensions.width} x{" "}
                {product.dimensions.depth}
              </span>
            </p>
          )}

          {/* Quantity */}
          <p className="text-lg text-gray-600">
            Available Quantity:{" "}
            <span className="font-medium text-gray-800">
              {product.quantity} Pieces
            </span>
          </p>

          {/* Add to Cart Button */}
          <Button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
