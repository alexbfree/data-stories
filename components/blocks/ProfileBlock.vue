<template>
    <VCard
      class="mx-auto"
      tile
      dark
      color="primary"
    >
      <v-row v-if="!loaded" align="center" justify="center" class="text-center">
        <v-col>
          <VProgressCircular
            :size="150"
            color="primary"
            indeterminate
          />
        </v-col>
      </v-row>
      <div v-else class="d-flex flex-row" style="align-items: center">
        <VAvatar class="ma-4" color="#F0F0F0" size="170">
          <VAvatar
            color="grey"
            size="160"
          >
            <VImg :src="profilePicture"></VImg>
          </VAvatar>
        </VAvatar>
        <div class="ml-6 ma-4 pr-3">
          <div class="text-h4 font-weight-bold">
                {{ title }}
          </div>
          <div class="text-subtitle-1">
                {{ jobTitle }}
          </div>
          <p class="text-subtitle-2 mt-4">
            <MarkdownText :text="description" />
          </p>
        </div>
      </div>
    </VCard>
</template>
<script>
export default {
  name: 'ProfileBlock',
  components: {
    MarkdownText: () => import('@/components/widgets/MarkdownText')
  },
  props: {
    profileID: {
      type: String,
      default: () => ''
    }
  },
  data(){
    return {
      loaded: false,
      title: '',
      jobTitle: '',
      profilePicture: '',
      description: ''
    }
  },
  async fetch(){
    const resp = await fetch('/cms-data/persons/' + this.profileID + '.json')
    if (resp.ok) {
      const data = await resp.json()
      // TODO choose correct language ???
      const manifest = data.en
      this.title = manifest.name
      this.jobTitle = manifest.jobTitle
      this.profilePicture = manifest.profilePicture
      this.description = manifest.description
    }
    this.loaded = true
  }
}
</script>
