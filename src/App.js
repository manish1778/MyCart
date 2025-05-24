import React, { useState } from "react";
import "./App.css";
import Product from "./Product";
import Laptop from "./Images/laptop.jpg";
import Smartphone from "./Images/smartphone.jpg";
import Headphone from "./Images/headphone.jpg";
import SmartWatch from "./Images/smartwatch.jpg";
import Tablet from "./Images/tablet.jpg";
import BluetoothSpeaker from "./Images/bluetoothspeaker.jpeg";
import GamingConsole from "./Images/gaming-console.jpg";
import Moniter from "./Images/4k-moniter.jpg";
import WirelessMouse from "./Images/Wireless Mouse.jpg";
import Keyboard from "./Images/Mechanical Keyboard.webp";
import HardDrive from "./Images/External Hard Drive.jpeg";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999,
      description: "A high-performance laptop.",
      image: Laptop,
    },
    {
      id: 2,
      name: "Smartphone",
      price: 699,
      description: "A latest model smartphone.",
      image: Smartphone,
    },
    {
      id: 3,
      name: "Headphones",
      price: 199,
      description: "Noise-cancelling headphones.",
      image: Headphone,
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 199,
      description: "A smartwatch with fitness tracking.",
      image: SmartWatch,
    },
    {
      id: 5,
      name: "Tablet",
      price: 499,
      description: "A lightweight tablet for productivity.",
      image: Tablet,
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 149,
      description: "Portable Bluetooth speaker with great sound.",
      image: BluetoothSpeaker,
    },
    {
      id: 7,
      name: "Gaming Console",
      price: 299,
      description: "Next-gen gaming console with amazing graphics.",
      image: GamingConsole,
    },
    {
      id: 8,
      name: "4K Monitor",
      price: 399,
      description: "High-resolution monitor for gaming and work.",
      image: Moniter,
    },
    {
      id: 9,
      name: "Wireless Mouse",
      price: 49,
      description: "Ergonomic wireless mouse for comfort.",
      image: WirelessMouse,
    },
    {
      id: 10,
      name: "Mechanical Keyboard",
      price: 89,
      description: "A mechanical keyboard for gamers and typists.",
      image: Keyboard,
    },
    {
      id: 11,
      name: "External Hard Drive",
      price: 129,
      description: "An external hard drive for storage.",
      image: HardDrive,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate the displayed products
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle page change
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="App">
      <h1>Explore Our Products</h1>
      <div className="product-grid">
        {displayedProducts.map((item) => (
          <Product
            key={item.id}
            // id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
