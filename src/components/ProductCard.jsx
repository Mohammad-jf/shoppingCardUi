import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="bg-white p-4 rounded-lg shadow flex flex-col"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-500 text-sm mb-2">{product.description}</p>
      <p className="text-gray-800 font-bold">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
