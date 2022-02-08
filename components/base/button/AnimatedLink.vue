<template>
  <a
    v-bind="$attrs"
    class="link"
    title=""
    :href="link"
    v-on="$listeners"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'See also'
    },
    link: {
      type: String,
      default: '#'
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
