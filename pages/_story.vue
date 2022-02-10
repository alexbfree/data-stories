<template>
  <v-container fill-height fluid>
    <v-row v-if="!manifest" align="center" justify="center" class="text-center">
      <v-col>
        <VProgressCircular
          :size="50"
          color="primary"
          indeterminate
        />
      </v-col>
    </v-row>
    <DataStory v-else :manifest="manifest" />
  </v-container>
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