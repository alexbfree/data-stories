<template>
  <VCard class="mx-auto" flat>
    <VCardText class="">
      <VRow dense>
        <VIcon large left color="primary">
          $vuetify.icons.mdiFormatQuoteOpen
        </VIcon>
      </VRow>
      <blockquote class="blockquote font-italic">
        <TextBlock :text="text" />
      </blockquote>
      <VRow dense style="justify-content: end">
        <VIcon large right color="primary">
          $vuetify.icons.mdiFormatQuoteClose
        </VIcon>
      </VRow>
      <div class="d-flex justify-space-between font-italic font-weight-thin">
        <span>
          <VIcon right color="primary"> $vuetify.icons.mdiMinus </VIcon>
          {{ author }}
        </span>
        <a :href="link"> {{ link }}</a>
      </div>
    </VCardText>
  </VCard>
</template>
<script>
import TextBlock from '@/components/blocks/TextBlock.vue'
export default {
  name: 'QuoteBlock',
  components: {
    TextBlock
  },
  props: {
    text: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: () => ''
    }
  }
}
</script>
