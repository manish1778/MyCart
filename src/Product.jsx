// import React from "react";
import "./Product.css"

const Product = ({ name, price, description, image }) => {
    return (
        <div className="product">
            <img className="product-image"
                src={image}
                alt={name}
                width={300}
                height={100}
            />
            <h2 className="product-name">Name: {name}</h2>
            <p className="price">Price: ${price}</p>
            <p className="description">Description: {description}</p>
            <br />
        </div>
    );
};

export default Product;

