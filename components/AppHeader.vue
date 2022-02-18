<template>
  <div id="appHeader">
    <VAppBar fixed app color="white" height="60" style="z-index: 2500">
      <VAppBarNavIcon
        aria-label="Open navigation menu"
        @click.stop="drawer = !drawer"
      />
      <VToolbarTitle class="d-flex align-center" style="width: 100%">
        <VBtn
          v-if="$nuxt.$route.path !== '/'"
          icon
          to="/"
          class="v-btn__home mr-0 mr-sm-4"
          color="primary"
        >
          <VIcon>$vuetify.icons.mdiHome</VIcon>
        </VBtn>
        <VSpacer />
        
        <a
          href="https://www.sitra.fi/"
          target="_blank"
          rel="noreferrer noopener"
          class="ml-2"
        >
          <VImg
            width="100"
            src="/media/sitra-logo.png"
            lazy-src="/media/sitra-logo.png"
            alt="SITRA logo"
            contain
          />
        </a>
        <a
          href="https://hestia.ai/"
          target="_blank"
          rel="noreferrer noopener"
          class="ml-2"
        >
          <VImg
            width="100"
            src="/media/logo-hestia.svg"
            lazy-src="/media/logo-hestia.svg"
            alt="Hestia.ai logo"
            contain
          />
        </a>

      </VToolbarTitle>
    </VAppBar>
    <VNavigationDrawer
      v-model="drawer"
      app
      temporary
      class="pa-5"
      :width="500"
      style="z-index: 3000"
    >
      <template #prepend>
        <div class="d-flex justify-space-between align-center">
          <VBtn icon to="/">
            <VIcon>$vuetify.icons.mdiHome</VIcon>
          </VBtn>
          <VBtn icon @click="drawer = false">
            <VIcon>$vuetify.icons.mdiClose</VIcon>
          </VBtn>
        </div>
      </template>
      <div class="mt-6">
        <VImg
            width="250"
            src="/media/logo-hestia.svg"
            lazy-src="/media/logo-hestia.svg"
            alt="Hestia.ai logo"
            contain
          />
      </div>
    </VNavigationDrawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      selected: ''
    }
  }
}
</script>

<style>
.v-btn__home.theme--light.v-btn--router.v-btn--active::before {
  /* Override default style for active nav router link element */
  opacity: 0 !important;
}
</style>
