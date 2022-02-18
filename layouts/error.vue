<template>
  <VContainer fluid>
    <VRow align="center" justify="center" class="flex-column">
      <h1 class="h1">{{ title }}</h1>
      <VImg
        width="300"
        src="/media/logo-hestia.svg"
        lazy-src="/media/logo-hestia.svg"
        alt="Hestia.ai logo"
        contain
      />
      <BaseButton nuxt to="/" icon="mdiHome" text="Home page" />
    </VRow>
  </VContainer>
</template>

<script>
export default {
  name: 'ErrorLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  computed: {
    title() {
      return (
        this.error.message ||
        (this.error.statusCode === 404 ? '404 Not Found' : 'An error occurred')
      )
    }
  }
}
</script>
