<template>
  <VCard class="mx-auto" flat>
    <VCardText class="">
      <VRow dense>
        <VIcon large left color="primary">
          $vuetify.icons.mdiFormatQuoteOpen
        </VIcon>
      </VRow>
      <blockquote class="blockquote font-italic">
        <MarkdownText :text="text" />
      </blockquote>
      <VRow dense style="justify-content: end">
        <VIcon large right color="primary">
          $vuetify.icons.mdiFormatQuoteClose
        </VIcon>
      </VRow>
      <div v-if="linkTxt !== ''" class="d-flex justify-space-between font-italic font-weight-thin">
        <span v-if="linkSrc === ''">
          <VIcon right color="primary"> $vuetify.icons.mdiMinus </VIcon>
          {{ linkTxt }}
        </span>
        <span v-else>
          <VIcon right color="primary"> $vuetify.icons.mdiMinus </VIcon>
          <a :href="linkSrc">{{ linkTxt }}</a>
        </span>
      </div>
    </VCardText>
  </VCard>
</template>
<script>
export default {
  name: 'QuoteWidget',
  components: {
    MarkdownText: () => import('@/components/widgets/MarkdownText')
  },
  props: {
    text: {
      type: String,
      required: true
    },
    linkSrc: {
      type: String,
      default: () => ''
    },
    linkTxt: {
      type: String,
      default: () => ''
    }
  }
}
</script>
