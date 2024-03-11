import React, { useState, useEffect, useMemo } from "react";
import Car from "./components/Car";

function App() {
  const [cars, setCars] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    fetch("/cars.json") // Se till att sökvägen till filen är korrekt
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching cars data: ", error));
  }, []);

  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };

  const filteredCars = useMemo(() => {
    return cars.filter((car) =>
      car.name.toLowerCase().includes(searchItem.toLowerCase())
    ).sort((a, b) => a.price - b.price);
  }, [cars, searchItem]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search by car"
        value={searchItem}
        onChange={handleSearch}
      />
      {filteredCars.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  );
}

export default App;
