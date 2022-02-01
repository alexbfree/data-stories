<template>
  <component
    :is="component"
    v-bind="{ ...componentProps }"
  />
</template>

<script>
export default {
  props: {
    componentName: {
      type: String,
      required: true
    },
    componentProps: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    component() {
      return () => import(`@/components/${this.componentName}`)
    }
  }
}
</script>
