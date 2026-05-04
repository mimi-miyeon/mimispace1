import { CONFIG } from './config.js';

export async function fetchWeatherData() {
  const tempEl = document.getElementById('temp');
  const weatherIconEl = document.getElementById('weatherIcon');
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${CONFIG.WEATHER_API_KEY}&q=${CONFIG.WEATHER_API_Q}&aqi=no`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();

    const temperatureCelsius = data.current.temp_c;
    tempEl.innerText = temperatureCelsius + "'C";

    const weatherImg = data.current.condition;
    weatherIconEl.setAttribute('src', weatherImg.icon);
    weatherIconEl.setAttribute('alt', weatherImg.text);
  } catch (error) {
    tempEl.innerText = "🥶";
    console.error('Error fetching weather data:', error);
  }
}
