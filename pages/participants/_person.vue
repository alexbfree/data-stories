<template>
  <v-container>
    <v-row v-if="!manifest" class="text-center">
      <v-col>
        <VProgressCircular
          :size="50"
          color="primary"
          indeterminate
        />
      </v-col>
    </v-row>
    <PersonHome v-else :manifest="manifest" />
  </v-container>
</template>

<script>
  export default {
    async asyncData({ params, error }) {
      const person = params.person
      const resp = await fetch('/cms-data/persons/' + person + '.json')
      if (!resp.ok) return error({ statusCode: resp.status, message: ' Page Not Found: ' + story })
      const data = await resp.json()
      // TODO: choose lang according to location ?
      const manifest = data.en
      return { manifest }
    },
  }
</script>