<template>
  <VRow align="center" justify="center">
    <VCol cols="2" style="text-align: center">
      <slot name="opposite"></slot>
    </VCol>
    <VCol
      cols="4"
      style="text-align: center"
      :class="{
        'd-flex': inputs.length > 1,
        'justify-space-around': inputs.length > 1
      }"
    >
      <VAvatar
        v-for="input in inputs"
        :id="input.id"
        :key="input.id"
        class="ma-4 pa-4"
        color="primary"
        text-color="white"
        size="48"
      >
        <VIcon large dark>
          {{ getIcon(input.logo) }}
        </VIcon>
      </VAvatar>
    </VCol>
    <VCol cols="6">
      <slot name="content"></slot>
    </VCol>
  </VRow>
</template>
<script>
import LeaderLine from 'leader-line-new'
export default {
  props: {
    inputs: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    lines: []
  }),
  mounted() {
    // Draw arrows
    const config = {
      color: '#58539e',
      size: 8,
      path: 'grid',
      startPlug: 'behind',
      endPlug: 'arrow',
      endPlugSize: 0.5,
      outline: false,
      outlineColor: '#fff',
      dash: false, // { animation: true },
      dropShadow: false
    }
    
    this.$nextTick(() => {
    })

    document.fonts.ready.then( () => {
      this.inputs.forEach(i => i.outputNodes.forEach(n =>this.lines.push(new LeaderLine(
          document.getElementById(i.id),
          document.getElementById(n),
          config
        ))))
      this.lines.forEach(l => l.hide())
      this.lines.forEach(l => l.show('draw'))
    });

  },
  destroyed() {
    this.lines.forEach(l => l.remove())
  },
  methods: {
    getIcon(iconName) {
      return this.$vuetify.icons.values[iconName]
    }
  }
}
</script>
