<template>
  <div>
    <h1>
      {{ weather.name }}
    </h1>
    <p>
      {{ weather.main.temp}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    weather: {
      type: Object,
      required: true
    }
  }
}
</script>
