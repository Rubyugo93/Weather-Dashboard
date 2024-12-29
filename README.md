 Weather Dashboard (WEATHERLY) Description




The Weather Dashboard is a web application that provides real-time weather updates and 5-day forecasts for any city around the world. Users can search for a city to view the current temperature, humidity, wind speed, and weather conditions, making it a perfect tool for planning your day!

Features
🌍 Search by City: Enter the name of a city to get its current weather details.
📅 5-Day Forecast: See a detailed weather forecast for the next five days.
🌡️ Real-Time Updates: Get accurate weather information fetched from a reliable API.
❌ Error Handling: Displays appropriate messages for invalid city names or API errors.
📱 Responsive Design: Works seamlessly on desktop, tablet, and mobile devices.
Technologies Used
HTML: Markup for the structure of the application.
CSS (Tailwind CSS): Styling for a clean and responsive UI.
JavaScript: Dynamic content rendering and user interactions.
React: Component-based architecture for building the application.
Weather API: Fetching weather data from OpenWeatherMap.
Live Demo
You can access the live version of the app here:
👉 Weather Dashboard

Screenshots
Desktop View

Mobile View

How to Run Locally
Clone the Repository:
bash
Copy code
git clone https://github.com/Rubyugo93/Weather-Dashboard
Navigate to the Project Directory:
bash
Copy code
cd weather-dashboard
Install Dependencies (if using React or any package manager):
bash
Copy code
npm install
Start the App:
bash
Copy code
npm start
Open http://localhost:3000 in your browser to view the app.
API Configuration
This project uses the OpenWeatherMap API. To use this:

Sign up on the OpenWeatherMap website and generate an API key.
Add the API key to your project (e.g., in an .env file or directly in your JavaScript code).
Project Structure
bash
Copy code
weather-dashboard/
├── public/
│   ├── index.html
│   ├── favicon.ico
├── src/
│   ├── components/      # Reusable React components
│   ├── styles/          # CSS styles (including Tailwind config)
│   ├── App.js           # Main application file
│   ├── index.js         # Entry point
├── .env                 # Environment variables (API key)
├── package.json         # Project dependencies
└── README.md            # Project documentation
Challenges Faced
API Errors: Handling API limits and invalid city names was tricky but resolved with proper error handling in JavaScript.
Responsive Design: Ensuring the app looked good on all screen sizes required additional tweaks to CSS.
Data Parsing: Formatting the API response data to display it cleanly took careful mapping and debugging.
Future Improvements
🌙 Dark Mode: Add a toggle for light and dark themes.
❤️ Favorites: Allow users to save favorite cities for quick access.
📍 Geolocation: Automatically detect the user’s location for faster weather updates.
Author
👩‍💻 Rosemary Ipuole
Frontend Developer passionate about building user-friendly applications.
Portfolio | GitHub

License
This project is licensed under the MIT License.


 MY VERCEL LINK: https://weather-dashboard-eight-navy.vercel.app/
