<template>
  <VueMarkdown :linkify="false" html :postrender="postRender" :prerender="preRender">{{ text }}</VueMarkdown>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import Vue from 'vue'
import Vuetify from "vuetify"
import vuetifyOptions from '@/vuetify.options'

import ChatBlock from '@/components/blocks/ChatBlock.vue'
import CodeBlock from '@/components/blocks/CodeBlock.vue'
import ImageBlock from '@/components/blocks/ImageBlock.vue'
import ListBlock from '@/components/blocks/ListBlock.vue'
import LongQuoteBlock from '@/components/blocks/LongQuoteBlock.vue'
import PagePreviewLink from '@/components/base/button/PagePreviewLink.vue'
import QuoteBlock from '@/components/blocks/QuoteBlock.vue'
import VoiceBlock from '@/components/blocks/VoiceBlock.vue'

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
  mounted(){
    console.log(this.text)
    const vuetify = new Vuetify(vuetifyOptions)
    this.$el.querySelectorAll('span[data-component]').forEach(el => {
      const name = el.getAttribute('data-name')
      const props = JSON.parse(el.getAttribute('data-props'))
      let ComponentClass = null
      switch (name) {
        case 'ChatBlock': 
          ComponentClass = Vue.extend(ChatBlock)
          break
        case 'CodeBlock': 
          ComponentClass = Vue.extend(CodeBlock)
          break
        case 'ImageBlock': 
          ComponentClass = Vue.extend(ImageBlock)
          break
        case 'ListBlock': 
          ComponentClass = Vue.extend(ListBlock)
          break
        case 'LongQuoteBlock': 
          ComponentClass = Vue.extend(LongQuoteBlock)
          break
        case 'PagePreviewLink': 
          ComponentClass = Vue.extend(PagePreviewLink)
          break
        case 'QuoteBlock': 
          ComponentClass = Vue.extend(QuoteBlock)
          break
        case 'VoiceBlock': 
          ComponentClass = Vue.extend(VoiceBlock)
          break
      }
      const instance = new ComponentClass({
          vuetify,
          propsData: props
      })
      instance.$mount() // pass nothing
      el.appendChild(instance.$el)
    });
  },
  methods: {
    postRender(html){
      // Trim first and last <p> tags
      // console.log(html)
      return  html.replace(/^(<p>)/, "").replace(/(<\/p>\n)$/, "")
    },
    preRender(markdown){
      // console.log(markdown)
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