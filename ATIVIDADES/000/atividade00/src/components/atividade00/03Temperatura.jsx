import React from "react";

const Temperatura = () => {
  const celsiusParaFahrenheit = (c) => {
    return c * (9 / 5) + 32;
  };

  const fahrenheitParaCelsius = (f) => {
    return ((f - 32) * 5) / 9;
  };

  const kelvin = (k) => {
    let c = k - 273.15;
    let f = ((k - 273.15) * 9) / 5 + 32;
    return {
      celsius: c,
      fahrenheit: f,
    };
  };

  return (
    <div className="principal">
      <h1>Temperatura</h1>
      <h2>Celsius para Fahrenheit: {celsiusParaFahrenheit(100)}</h2>
      <h2>Fahrenheit para Celsius: {fahrenheitParaCelsius(100)}</h2>
      <h2>Kelvin para Celsius: {kelvin(100).celsius}</h2>
      <h2>Kelvin para Fahrenheit: {kelvin(100).fahrenheit}</h2>
    </div>
  );
};

export default Temperatura;
