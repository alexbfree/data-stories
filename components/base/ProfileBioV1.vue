<template>
  <VCard
    class="mx-auto"
    style="margin-top: 110px"
    tile
    dark
    color="primary"
  >
    <VRow
      align="end"
      class="fill-height"
    >
      <VCol
        align-self="center"
        class=""
        cols="12"
      >
        <div style="margin-top: -100px;text-align: center">
          <VAvatar color="#F0F0F0" size="170">
            <VAvatar
              class="profile"
              color="grey"
              size="160"
            >
              <VImg src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></VImg>
            </VAvatar>
          </VAvatar>
        </div>
      </VCol>
      <VCol class="py-0">
        <VListItem
          color="rgba(0, 0, 0, .4)"
          dark
        >
          <VListItemContent>
            <VListItemTitle class="text-h4 font-weight-bold">
              {{ name }}
            </VListItemTitle>
            <VLIstItemSubtitle>{{ jobTitle }}</VLIstItemSubtitle>
          </VListItemContent>
        </VListItem>
      </VCol>
      <VCol cols="6" class="py-4 pa-4">
        {{ description }}
      </VCol>
    </VRow>
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
    description: {
      type: String,
      default: () => 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix ansalutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes'
    }
  },
  methods: {
    getIcon(iconName) {
      return this.$vuetify.icons.values[iconName]
    }
  }
}
</script>
