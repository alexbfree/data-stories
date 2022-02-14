<template>
  <VueMarkdown :linkify="false" :prerender="preRender" :postrender="postRender">{{ text }}</VueMarkdown>
</template>
<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'TextBlock',
  components: {
    VueMarkdown
  },
  props: {
    text: {
      type: String,
      default: () => ''
    }
  },
  methods: {
    postRender(html){
      console.log(html.replaceAll("<p>", "").replaceAll("</p>", ""))
      return html.replaceAll("<p>", "").replaceAll("</p>", "")
    },
    preRender(markdown){
      console.log(markdown)
      return markdown
    }
  }
}
</script>
<style scoped>
.digipower {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold !important;
  font-style: italic;
}
</style>