const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const currentTempEl = document.getElementById('current-temp');
const image = document.getElementById('weather-img')


const apiKey = '49cc8c821cd2aff9af04c9f98c36eb74';
setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour
  const minutes = time.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM'

  timeEl.innerHTML = (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + `<span id="am-pm">${ampm}</span>`

  dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month]

}, 1000);
function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '191fda308c3dbcc1151286456239a50f';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `
          <h2>Weather in ${city}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Wind Speed: ${data.wind.speed}km/h</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Pressure: ${data.main.pressure}</p>
        `;
      const weatherCondition = data.weather[0].description;

      switch (weatherCondition) {
        case 'broken clouds' :
          image.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/625a747a-061b-477d-958f-a0d6cea9e4cb/dax9bd4-dd0da73d-5b6e-415c-b05e-19471f366e5a.jpg/v1/fill/w_1024,h_768,q_75,strp/broken_clouds_by_kevintheman_dax9bd4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvNjI1YTc0N2EtMDYxYi00NzdkLTk1OGYtYTBkNmNlYTllNGNiXC9kYXg5YmQ0LWRkMGRhNzNkLTViNmUtNDE1Yy1iMDVlLTE5NDcxZjM2NmU1YS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2HBtScMyydNDUe606gk2Jd8RHs6iM-76feSI7Dc3sLw'
          break;
        case 'smoke':
          image.src = 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202005/rain_660_140520062141.jpg?size=948:533'
          break;
        case 'haze':
          image.src = 'data:image/jpeg;base64,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'
          break;
        case 'Clear':
          image.src = 'asset/Images/clear.png.jpg'
          break;
        case 'Rain':
          image.src = 'asset/Images/rain.png.jpg'
          break;
        case 'Mist':
          image.src = 'asset/Images/mist.png.jpg'
          break;
        case 'Snow':
          image.src = 'asset/Images/snow.png.jpg'
          break;
        case 'overcast clouds':
          image.src='asset/Images/cloud.png.jpg'
          break;
        default:
        case 'Clear':
          image.src = 'http://openweathermap.org/img/wn/10d@2x.png'
          break;
          break;
      }





    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = 'Error fetching weather data. Please try again later.';
    });
}
