<template>
  <VApp>
    <AppHeader />
    <VMain>
      <Nuxt />
      <VAlert
        :value="alert"
        border="right"
        colored-border
        color="primary"
        elevation="2"
        close-text="Not now"
        dismissible
        max-width="20%"
        class="fixedAlert"
        transition="slide-x-transition"
        fixed
        bottom
        left
        @input="alertClosed"
      >
        Want to know more about our work ?
        <br />
        <a :href="newsletterURL" target="_blank" rel="noreferrer noopener">
          {{ newsletterMessage }}
        </a>
      </VAlert>
    </VMain>
    <VFooter app absolute color="primary">
      <div class="lighten-2 py-2 ma-auto white--text" align="center">
        Educational material developed by
        <a href="https://hestia.ai" target="_blank" style="color: white"
          >Hestia.ai</a
        >
        <br />Currently in development |
        <a :href="newsletterURL" target="_blank" style="color: white">
          {{ newsletterMessage }}
        </a>
      </div>
    </VFooter>
  </VApp>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
export default {
  name: 'DefaultLayout',
  components: { AppHeader },
  data() {
    return {
      // Display offline message if user opens app when offline
      snackbar: this.$nuxt.isOffline,
      timeout: 5000,
      alert: false,
      newsletterURL: 'www.example.com',
      newsletterMessage: 'Subscribe to our newsletter',
    }
  },
  head() {
    return {
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.appName,
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary',
        },
        {
          hid: 'twitter:site',
          property: 'twitter:site',
          content: '@HestiaLabs',
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: this.appName,
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: `${process.env.baseUrl}/ogimg.png`,
        },
      ],
      script: [
        {
          // we only really need this on the index page
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        },
      ],
    }
  },
  watch: {
    '$nuxt.isOffline'(isOffline) {
      this.snackbar = true
      // changing timeout property resets the timeout
      this.timeout = isOffline ? 5001 : 5000
    },
  },
  mounted() {
    if (!window.Worker) {
      this.$nuxt.error({
        statusCode: 500,
        message: 'Web Workers are not supported by this browser',
      })
    }
    // Show the newsletter alert once a day
    if (
      !this.alert &&
      (!localStorage.alertNewsletterDismissed ||
        new Date().getTime() -
          new Date(localStorage.alertNewsletterDismissed).getTime() >
          1000 * 3600 * 24) // one day in milliseconds
    ) {
      window.setInterval(() => {
        this.alert = true
      }, 3000)
    }
  },
  methods: {
    alertClosed() {
      localStorage.alertNewsletterDismissed = new Date()
    },
  },
}
</script>

<style lang="sass">
@import "./assets/styles"

.v-snack__content.v-snack__content-online-status
  text-align: center
</style>
<style scoped>
.fixedAlert {
  position: fixed;
  bottom: 0px;
  z-index: 2500;
}
</style>
