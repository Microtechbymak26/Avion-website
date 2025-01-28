import { Product } from "../product/[slug]/page";

 
 export const addToCart  = (product: Product) => {
     const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

     const exixtingProductIndex = cart.findIndex(item => item._id === product.id);

     if(exixtingProductIndex > -1){
            cart[exixtingProductIndex].quantity += 1;
     }
      else {
        cart.push({...product, quantity: 1});
      }

        localStorage.setItem('cart', JSON.stringify(cart));
 }
 
    export const removeFromCart = (product: Product) => {
        let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
        cart = cart.filter(item => item._id !== product.id);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    export const updateQuantity = (product: Product, quantity: number) => {
        let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
        const ProductIndex = cart.findIndex(item => item._id === product.id);

        if(ProductIndex > -1){
            cart[ProductIndex].quantity = quantity;
        }
        // localStorage.setItem('cart', JSON.stringify(cart));
    }

    export const getCartItems = () => {
        return JSON.parse(localStorage.getItem('cart') || '[]');
    }

