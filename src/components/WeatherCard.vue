<template>
  <div class="weather-card">
    <div class="w-show-more">
      <div class="w-show-more-icon" :class="{'rotate-up' : displayMore}" @click="displayMore = !displayMore">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
    <div class="w-icon-wrap">
      <div class="w-icon">
        <weather-icon :weather="weather" />
      </div>
    </div>
    <div class="w-more-info" :class="{'show-with-transition': displayMore}">
      <h1 class="text-white">Insert feature</h1>
    </div>
    <div class="w-info" :class="{'hide-with-transition': displayMore}">
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
  data() {
    return {
      displayMore: false,
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
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
  position: relative;
  overflow: hidden;
}

.w-more-info {
  position: absolute;
  transform: translateY(-16rem);
  transition: all ease 0.6s;
  padding-left: 12rem;
}

.hide-with-transition {
  transform: translateY(16rem);
}

.show-with-transition {
  transform: translateY(0rem);
}

.w-show-more {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
}

.w-show-more-icon {
  width: 2rem;
  height: 2rem;
  color: white;
  opacity: 0;
  margin-bottom: 1rem;
  border-radius: 1rem;
  transition: all ease 0.4s;
  cursor: pointer;
}

.w-show-more-icon:hover {
  background-color: cornflowerblue;
}

.rotate-up {
  transform: rotateX(180deg);
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
  transition: all ease 0.6s;
}

.w-icon-close {
  width: 2rem;
  height: 2rem;
  opacity: 0;
  color: #a1b6d5;
  transition: opacity ease 0.3s;
}

.weather-card:hover .w-icon-close, .weather-card:hover .w-show-more-icon {
  opacity: 1;
}

.w-icon-close:hover {
  color: #d36767;
  cursor: pointer;
}
</style>
