// src/components/WeatherCard.js
import React from 'react';

const WeatherCard = ({ city, temperature, description }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">{city}</h2>
      <p className="text-lg">Temperature: {temperature}°C</p>
      <p className="text-lg">Weather: {description}</p>
    </div>
  );
};

export default WeatherCard;
