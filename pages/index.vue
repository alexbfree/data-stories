<template>
    <DataStory :manifest="manifest"/>
</template>

<script>
import manifest from '@/manifest/mkn.json'
export default {
  name: 'IndexPage',
  data() {
    return {
      manifest
    };
  }
}
</script>
