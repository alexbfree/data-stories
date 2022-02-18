<template>
  <VContainer>
    <div class="overline">{{ title }}</div>
    <PrismEditor
      v-model="code"
      class="my-editor"
      :highlight="highlighter"
      :line-numbers="lineNumbers"
      :readonly="readonly"
    ></PrismEditor>
    <div style="text-align: end; margin-top: 0px; font-size: 12px">
      {{ beforeLinkTxt }}
      <a target="_blank" :href="linkSrc">{{ linkTxt }}</a>
    </div>
  </VContainer>
</template>

<script>
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/themes/prism-tomorrow.css' // import syntax highlighting styles

export default {
  name: 'CodeWidget',
  components: {
    PrismEditor
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: 'javascript',
      validator: value => ['text', 'javascript', 'json'].includes(value)
    },
    lineNumbers: {
      type: Boolean,
      default: true
    },
    readonly: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    beforeLinkTxt: {
      type: String,
      default: ''
    },
    linkSrc: {
      type: String,
      default: ''
    },
    linkTxt: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      code: this.text
    }
  },
  methods: {
    highlighter(code) {
      switch (this.language) {
        case 'javascript':
          return highlight(code, languages.js)
        case 'json':
          return highlight(code, languages.json)
        default:
          return highlight(code, languages.text)
      }
    }
  }
}
</script>

<style lang="scss">
// required class
.my-editor {
  background: #fafafa;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

// optional
.prism-editor__textarea:focus {
  outline: none;
}

// not required:
.height-300 {
  height: 300px;
}
</style>
