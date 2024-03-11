import React from "react";

const Car = ({ car }) => {
  return (
    <div>
      <h2>{car.name}</h2>
      <p>{car.description}</p>
      <p>Price: {car.price}</p>
    </div>
  );
};

export default Car;
