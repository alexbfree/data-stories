<template>
  <DataStory :manifest="manifest" />
</template>

<script>
  export default {
    async asyncData({ params, error }) {
      const story = params.story
      const resp = await fetch('/cms-data/stories/' + story + '.json')
      if (!resp.ok) return error({ statusCode: resp.status, message: ' Page Not Found: ' + story })
      const data = await resp.json()
      // TODO: choose lang according to location ?
      const manifest = data.en
      return { manifest }
    },
  }
</script>