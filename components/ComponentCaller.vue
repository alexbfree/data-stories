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
      return () => import(`@/components/${this.type}`)
    }
  }
}
</script>
