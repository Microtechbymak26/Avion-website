"use client";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { Product } from "../product/[slug]/page";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { client } from "@/sanity/lib/client";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstname: false,
    lastname: false,
    phone: false,
    email: false,
    address: false,
    city: false,
    state: false,
    zipCode: false,
    country: false,
  });

  const [shipping, setShipping] = useState<number>(20); // Default shipping fee
  const [tax, setTax] = useState<number>(0); // Initial tax
  const [discount, setDiscount] = useState<number>(0); // Initial discount

  const router = useRouter();

  useEffect(() => {
    // Mocked cart data fetching
    const cart = localStorage.getItem("cart");
    setCartItems(cart ? JSON.parse(cart) : []);

    // Dynamically adjust shipping, tax, and discount based on cart value
    const calculateShippingTaxDiscount = () => {
      const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      // Update values dynamically
      setShipping(subtotal > 100 ? 0 : 20); // Free shipping if subtotal > $100
      setTax(subtotal * 0.1); // 10% tax on subtotal
      setDiscount(subtotal > 50 ? 10 : 0); // $10 discount for subtotal > $50
    };

    calculateShippingTaxDiscount();
  }, [cartItems]); // Runs whenever cartItems changes

  const validateForm = () => {
    const errors = {
      firstname: !formValues.firstname,
      lastname: !formValues.lastname,
      phone: !formValues.phone,
      email: !formValues.email,
      address: !formValues.address,
      city: !formValues.city,
      state: !formValues.state,
      zipCode: !formValues.zipCode,
      country: !formValues.country,
    };
    setFormErrors(errors);

    return !Object.values(errors).some((error) => error); // Return true if no errors
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      Swal.fire({
        title: "Incomplete Form",
        text: "Please fill out all required fields.",
        icon: "error",
      });
      return;
    }
  
    Swal.fire({
      title: "Order Successful!",
      text: "You have successfully checked out.",
      icon: "success",
    }).then(() => {
      // Clear cart and form
      localStorage.removeItem("cart");
      setCartItems([]);
      setFormValues({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
      });
      router.push("/"); // Redirect to the homepage or success page
    });


    const total = calculateTotal();

    const orderData = {
      _type : 'order',
      firstName : formValues.firstname,
      lastName : formValues.lastname,
      address : formValues.address,
      city : formValues.city,
      zipCode : formValues.zipCode,
      phone : formValues.phone,
      email : formValues.email,
      cartItems: cartItems.map(item => ({
         _type :'reference',
         _ref : item._id
      })),
      total:total,
      discount : discount,
      orderDate : new Date().toISOString
    }

    try {
      await client.create(orderData)
      localStorage.removeItem("appliedDiscount")
    }catch (error){
      console.error("error creating order",error)
    }

  };
  
  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return subtotal + shipping + tax - discount;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 bg-white shadow-md rounded-lg p-6">
        {/* Left Side: Checkout Form */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>

          {/* Shipping Form */}
          <div className="space-y-4">
            {[
              { name: "firstname", label: "First Name" },
              { name: "lastname", label: "Last Name" },
              { name: "phone", label: "Phone" },
              { name: "email", label: "Email" },
              { name: "address", label: "Address" },
              { name: "city", label: "City" },
              { name: "state", label: "State" },
              { name: "zipCode", label: "ZIP Code" },
              { name: "country", label: "Country" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium mb-1">{field.label}</label>
                <input
                  type="text"
                  name={field.name}
                  value={formValues[field.name as keyof typeof formValues]}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-md ${
                    formErrors[field.name as keyof typeof formErrors]
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {formErrors[field.name as keyof typeof formErrors] && (
                  <p className="text-red-500 text-sm mt-1">{field.label} is required.</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="w-full lg:w-1/2 bg-gray-50 p-6 rounded-md shadow-lg">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item._id} className="py-3 flex justify-between items-center">
                {/* Product Image */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.image.asset.url}
                    alt={item.name}
                    height={500}
                    width={500}
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                </div>
                <span className="text-gray-700 font-semibold">
                  ${item.price * item.quantity}
                </span>
              </li>
            ))}
          </ul>

          {/* Shipping, Tax, and Discount */}
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-semibold">${shipping}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span className="font-semibold">${tax}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="font-semibold">-${discount}</span>
            </div>
          </div>

          <div className="text-right font-bold mt-4">Total: ${calculateTotal()}</div>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="mt-8 w-full text-center">
        <Button
          onClick={handlePlaceOrder}
          className="w-full lg:w-1/3 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
