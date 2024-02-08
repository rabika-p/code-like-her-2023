import { Link } from "react-router-dom";
import { useState } from "react";

import { TiShoppingCart } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";

const ProductForm = ({ addProduct }) => {
  const [productData, setProductData] = useState({
    title: "",
    price: "",
    thumbnail: "",
  });

  // Function to handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      // Dynamic key to get name attribute of inputs
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
    addProduct(productData);
    alert("Product added successfully");
    setProductData({
      title: "",
      price: "",
      thumbnail: "",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#e4eaf5]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <TiShoppingCart className="text-3xl mr-2" />
            <h1 className="text-xl font-semibold">Add Product</h1>
          </div>
          <Link to={`/`}>
            <IoCloseOutline className="text-2xl cursor-pointer" />
          </Link>
        </div>
        <p className="text-md text-gray-700 mb-4">Enter Product Information</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter product title"
              value={productData.title}
              onChange={handleInput}
              required
              className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 mt-2 placeholder-gray-500 "
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="price"
              className="text-sm font-medium text-gray-700"
            >
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={productData.price}
              placeholder="Enter price"
              onChange={handleInput}
              required
              className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 mt-2 placeholder-gray-500 "
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="thumbnail"
              className="text-sm font-medium text-gray-700"
            >
              Image URL:
            </label>
            <input
              type="text"
              id="thumbnail"
              name="thumbnail"
              value={productData.thumbnail}
              placeholder="Enter image URL"
              onChange={handleInput}
              required
              className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 mt-2 placeholder-gray-500 "
            />
          </div>

          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;