<template>
  <component
    :is="component"
    v-bind="componentInfos.props"
  />
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      required: true
    }
  },
  computed: {
    component() {
      return () => import(`@/components/${this.componentInfos.type}`)
    },
    componentInfos(){
      const {type, ...props} = this.block
      return { type, props}
    }
  }
}
</script>
