const apiKey = "8db88de7cd9d7bbaa6c96c0b0f5073d0";
const city = "Kluang,MY";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the full data object to the console

    // Access specific data points
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    // Update your HTML elements
    document.getElementById("temperature").textContent = `${temperature}°C`; // Assumes metric units
    document.getElementById("description").textContent = description;
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);
  });
