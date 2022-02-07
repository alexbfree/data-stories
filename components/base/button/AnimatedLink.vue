<template>
  <v-menu
      open-on-hover
      offset-x
      offset-y
      left
      max-width="300px"
    >
      <template #activator="{ on, attrs }">
        <a
          :href="url" 
          v-bind="attrs"
          class="link animate" 
          v-on="on">
          {{ text }}
        </a>
      </template>

      <VCard
        class="pa-3"
      >
        <VImg
          height="100px"
          src="/hestialabs-logo.svg"
          contain
        >
        </VImg>
        <VCardTitle>Lorem ipsum</VCardTitle>
        <VCardText class="text--primary">
          <div>Lorem John Doe ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipi <a> [Read more] </a></div>
        </VCardText>
      </VCard>
    </v-menu>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'See also'
    },
    url: {
      type: String,
      default: 'true'
    }
  }
}
</script>
<style>
a.link {
  color: inherit;
  text-decoration: none;
}

a.link {
  background: 
    linear-gradient(to right, rgba(100, 200, 200, 1), rgba(100, 200, 200, 1)),
    linear-gradient(to right, rgba(88, 83, 158, 1), rgba(88, 83, 158, 1));
  background-size: 100% 0.15em, 0 0.15em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
}

a.link:hover,
a.link:focus {
  background-size: 0 0.15em, 100% 0.15em;
}

</style>
