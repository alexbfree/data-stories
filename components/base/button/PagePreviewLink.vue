<template>
  <v-menu
      open-on-hover
      offset-x
      offset-y
      left
      max-width="300px"
    >
      <template #activator="{ on, attrs }">
        <AnimatedLink v-bind="{text, attrs}" v-on="on" />
      </template>
      <PagePreviewBlock image-height="100px" />
    </v-menu>
</template>

<script>
import AnimatedLink from './AnimatedLink.vue'
import PagePreviewBlock from '@/components/blocks/PagePreviewBlock.vue'
export default {
  components: { PagePreviewBlock, AnimatedLink },
  props: {
    text: {
      type: String,
      default: 'See also'
    },
    url: {
      type: String,
      default: 'true'
    }
  }
}
</script>
