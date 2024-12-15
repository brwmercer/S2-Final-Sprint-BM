const apiKey = "20c1759cffe38f4c09bf477e7f963fb8";

document.getElementById("fetch-weather").addEventListener("click", () => {
  const city = document.getElementById("city-input").value.trim();
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  console.log("Fetching weather data for:", city);

  fetch(apiUrl)
    .then(response => {
      console.log("Response received:", response.status);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Data received:", data);

      // Extract relevant weather data
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const weatherDescription = data.weather[0].description;

      // Update the DOM
      document.getElementById("temperature").textContent = temperature + "°C";
      document.getElementById("humidity").textContent = humidity + "%";
      document.getElementById("weather-description").textContent = weatherDescription;

      console.log("DOM updated successfully.");
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Unable to fetch weather data. Please try again.");
    });
});
