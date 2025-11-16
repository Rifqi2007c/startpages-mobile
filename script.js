    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const cityInput = document.getElementById('city-input');
    const searchButton = document.getElementById('search-button');
    const weatherDisplay = document.getElementById('weather-display');

    searchButton.addEventListener('click', () => {
        const city = cityInput.value;
        if (city) {
            fetchWeatherData(city);
        }
    });

    async function fetchWeatherData(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();

            if (data.cod === 200) {
                weatherDisplay.innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Condition: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            } else {
                weatherDisplay.innerHTML = `<p>Error: ${data.message}</p>`;
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            weatherDisplay.innerHTML = `<p>Error fetching weather data. Please try again.</p>`;
        }
    }
