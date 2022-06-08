<template>
  <div id="app">
    <h1>Lekker weertje hè</h1>

    <weather-card
        v-for="(weatherData, index) in weatherCasts"
        :weather="weatherData"
        :key="`weather-card-${index}`"
    />

    {{ errors }}
    {{ cityName }}
    <div>
      <input v-model="cityName" @keyup.enter="addCity">
      <button @click="addCity">
        Add
      </button>
    </div>

  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import WeatherCard from '@/components/WeatherCard'

export default {
  name: 'App',
  components: {
    WeatherCard
  },
  data () {
    return {
      cityData: null,
      weatherLookUp: null,
      defaultCities: [
        'Amsterdam',
      ],
      weatherCasts: [],
      unit: 'metric',
      cityName: '',
      errors: [
      ]
    }
  },
  mounted () {
    console.log(localStorage.getItem('defaultCities'))
    let localDefaultCities = JSON.parse(localStorage.getItem('defaultCities'))
    if (localDefaultCities) this.defaultCities = localDefaultCities

    this.getDefaultWeather()
  },
  methods: {
    async searchCity (city) {
      return this.cityData = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=4d1d1428cb00886d5476c104d3ea1b54`)
    },

    async getWeatherByLatLon (lat, lon) {
      return this.weatherLookUp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${this.unit}&appid=4d1d1428cb00886d5476c104d3ea1b54`)
    },

    async getWeatherByCityName (city) {
      try {
        let cityData = await this.searchCity(city)
        return await this.getWeatherByLatLon(cityData.data[0].lat, cityData.data[0].lon)
      } catch (e) {
        this.errors.push(`Could not find city: ${city}`)
      }
    },

     getDefaultWeather () {
      for (const cityName of this.defaultCities) {
        this.addCityToList(cityName)
      }
    },

    async addCityToList(cityName) {
      try {
        let cityWeatherData = await this.getWeatherByCityName(cityName)
        this.weatherCasts.push(cityWeatherData.data)
        this.defaultCities.push(cityName)
        this.defaultCities = [... new Set(this.defaultCities)]
        localStorage.setItem('defaultCities', JSON.stringify(this.defaultCities))
      } catch (e) {
        this.errors.push(`Failed to add city: ${cityName}  to the list. Please check your input.`)
      }
    },

    addCity() {
      this.addCityToList(this.cityName)
      this.cityName = ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
