<template>
  <VRow align="center" justify="center">
    <VCol cols="2" style="text-align: center">
      <span class="overline font-weight-bold primary--text">
        {{ leftText }}
      </span>
    </VCol>
    <VCol
      cols="4"
      style="text-align: center"
      :class="{
        'd-flex': nodes.length > 1,
        'justify-space-around': nodes.length > 1
      }"
    >
      <VAvatar
        v-for="node in nodes"
        :id="node.id"
        :key="node.id"
        class="ma-4 pa-4"
        color="primary"
        text-color="white"
        size="48"
      >
        <VIcon large dark>
          {{ getIcon(node.logo) }}
        </VIcon>
      </VAvatar>
    </VCol>
    <VCol cols="6">
      <div v-for="(elem, index ) in content" :key="index">
        <ComponentCaller :component-name="elem.component" :component-props="elem.props" />
      </div>
    </VCol>
  </VRow>
</template>
<script>
import LeaderLine from 'leader-line-new'
import ComponentCaller from '@/components/ComponentCaller.vue'
export default {
  name: 'FlowBlock',
  components: { ComponentCaller },
  props: {
    leftText: {
      type: String,
      default: () => ''
    },
    nodes: {
      type: Array,
      default: () => []
    },
    content: {
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
      this.nodes.forEach(i => i.outputNodes.forEach(n =>this.lines.push(new LeaderLine(
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
