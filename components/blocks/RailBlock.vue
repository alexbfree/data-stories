<template>
  <VContainer>
    <FlowBlock v-for="fb in list" :key="fb.title" v-bind="{...fb}"/>
  </VContainer>
</template>
<script>
import FlowBlock from '@/components/blocks/FlowBlock.vue'
export default {
  name: 'RailBlock',
  components: {
    FlowBlock
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>
