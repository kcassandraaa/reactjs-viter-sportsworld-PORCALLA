import React from 'react'

const CardBanner = ({title, description, bgColor}) => {
  return (
    <>
      <div className={`${bgColor} text-white p-8 rounded-lg shadow-lg mb-8`}>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl">
          {description}
        </p>
      </div>
    </>
  );
}

export default CardBanner
