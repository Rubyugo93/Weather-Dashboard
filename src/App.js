import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London'); // Initial city
  const [inputCity, setInputCity] = useState(''); // Temporary state for input value
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!city) return; // Do nothing if the city is empty
      setLoading(true); // Set loading to true before API call
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY; // Make sure to use the correct API key
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        setWeatherData(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false); // Ensure loading is stopped in case of an error
      }
    };

    fetchWeatherData(); // Fetch the weather whenever city changes
  }, [city]); // This hook runs when the 'city' state changes

  const handleCitySubmit = () => {
    if (inputCity) {
      setCity(inputCity); // Set the city state to the input value
      setInputCity(''); // Clear the input field after submitting
    }
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Weather Dashboard</h1>

      <div className="mb-6">
        <input
          type="text"
          className="p-2 rounded-lg"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)} // Update the inputCity state as user types
          placeholder="Enter city"
        />
        <button 
          onClick={handleCitySubmit} // Submit the city name to fetch weather
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
        >
          Get Weather
        </button>
      </div>

      {loading ? (
        <p className="text-lg">Loading...</p>
      ) : weatherData ? (
        <WeatherCard 
          city={weatherData.name} 
          temperature={(weatherData.main.temp - 273.15).toFixed(2)} // Convert from Kelvin to Celsius
          description={weatherData.weather[0].description} 
        />
      ) : (
        <p className="text-lg">No weather data available.</p>
      )}
    </div>
  );
}

export default App;
