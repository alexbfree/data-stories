<template>
  <VueMarkdown :linkify="false" html :postrender="postRender" :prerender="preRender" :source="text"></VueMarkdown>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import Vue from 'vue'
import Vuetify from "vuetify"
import vuetifyOptions from '@/vuetify.options'

import ChatWidget from '@/components/widgets/ChatWidget.vue'
import CodeWidget from '@/components/widgets/CodeWidget.vue'
import ImageWidget from '@/components/widgets/ImageWidget.vue'
import IconsListWidget from '@/components/widgets/IconsListWidget.vue'
import LongQuoteWidget from '@/components/widgets/LongQuoteWidget.vue'
import PagePreviewLink from '@/components/base/button/PagePreviewLink.vue'
import QuoteWidget from '@/components/widgets/QuoteWidget.vue'
import VoiceWidget from '@/components/widgets/VoiceWidget.vue'

export default {
  name: 'MarkdownText',
  components: {
    VueMarkdown
  },
  props: {
    text: {
      type: String,
      default: () => ''
    }
  },
  watch: { 
    text() { this.parseText() }
  },
  mounted(){
    this.parseText()
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
    },
    parseText(){
      const vuetify = new Vuetify(vuetifyOptions)
      this.$el.querySelectorAll('span[data-component]').forEach(el => {
        const name = el.getAttribute('data-name')
        const props = JSON.parse(el.getAttribute('data-props'))
        let ComponentClass = null
        switch (name) {
          case 'ChatWidget': 
            ComponentClass = Vue.extend(ChatWidget)
            break
          case 'CodeWidget': 
            ComponentClass = Vue.extend(CodeWidget)
            break
          case 'ImageWidget': 
            ComponentClass = Vue.extend(ImageWidget)
            break
          case 'IconsListWidget': 
            ComponentClass = Vue.extend(IconsListWidget)
            break
          case 'LongQuoteWidget': 
            ComponentClass = Vue.extend(LongQuoteWidget)
            break
          case 'PagePreviewLink': 
            ComponentClass = Vue.extend(PagePreviewLink)
            break
          case 'QuoteWidget': 
            ComponentClass = Vue.extend(QuoteWidget)
            break
          case 'VoiceWidget': 
            ComponentClass = Vue.extend(VoiceWidget)
            break
        }
        const instance = new ComponentClass({
            vuetify,
            propsData: props
        })
        instance.$mount() // pass nothing
        el.appendChild(instance.$el)
      });
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