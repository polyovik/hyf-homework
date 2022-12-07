const button = document.getElementsByClassName('search-button')[0];
const city = document.getElementsByClassName('city-name')[0];
const temperature = document.getElementsByClassName('temperature')[0];
const icon = document.getElementsByClassName('icon')[0];
const windSpeed = document.getElementsByClassName('wind-speed')[0];
const clouds = document.getElementsByClassName('clouds')[0];
const sunriseSunset = document.getElementsByClassName('sunrise-sunset')[0];
const humidity = document.getElementsByClassName('humidity')[0];
const weatherInfo = document.getElementsByClassName('weather-container')[0];
const googleMap = document.getElementById('map');

const getWeatherData = () => {
  const cityName = document.getElementsByClassName('city-search')[0].value.toLowerCase();
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4a49343b027f608a0a9cf132b15187b6`).then((response) => {
    if (!response.ok) {
      city.innerHTML = 'City not found!';
      return response.text().then((text) => {
        throw new Error(text);
      });
    } else {
      return response.json();
    }
  });
};

const renderWeatherInfo = (result) => {
  const cityName = document.getElementsByClassName('city-search')[0].value.toLowerCase();
  if (cityName.length !== 0) {
    getPosition(cityName);
    city.innerHTML = result.name;
    let temperatureInKelvin = result.main.temp;
    const temperatureInCelsius = temperatureInKelvin - 273.15;
    temperature.innerHTML = `${temperatureInCelsius.toFixed(0)}°C`;
    icon.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
    windSpeed.innerHTML = `Wind speed is ${result.wind.speed} m/s`;
    clouds.innerHTML = `How cloudy it is: ${result.clouds.all}%`;
    sunriseSunset.innerHTML = `Sunrise is at ${new Date(result.sys.sunrise * 1000).toLocaleTimeString()}, sunset is at ${new Date(
      result.sys.sunset * 1000
    ).toLocaleTimeString()}`;
    humidity.innerHTML = `Humidity: ${result.main.humidity}%`;
  }
};

const showWeather = () => {
  getWeatherData()
    .then((result) => {
      renderWeatherInfo(result);
    })
    .catch((err) => {
      reset();
    });
};

const reset = () => {
  temperature.innerHTML = '';
  icon.src = '';
  windSpeed.innerHTML = '';
  clouds.innerHTML = '';
  sunriseSunset.innerHTML = '';
  humidity.innerHTML = '';
  city.innerHTML = 'City not found!';
  googleMap.innerHTML = '';
};

const getPosition = (name) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=4a49343b027f608a0a9cf132b15187b6`)
    .then((response) => response.json())
    .then((data) => {
      showMap(data.coord.lat, data.coord.lon);
    });
};

const showMap = (latitude, longitude) => {
  if (latitude && longitude) {
    console.log(latitude, longitude);
    let map = new google.maps.Map(googleMap, {
      center: { lat: latitude, lng: longitude },
      zoom: 6,
    });
    new google.maps.Marker({
      position: map.center,
      map: map,
    });
  }
};

button.onclick = showWeather;
