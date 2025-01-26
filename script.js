const apiKey = "92ba08408533b3e246fe207645d837e5";

document.getElementById('location-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page
    getWeather();
});

async function getWeather() {
    const locationInput = document.getElementById('location-input');
    const weatherDataEl = document.getElementById('weather-data');

    weatherDataEl.textContent = 'Loading...';

    try {
        // Use HTTPS protocol for the fetch URL
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&appid=${apiKey}&units=metric`);

        // Check if the response is okay
        if (!response.ok) throw new Error('City not found');

        const data = await response.json();

        // Display weather data
        weatherDataEl.textContent = `City: ${data.name}, Temperature: ${data.main.temp}°C, Weather: ${data.weather[0].description}`;
        
    } catch (error) {
        // Display error message
        weatherDataEl.textContent = `Error: ${error.message}`;
    }

    // Clear the input field after fetching data
    locationInput.value = '';
}
