const apiKey = ''

const cityInput = document.querySelector('#city-input')
const citySearch = document.querySelector('#search')

const cityName = document.querySelector('#city-name')
const cityCountry = document.querySelector('#city-country')
const tempNow = document.querySelector('#temp-now')
const tempMax = document.querySelector('#temp-max')
const tempMin = document.querySelector('#temp-min')
const feelsLike = document.querySelector('#feels-like')
const wind = document.querySelector('#wind-velocity')

const desc = document.querySelector('#description')
const humidity = document.querySelector('#humidity')
const clouds = document.querySelector('#clouds')

const sunrise = document.querySelector('#sunrise')
const sunset = document.querySelector('#sunset')
const timeNow = document.querySelector('#time-now')

const getDataWeather = async (city) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`)

    if (!response.ok) {
      throw new Error('Cidade inválida. Não foi possivel obter as informações')
    }

    const data = await response.json()

    return data

  } catch (err) {
    alert(err.message)
  }

}

const showWeatherData = async (city) => {
  const data = await getDataWeather(city)

  cityName.innerText = data.name
  cityCountry.innerText = data.sys.country
  tempNow.innerText = parseInt(data.main.temp)
  tempMax.innerText = parseInt(data.main.temp_max)
  tempMin.innerText = parseInt(data.main.temp_min)
  wind.innerText = data.wind.speed
  feelsLike.innerText = parseInt(data.main.feels_like)

  desc.innerText = data.weather[0].description
  clouds.innerText = data.clouds.all

  const sunriseData = data.sys.sunrise
  const sunriseTime = new Date(sunriseData * 1000)
  const hourSunrise = sunriseTime.getHours().toString().padStart(2, 0)
  const minutesSunrise = sunriseTime.getMinutes().toString().padStart(2, 0)

  const sunsetData = data.sys.sunset
  const sunsetTime = new Date(sunsetData * 1000)
  const hourSunset = sunsetTime.getHours().toString().padStart(2, 0)
  const minutesSunset = sunsetTime.getMinutes().toString().padStart(2, 0)

  const time = data.dt
  const timerNow = new Date(time * 1000)
  const hourTimer = timerNow.getHours().toString().padStart(2, 0)
  const minutesTimer = timerNow.getMinutes().toString().padStart(2, 0)

  sunrise.innerText = `${hourSunrise}:${minutesSunrise}`
  sunriseTime.innerText = `${hourSunset}:${minutesSunset}`
  timeNow.innerText = `${hourTimer}:${minutesTimer}`
}

citySearch.addEventListener('click', () => {
  const city = cityInput.value
  showWeatherData(city)
})
