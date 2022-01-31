<template>
    <VCard
      class="mx-auto"
      tile
      dark
      color="primary"
    >
      <div class="d-flex flex-row" style="align-items: center">
        <VAvatar class="ma-4" color="#F0F0F0" size="170">
          <VAvatar
            color="grey"
            size="160"
          >
            <VImg :src="profilePicture"></VImg>
          </VAvatar>
        </VAvatar>
        <div class="py-0 ml-6">
          <div class="text-h4 font-weight-bold">
                {{ name }}
          </div>
          <div class="text-subtitle-1">
                {{ jobTitle }}
          </div>
          <p class="text-subtitle-2 mt-4">
            {{ description }}
          </p>
        </div>
      </div>
    </VCard>
</template>
<script>
export default {
  name: 'ProfileBioV1',
  props: {
    name: {
      type: String,
      default: () => 'John Doe'
    },
    jobTitle: {
      type: String,
      default: () => 'Journalist at LeTemps.ch'
    },
    profilePicture: {
      type: String,
      default: () => 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg'
    },
    description: {
      type: String,
      default: () => 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix ansalutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes'
    }
  }
}
</script>
