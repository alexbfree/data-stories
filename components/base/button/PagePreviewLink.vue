<template>
  <v-menu
      open-on-hover
      offset-x
      offset-y
      left
      max-width="300px"
    >
      <template #activator="{ on, attrs }">
        <AnimatedLink v-bind="{text, page, attrs}" v-on="on" />
      </template>
      <PagePreview :page-i-d="page" image-height="100px" />
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
    page: {
      type: String,
      required: true
    }
  }
}
</script>
