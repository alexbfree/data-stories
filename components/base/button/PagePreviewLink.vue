<template>
  <v-menu
      open-on-hover
      offset-x
      offset-y
      left
      max-width="300px"
    >
      <template #activator="{ on, attrs }">
        <AnimatedLink v-bind="{text, link, attrs}" v-on="on" />
      </template>
      <PagePreview image-height="100px" />
    </v-menu>
</template>

<script>
import AnimatedLink from './AnimatedLink.vue'
import PagePreview from '@/components/base/PagePreview.vue'
export default {
  components: { PagePreview, AnimatedLink },
  props: {
    text: {
      type: String,
      default: 'See also'
    },
    link: {
      type: String,
      default: 'true'
    }
  }
}
</script>
