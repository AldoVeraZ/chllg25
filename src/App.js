import React, { useState } from "react";
import ClimaCiudad from "./components/ClimaCiudad"; // Asegúrate de que la ruta sea correcta
import "./App.css";

function App() {
  const [ciudad, setCiudad] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setCiudad(e.target.value);
    }
  };

  return (
    <div className="container">
      <h2 className="nanum-gothic-extrabold">Weather Consultant Global</h2>
      <div className="row">
        <input
          onKeyDown={handleSearch}
          type="text"
          autoFocus
          placeholder="Escribe una ciudad y presiona Enter"
        />
      </div>
      <ClimaCiudad ciudad={ciudad} />
    </div>
  );
}

export default App;
