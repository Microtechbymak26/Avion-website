import { Product } from "../product/[slug]/page";

export const addToCart = (product: Product) => {
  const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

  const existingProductIndex = cart.findIndex((item) => item._id === product.id);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
};

export const removeFromCart = (product: Product) => {
  const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const updatedCart = cart.filter((item) => item._id !== product.id);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};

export const updateQuantity = (product: Product, quantity: number) => {
  const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const productIndex = cart.findIndex((item) => item._id === product.id);

  if (productIndex > -1) {
    cart[productIndex].quantity = quantity;
    // Uncomment below line if you want to save the updated cart
    localStorage.setItem('cart', JSON.stringify(cart));
  }
};

export const getCartItems = () => {
  return JSON.parse(localStorage.getItem('cart') || '[]');
};
