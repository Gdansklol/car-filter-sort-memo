import React from "react";
import "./Car.css";

const Car = ({ car }) => {
  return (
    <div className="Car">
      <h2>{car.name}</h2>
      <p>{car.description}</p>
      <p>Price: {car.price}</p>
    </div>
  );
};

export default Car;
