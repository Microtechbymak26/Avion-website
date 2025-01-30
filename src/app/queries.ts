import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

const productQuery = groq`
  *[_type == "product"]{
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
  }
`;

// Function to fetch products
export async function fetchProducts() {
    return await client.fetch(productQuery);
}