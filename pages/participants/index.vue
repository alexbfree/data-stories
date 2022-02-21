<template>
  <div>
    <ul v-for="person in persons" :key="person">
      <NuxtLink :to="`${person.slice(0, -5)}`">
        <li>{{ person }}</li>
      </NuxtLink>
    </ul>
  </div>
</template>
<script>
export default {
    data(){
        return {
            persons: []
        }
    },
    mounted() {
        const persons = require.context(
        '@/static/cms-data/persons/',
        true,
        /^.*\.json$/
        )
        this.persons = persons.keys()
    }
}
</script>
