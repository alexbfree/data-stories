<template>
  <div class="mt-6">
    <p class="headline font-weight-light mb-4 primary--text text-center">What to read next ?</p>
    <div class="d-flex flex-row" style="align-items: center">
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="page in pages"
            :key="page"
            :cols="4"
          >
            <VCard
              class="ma-3 pa-3"
            >
              <VImg
                height="200px"
                src="/hestialabs-logo.svg"
                contain
              >
              </VImg>
              <VCardTitle>Lorem ipsum</VCardTitle>
              <VCardText class="text--primary">
                <div>Lorem John Doe ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipi</div>
              </VCardText>

              <VCardActions>
                <v-spacer></v-spacer>
                <VBtn
                  color="primary"
                  text
                >
                  Read more
                </VBtn>
              </VCardActions>
            </VCard>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ReadAlsoBlock',
  props: {
    pages: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style scoped>

</style>
