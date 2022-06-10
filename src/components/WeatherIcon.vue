<template>
  <div>
    <img :src="currentIcon">
  </div>
</template>

<script>
export default {
  props: {
    weather: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentIcon: `/weather-icons/${this.weather.weather[0].icon}.png`,
    }
  },

  mounted () {
    this.currentIcon = `/weather-icons/${this.weather.weather[0].icon}.png`
  }
}
</script>
