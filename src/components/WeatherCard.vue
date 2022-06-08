<template>
  <div>
    <h1>
      {{ weather.name }}
    </h1>
    <p>
      {{ weather.main.temp}}
    </p>
    <button @click="remove">
      Remove
    </button>
  </div>
</template>

<script>
export default {
  props: {
    weather: {
      type: Object,
      required: true
    },
    weatherIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    remove() {
      this.$emit('remove', {'defaultCityIndex': this.weather.originIndex, 'weatherCastIndex': this.weatherIndex})
    }
  }
}
</script>
