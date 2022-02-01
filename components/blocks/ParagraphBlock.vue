<template>
    <div class="py-4 mt-4">
      <h2 class="headline font-weight-light mb-4 primary--text">{{ title }}</h2>
      <span v-for="(elem, index ) in content" :key="index">
        <ComponentCaller :component-name="elem.component" :component-props="elem.props" />
      </span>
    </div>
</template>
<script>
import ComponentCaller from '@/components/ComponentCaller.vue'
export default {
  name: 'ParagraphBlock',
  components: { ComponentCaller },
  props: {
    title: {
      type: String,
      default: () => 'Title'
    },
    content: {
      type: Array,
      default: () => []
    }
  }
}
</script>
