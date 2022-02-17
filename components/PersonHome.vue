<template>
  <VContainer v-if="manifest">
    <ProfileBlock :title= manifest.name :jobTitle="manifest.jobTitle" :description="manifest.description" :profilePicture="manifest.profilePicture"/>
    <h2 class="headline font-weight-light mb-4 primary--text mt-10 text-center"> My Stories </h2>
    <VContainer>
      <VRow>
        <VCol cols="12" v-if="!manifest.mystories.length">
          <h3 class="text-caption text-center text-h3"> No stories yet</h3>
        </VCol>
        <VCol cols="12" v-for="story in manifest.mystories" :key="story.id">
          <VCard hover class="card-outer" tile>
            <div class="d-flex flex-no-wrap">
              <div>
                <VAvatar 
                  size="200"
                  tile
                >
                  <VImg
                    src="/media/icon.png"
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
  }
}
</script>
<style scoped></style>