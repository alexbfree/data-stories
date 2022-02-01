<template>
  <span>{{ value }}</span>
</template>
<script>
export default {
  name: 'TextBlock',
  props: {
    value: {
      type: String,
      default: () => ''
    }
  }
}
</script>
