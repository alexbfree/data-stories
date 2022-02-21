<template>
  <div class="mt-6">
    <p class="headline font-weight-light mb-4 primary--text text-center">What to read next ?</p>
    <div class="d-flex flex-row" style="align-items: center">
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="page in pages"
            :key="page.story"
            :cols="4"
          >
            <PagePreview
              class="ma-3" flat :page-i-d="page.story"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import PagePreview from '~/components/base/PagePreview.vue'
export default {
  name: 'ReadAlsoBlock',
  components: { PagePreview },
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
