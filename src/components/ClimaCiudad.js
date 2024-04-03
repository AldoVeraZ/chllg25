import React, { useState, useEffect } from "react";
import Icons from "./Icons"; // Verifica que la ruta al archivo Icons.js sea correcta

function ClimaCiudad({ ciudad }) {
  const [temperatura, setTemperatura] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [icon, setIcon] = useState("");

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    const obtenerDatos = async () => {
      if (ciudad) {
        try {
          const respuesta = await fetch(URL);
          const datos = await respuesta.json();

          if (!respuesta.ok) {
            throw new Error("Ciudad no encontrada");
          }

          const temp = Math.round(datos.main.temp);
          setTemperatura(temp);
          setIcon(datos.weather[0].main);

          if (temp > 30) {
            setMensaje("Hace mucho calor");
          } else if (temp < 10) {
            setMensaje("Hace mucho frío");
          } else {
            setMensaje(""); // Deja este mensaje vacío o establece un mensaje por defecto
          }
        } catch (error) {
          console.error(error);
          setMensaje(error.message);
        }
      }
    };

    obtenerDatos();
  }, [ciudad, URL]);

  return (
    <div className="card">
      {temperatura !== null ? (
        <div className="card-container">
          <h1 className="city-name">{ciudad}</h1>
          <p className="temp">{temperatura}&deg;C</p>
          {mensaje && <p className="mensaje">{mensaje}</p>}
          <div className="icon">{Icons(icon)}</div>
        </div>
      ) : (
        <p>{mensaje || "Ingresa una ciudad para buscar el clima"}</p>
      )}
    </div>
  );
}

export default ClimaCiudad;
