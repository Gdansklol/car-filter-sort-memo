import React, { useState, useEffect, useMemo } from "react";
import Car from "./components/Car";
import carsData from "./cars.json"; // Importera bildata från json-fil

function App() {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Uppdatera bilar state med data från json-fil när komponenten mountas
    setCars(carsData);
  }, []);

  const handleSearch = (event) => {
    // Uppdatera söktermen när användaren skriver i input-fältet
    setSearchTerm(event.target.value);
  };

  const filteredCars = useMemo(() => {
    // Filtrera bilar baserat på söktermen
    return cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [cars, searchTerm]);

  return (
    <div className="Car-input">
      <input
      className="input-box"
        type="text"
        placeholder="Search by car name "
        value={searchTerm}
        onChange={handleSearch}
      />
      {searchTerm &&
        filteredCars.map((car) => (
          <Car key={car.id} car={car} />
        ))}
    </div>
  );
}

export default App;
