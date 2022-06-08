<template>
  <div id="app">
    <div class="container" style="margin-top: 6rem;">
      <div class="d-flex justify-content-between border-bottom pb-4"
           style="border-bottom: 2px solid rgb(105 126 161 / 36%); ">
        <div class="d-flex align-items-center">
          <div style="width: 3rem;">
            <my-logo></my-logo>
          </div>
          <h4 class="text-white mx-3">Lekker weertje hè</h4>
        </div>

        <div class="text-white">
          C | F
        </div>
      </div>

      <div class="mt-5">
        <div class="mb-5">
          <input class="cityInput" placeholder="Voer een stad in..." v-model="cityName" @keyup.enter="addCity">
          <button class="citySubmit" @click="addCity">
            Toevoegen
          </button>
        </div>
        <weather-card
            v-for="(weatherData, index) in weatherCasts"
            :weather="weatherData"
            :weather-index="index"
            :key="`weather-card-${index}`"
            @remove="deleteCity"
        />
      </div>
    </div>
  </div>
</template>

<style>
body {
  height: 100vh;
  background: rgb(67, 86, 111);
  background: linear-gradient(157deg, rgba(67, 86, 111, 1) 0%, rgba(20, 54, 116, 1) 100%);
}

.cityInput {
  padding: 1rem;
  border-bottom-left-radius: 0.8rem;
  border-top-left-radius: 0.8rem;
  width: 24rem;
  color: white;
  border: 0;
  background: rgb(255 255 255 / 35%);
  background: linear-gradient(157deg, rgb(164 176 193 / 54%) 0%, rgb(160 184 228 / 20%) 100%);
}

.cityInput:focus {
  outline: 2px solid #8cb2fb;
}

.cityInput::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.citySubmit {
  background: linear-gradient(157deg, rgb(164 176 193 / 54%) 0%, rgb(160 184 228 / 20%) 100%);
  color: white;
  border: 0;
  padding: 1rem;
  border-bottom-right-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  transition: all ease 0.6s;
}

.citySubmit:hover {
  background: linear-gradient(157deg, rgb(140 178 251 / 66%) 0%, rgb(160 184 228 / 20%) 100%);
}
</style>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import WeatherCard from '@/components/WeatherCard'
import MyLogo from '@/components/MyLogo'

export default {
  name: 'App',
  components: {
    WeatherCard,
    MyLogo
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
      errors: []
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
      return this.weatherLookUp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${this.unit}&lang=nl&appid=4d1d1428cb00886d5476c104d3ea1b54`)
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
      this.defaultCities.forEach((cityName, originIndex) => {
        this.addCityToList(cityName, originIndex)
      })
    },

    async addCityToList (cityName, originIndex) {
      try {
        let cityWeatherData = await this.getWeatherByCityName(cityName)
        cityWeatherData.data['originIndex'] = originIndex
        this.weatherCasts.push(cityWeatherData.data)
        this.defaultCities.push(cityName)
        this.storeDefaultCitiesInLocalStorage()
      } catch (e) {
        this.errors.push(`Failed to add city: ${cityName}  to the list. Please check your input.`)
      }
    },

    addCity () {
      this.addCityToList(this.cityName)
      this.cityName = ''
    },

    storeDefaultCitiesInLocalStorage () {
      this.defaultCities = [...new Set(this.defaultCities)]
      localStorage.setItem('defaultCities', JSON.stringify(this.defaultCities))
    },

    deleteCity ({
      defaultCityIndex,
      weatherCastIndex
    }) {
      this.defaultCities.splice(defaultCityIndex, 1)
      this.weatherCasts.splice(weatherCastIndex, 1)
      this.storeDefaultCitiesInLocalStorage()
    }
  }
}
</script>
