<template>
  <VContainer v-if="manifest">
    <ProfileBlock :profile-i-d="manifest.id"/>
    <h2 class="headline font-weight-light mb-4 primary--text mt-10 text-center"> My Stories </h2>
    <VContainer>
      <VRow>
        <VCol v-if="!manifest.mystories.length" cols="12">
          <h3 class="text-caption text-center text-h3"> No stories yet</h3>
        </VCol>
        <VCol v-for="story in stories" :key="story.id" cols="12">
          <VCard hover class="card-outer" tile :to="`/${story.id}`">
            <div class="d-flex flex-no-wrap">
              <div>
                <VAvatar 
                  size="200"
                  tile
                >
                  <VImg
                    :src="story.image"
                  ></VImg>
                </VAvatar>
              </div>
              <div>
                <VCardTitle
                  class="text-h5"
                  v-text="story.title"
                ></VCardTitle>
                <VCardSubtitle
                  class="mt-3"
                  v-text="story.description"
                ></VCardSubtitle>
              </div>
            </div>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </VContainer>
</template>
<script>
import ProfileBlock from '@/components/blocks/ProfileBlock.vue'
export default {
  name: 'PersonHome',
  components: { ProfileBlock },
  props: {
    manifest: {
      type: Object,
      default: () => {}
    }
  },
  data(){
    return {
      stories: []
    }
  },
  async fetch(){
    for (const story of this.manifest.mystories) {
      const resp = await fetch('/cms-data/stories/' + story.story + '.json')
      if (resp.ok) {
        const data = await resp.json()
        // TODO choose correct language ???
        const manifest = data.en
        this.stories.push({id: manifest.id, title: manifest.title, description: manifest.description, image: manifest.image})
      }
    }
  }
}
</script>
<style scoped></style>