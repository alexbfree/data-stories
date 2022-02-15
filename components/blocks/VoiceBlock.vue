<template>
    <div class="ma-3 pa-3" :class="classes" :style="`width: ${ width }; float:${ position }; border-left: 1rem solid ${ color }; background-color:${ hexToRgbA }`">
      <TextBlock :text="text" />
      <div class="link">
        <a :href="linkSrc"> {{ linkTxt }} </a>
      </div>
    </div>
</template>
<script>
export default {
  name: 'VoiceBlock',
  components: {
    TextBlock: () => import('@/components/blocks/TextBlock.vue')
  },
  props: {
    text: {
      type: String,
      default: () => 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix ansalutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes'
    },
    author: {
      type: String,
      default: () => 'Paul-Olivier Dehaye'
    },
    linkTxt: {
      type: String,
      default: () => ''
    },
    linkSrc: {
      type: String,
      default: () => ''
    },
    width: {
      type: String,
      default: () => '50%'
    },
    classes: {
      type: String,
      default: () => ''
    },
    position: {
      type: String,
      default: () => 'right'
    },
    color: {
      type: String,
      default: () => '#58539d'
    },
    colorOpacity: {
      type: Number,
      default: () => 0.1
    }

  },
  computed: {
    hexToRgbA(){
      let c
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(this.color)) {
          c = this.color.substring(1).split('')
          if(c.length === 3){
              c = [c[0], c[0], c[1], c[1], c[2], c[2]];
          }
          c = '0x'+c.join('');
          return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+this.colorOpacity+')';
      }
      return 'white'
    }
  }
}
</script>
<style scoped>
.link {
  float: right;
  margin-top: 1em;
}
</style>