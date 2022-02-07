<template>
    <DataStory :manifest="manifest"/>
</template>

<script>
import manifest from '@/manifest/example.json'
export default {
  name: 'IndexPage',
  data() {
    return {
      manifest
    };
  }
}
</script>
