<template>
  <span>{{ text }}</span>
</template>
<script>
export default {
  name: 'TextBlock',
  props: {
    text: {
      type: String,
      default: () => ''
    }
  }
}
</script>
