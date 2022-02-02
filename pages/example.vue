<template>
    <DataStory :manifest="manifest"/>
</template>

<script>
import manifest from '@/manifest/example'
export default {
  name: 'IndexPage',
  data() {
    return {
      manifest
    };
  }
}
</script>
