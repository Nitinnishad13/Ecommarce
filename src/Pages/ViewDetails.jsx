import React from "react";

const ViewDetails = ({ product }) => {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="w-full">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-2xl w-full object-cover shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            <p className="text-xl text-green-600 font-semibold mb-2">
              ₹{product.price}
            </p>
            <p className="text-yellow-500 font-medium mb-4">
              ⭐ {product.rating} / 5
            </p>
            <p className="text-gray-600 mb-6">{product.description}</p>
          </div>

          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
