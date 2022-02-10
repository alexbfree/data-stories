<template>
    <DataStory :manifest="manifest"/>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      manifest: {}
    };
  },
  created() {
      /*
      fetch('/manifest/mkn.json')
        .then(response => response.json())
          .then(data => (this.manifest = data))
      */
    }
}
</script>