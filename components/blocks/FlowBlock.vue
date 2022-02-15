<template>
  <VRow align="center" justify="center">
    <VCol cols="1" style="text-align: center">
      <span class="overline font-weight-bold primary--text">
        {{ leftText }}
      </span>
    </VCol>
    <VCol
      cols="5"
      :style="`text-align:` + nodesAlign"
      :class="{
        'd-flex': nodes.length > 1,
        'justify-space-around': nodes.length > 1
      }"
    > 
      <div v-for="node in nodes" :key="node.id" class="node">
        <VAvatar
          :id="node.id" 
          class="ma-4 pa-4"
          color="primary"
          text-color="white"
          size="64"
        >
        <VIcon large dark>
          {{ getIcon(node.logo) }}
        </VIcon>
      </VAvatar>
      <span v-if="node.label" class="label overline font-weight-bold primary--text"> {{ node.label }} </span>
      </div>
    </VCol>
    <VCol cols="6">
      <ParagraphBlock v-bind="{ title, content }"/>
    </VCol>
  </VRow>
</template>
<script>
import LeaderLine from 'leader-line-new'
import ParagraphBlock from '@/components/blocks/ParagraphBlock.vue'
export default {
  name: 'FlowBlock',
  components: { ParagraphBlock },
  props: {
    leftText: {
      type: String,
      default: () => ''
    },
    title: {
      type: String,
      default: () => ''
    },
    nodes: {
      type: Array,
      default: () => []
    },
    content: {
      type: String,
      default: () => ''
    },
    nodesAlign: {
      type: String,
      default: () => 'center'
    },
    dividerTop: {
      type: Boolean,
      default: () => false
    },
    dividerBottom: {
      type: Boolean,
      default: () => false
    },
    drawLinks: {
      type: Boolean,
      default: () => false
    }
  },
  data: () => ({
    lines: [],
    defaultLinkConfig: {
      color: '#58539e',
      size: 8,
      path: 'grid',
      startPlug: 'behind',
      endPlug: 'arrow',
      endPlugSize: 0.5,
      outline: false,
      outlineColor: '#fff',
      dash: false, // { animation: true },
      dropShadow: false,
      hide: true
    }
  }),
  async mounted() {
    // Wait a few milliseconds to let the user see the transitions
    await this.$nextTick()
    setTimeout(() => {
      this.nodes.forEach(node => {
        if(Object.prototype.hasOwnProperty.call(node, 'links'))
          node.links.forEach(link => this.drawLink(node, link))
      })
    }, 1000)
  },
  destroyed() {
    this.lines.forEach(l => l.remove())
  },
  methods: {
    drawLink(startNode, link) {
      if (startNode.id !== link.id) {
        // Draw arrow
        this.lines.push(
          new LeaderLine(
            document.getElementById(startNode.id),
            document.getElementById(link.id),
            {...this.defaultLinkConfig, ...link.config }
          ).show('draw', {duration: 2500})
        )
      } else {
        const selfConfig = {
          path: 'fluid',
          startSocket: 'left',
          endSocket: 'left',
          startSocketGravity: [-100, 100],
          endSocketGravity: [-100, -100]
        }
        const element = document.getElementById(startNode.id)
        // Draw self arrow
        this.lines.push(
          new LeaderLine(
            LeaderLine.pointAnchor({element, x: 10, }),
            LeaderLine.pointAnchor({element, x: 0, }),
            {...this.defaultLinkConfig, ...link.config, ...selfConfig }
          ).show('draw', {duration: 500})
        )
      }
    },
    getIcon(iconName) {
      return this.$vuetify.icons.values[iconName]
    }
  }
}
</script>
<style scoped>
.label {
  position: absolute;
  top: 35%;
}
.node {
  position: relative;
}
</style>
