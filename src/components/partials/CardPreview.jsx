import React from 'react'

const CardPreview = ({ src, alt, title, description, btnBg, btnHover }) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img
          src={src}
          alt={alt}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className={`${btnBg} text-white px-4 py-2 rounded ${btnHover} transition duration-300`}>
          Read Story
        </button>
      </div>
    </>
  );
};

export default CardPreview
