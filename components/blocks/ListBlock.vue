<template>
    <VList dense>
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
</template>
<script>
export default {
  name: 'ListBlock',
  props: {
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
