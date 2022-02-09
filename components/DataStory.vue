<template>
  <VContainer v-if="manifest">
    <VRow v-for="(block, index) in manifest.buildingBlocks" :key="index" >
      <VCol cols="12">
        <ComponentCaller v-bind="{ block }" />
      </VCol>
    </VRow>
  </VContainer>
</template>
<script>
import ComponentCaller from '@/components/ComponentCaller.vue'
export default {
  name: 'DataStory',
  components: { ComponentCaller },
  props: {
    manifest: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
