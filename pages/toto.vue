<template>
  <DataStory :manifest="manifest" />
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      manifest: {},
    }
  },
  async created() {
    const resp = await fetch('/cms-data/stories/toto.json')
    const data = await resp.json()
    this.manifest = data.en
  },
}
</script>
