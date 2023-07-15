import React from "react";

export const MenuItem = ({ image, name, content, price }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem", borderRadius: "30px" }}>
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{content}</p>
          <p className="card-text">
            <i style={{ color: "red" }}>{price} TL</i>
          </p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
};
