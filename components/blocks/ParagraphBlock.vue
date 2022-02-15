<template>
    <div class="py-4 mt-4">
      <h2 class="headline font-weight-light mb-4 primary--text">{{ title }}</h2>
      <TextBlock :text="content" />
    </div>
</template>
<script>
export default {
  name: 'ParagraphBlock',
  components: { 
    TextBlock: () => import('@/components/blocks/TextBlock.vue')
   },
  props: {
    title: {
      type: String,
      default: () => 'Title'
    },
    content: {
      type: String,
      default: () => 'Lorem John Doe ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
    }
  }
}
</script>
