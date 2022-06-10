<template functional>
  <span>
   <span v-if="props.unit === 'metric'">
            &#176; C
   </span>

    <span v-else>
          &#176; F
    </span>
  </span>
</template>

<script>
export default {
  props: {
    unit: {
      type: String,
      default: 'metric'
    }
  }
}
</script>
