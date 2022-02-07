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
      <div> {{ description }} <a> [Read more] </a></div>
    </VCardText>
  </VCard>
</template>

<script>
export default {
  name: 'PagePreviewBlock',
  props: {
    title: {
      type: String,
      default: 'Lorem ipsum'
    },
    description: {
      type: String,
      default: 'Lorem John Doe ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipi'
    },
    image: {
      type: String,
      default: '/hestialabs-logo.svg'
    },
    imageHeight: {
      type: String,
      default: '200px'
    }
  }
}
</script>
<style scoped></style>
