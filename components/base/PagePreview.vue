<template>
  <VCard
    class="pa-3" v-bind="$attrs"
  >
    <VImg
      :height="imageHeight"
      :src="image"
      contain
    >
    </VImg>
    <VCardTitle>{{ title }}</VCardTitle>
    <VCardText class="text--primary">
      <div> {{ description.slice(0, truncateText) }} {{ description.length > truncateText ? ' (...)': ''}} <a :href="`/${pageID}`">[Read more]</a></div>
    </VCardText>
  </VCard>
</template>

<script>
export default {
  name: 'PagePreviewBlock',
  props: {
    pageID: {
      type: String,
      required: true
    },
    imageHeight: {
      type: String,
      default: '200px'
    },
    truncateText: {
      type: Number,
      default: 200
    } 
  },
  data(){
    return {
      title: '',
      description: '',
      image: ''
    }
  },
  async fetch(){
    const resp = await fetch('/cms-data/stories/' + this.pageID + '.json')
    if (resp.ok) {
      const data = await resp.json()
      // TODO choose correct language ???
      const manifest = data.en
      this.title = manifest.title
      this.description = manifest.description
      this.image = manifest.image
    }
  }
}
</script>
<style scoped></style>
