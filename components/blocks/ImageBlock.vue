<template>
    <div class="pa-3 ma-3 d-flex justify-center">
      <v-img
        :max-height="maxHeight"
        :max-width="maxWidth"
        :src="imageSrc"
        contain
      ></v-img>
    </div>
</template>
<script>
export default {
  name: 'ImageBlock',
  props: {
    text: {
      type: String,
      default: () => ''
    },
    imageSrc: {
      type: String,
      default: () => 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg'
    },
    maxWidth: {
      type: String,
      default: () => '877'
    },
    maxHeight: {
      type: String,
      default: () => '492'
    },
    source: {
      type: String,
      default: () => ''
    },
    caption: {
      type: String,
      default: () => ''
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