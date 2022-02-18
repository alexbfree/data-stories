<template>
  <div class="d-flex flex-column align-center ma-6">
    <v-subheader class="font-weight-bold text-subtitle-1 primary--text">{{ text }}</v-subheader>
    <VList dense >  
        <VListItem
          v-for="(item, i) in items"
          :key="i"
        >
          <VListItemIcon>
            <VIcon>{{ getIcon(item.icon) }}</VIcon>
          </VListItemIcon>
          <VListItemContent>
            <VListItemTitle v-text="item.text"></VListItemTitle>
          </VListItemContent>
        </VListItem>
    </VList>
  </div>
</template>
<script>
export default {
  name: 'IconsListWidget',
  props: {
    text: {
      type: String,
      default: () => ''
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getIcon(iconName) {
      return this.$vuetify.icons.values[iconName]
    }
  }
}
</script>
