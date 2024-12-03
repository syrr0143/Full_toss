import React from "react";

const ProductCard = ({ id, name, description, image, team }) => {
  return (
    <div id={id} className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black">{name}</h2>
        <p className="text-black">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
