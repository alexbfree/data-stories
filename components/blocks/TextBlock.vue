<template>
  <span
    :class="[{
      'font-weight-bold': fontStyle === 'bold', 
      'font-italic': fontStyle === 'italic',
      'font-weight-regular': fontStyle === 'normal' ,
    }, customClasses]"
  >{{ text }}</span>
</template>
<script>
export default {
  name: 'TextBlock',
  props: {
    text: {
      type: String,
      default: () => ''
    },
    fontStyle: {
      type: String,
      default: 'normal',
      validator: value => ['normal', 'italic', 'bold'].includes(value)
    },
    customClasses: {
      type: String,
      default: () => ''
    }
  }
}
</script>
<style scoped>
.digipower {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold !important;
  font-style: italic;
}
</style>