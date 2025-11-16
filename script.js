const apiKey = '8db88de7cd9d7bbaa6c96c0b0f5073d0';
const city = 'London';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log the data to see its structure
        // Call a function to display the data
        displayWeather(data);
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        document.getElementById('weather-info').innerHTML = '<p>Could not retrieve weather data.</p>';
    });

function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weather-info');
    if (data && data.main && data.weather && data.weather[0]) {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        weatherInfoDiv.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
    } else {
        weatherInfoDiv.innerHTML = '<p>Could not retrieve weather data.</p>';
    }
}

