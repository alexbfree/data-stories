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
            <PagePreviewBlock
              class="ma-3" flat
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import PagePreviewBlock from '~/components/blocks/PagePreviewBlock.vue'
export default {
  name: 'ReadAlsoBlock',
  components: { PagePreviewBlock },
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
