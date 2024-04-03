import React from "react";

const Icons = (icon) => {
  let iconName;
  let altText;

  // Define la URL del icono y el texto alternativo basado en el icono recibido
  switch (icon) {
    case "Thunderstorm":
      iconName = "icons/thunderstorms-rain.svg";
      altText = "Tormenta";
      break;
    case "Drizzle":
      iconName = "icons/drizzle.svg";
      altText = "Llovizna";
      break;
    case "Rain":
      iconName = "icons/rain.svg";
      altText = "Lluvia";
      break;
    case "Snow":
      iconName = "icons/snowy.svg";
      altText = "Nieve";
      break;
    case "Clear":
      iconName = "icons/clear-day.svg";
      altText = "Limpio";
      break;
    case "Atmosphere":
      iconName = "icons/weather.svg";
      altText = "Atmósfera";
      break;
    case "Clouds":
      iconName = "icons/fog.svg"; // Asegúrate de tener este ícono en tus archivos si quieres que represente nubes
      altText = "Nublado";
      break;
    case "Fog":
      iconName = "icons/fog.svg";
      altText = "Niebla";
      break;
    case "Haze":
      iconName = "icons/haze.svg";
      altText = "Bruma";
      break;
    case "Smoke":
      iconName = "icons/smoke.svg";
      altText = "Humo";
      break;
    default:
      iconName = "icons/clear-day.svg";
      altText = "Despejado";
  }

  // Devuelve un elemento img de React con la ruta correcta y el texto alternativo
  return <img src={process.env.PUBLIC_URL + "/" + iconName} alt={altText} />;
};

export default Icons;
