<template>
    <div class="quoteBlock pa-3 ma-3 font-italic">
      <TextBlock :text="text" />
      <div class="link">
        <a :href="linkSrc"> {{ linkTxt }} </a>
      </div>
    </div>
</template>
<script>
export default {
  name: 'LongQuoteBlock',
  components: {
    TextBlock: () => import('@/components/blocks/TextBlock.vue')
  },
  props: {
    text: {
      type: String,
      default: () => 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix ansalutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes'
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
<style scoped>
.quoteBlock {
  border: 0.3rem #58539E solid;
  border-radius: 1rem;
  position: relative;
}
.link {
  position: absolute;
  padding-right: 1rem;
  padding-left: 1rem;
  background: white;
  right: 10px;
  z-index: 2;
}
</style>