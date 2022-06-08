<template>
  <div class="weather-card">
    <div class="w-icon-wrap">
      <div class="w-icon">
        <weather-icon :weather="weather" />
      </div>
    </div>
    <div class="w-info">
      <div class="d-flex justify-content-between">
        <h1 class="text-white">
          {{ weather.name }}
        </h1>
        <div @click="remove" class="w-icon-close">
          <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor"  fill="none" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>
      </div>

      <p class="text-capitalize fs-5" style="color: rgb(255 255 255 / 50%);">
        {{ weather.weather[0].description }}
      </p>
      <p class="fs-2 text-white">
        {{ temperature }}
        <span v-if="unit === 'metric'">
          &#176; C
        </span>
        <span v-else>
          &#176; F
        </span>
      </p>

      <p class="" style="color: rgb(255 255 255 / 50%);">
        <span>{{ minTemperature }} &#176; </span> / <span>{{ maxTemperature }} &#176;</span>
      </p>
    </div>
  </div>
</template>

<script>
import WeatherIcon from '@/components/WeatherIcon'
export default {
  components: { WeatherIcon },
  props: {
    weather: {
      type: Object,
      required: true
    },
    weatherIndex: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      default: 'metric'
    }
  },
  computed: {
    temperature() {
      return Math.round(this.weather.main.temp)
    },
    minTemperature() {
      return Math.round(this.weather.main.temp_min)
    },
    maxTemperature() {
      return Math.round(this.weather.main.temp_max)
    }
  },
  methods: {
    remove () {
      this.$emit('remove', {
        'defaultCityIndex': this.weather.originIndex,
        'weatherCastIndex': this.weatherIndex
      })
    }
  }
}
</script>

<style>
.weather-card {
  background: rgb(255 255 255 / 35%);
  background: linear-gradient(157deg, rgb(164 176 193 / 54%) 0%, rgb(160 184 228 / 20%) 100%);
  margin-bottom: 1rem;
  border-radius: 2rem;
  padding: 1.5rem;
  display: flex;
  transition: all ease 0.6s;
}

.weather-card .w-icon-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.w-icon {
  width: 10rem;
  height: 10rem;
}

.w-icon img {
  width: 10rem;
}

.w-info {
  padding-left: 2rem;
  width: 100%;
}

.w-icon-close {
  width: 2rem;
  height: 2rem;
  opacity: 0;
  color: #a1b6d5;
  transition: opacity ease 0.3s;
}

.weather-card:hover .w-icon-close {
  opacity: 1;
}

.w-icon-close:hover {
  color: #d36767;
  cursor: pointer;
}
</style>
