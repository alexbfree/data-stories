<template>
  <component
    :is="component"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    component() {
      console.log(this.$attrs)
      return () => import(`@/components/${this.type}`)
    }
  }
}
</script>
