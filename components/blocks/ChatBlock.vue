<template>
    <div class="message">
      <p :class="position">
        <TextBlock :text="text" />
      </p>
      <span :class="position">
        {{ author }}
      </span>
    </div>
</template>
<script>
import TextBlock from '@/components/blocks/TextBlock.vue'
export default {
  name: 'ChatBlock',
  components: {
    TextBlock
  },
  props: {
    text: {
      type: String,
      default: () => 'Commune imperdiet nec ut, sed euismod convenire principes'
    },
    author: {
      type: String,
      default: () => 'Paul-Olivier Dehaye'
    },
    position: {
      type: String,
      default: () => 'right'
    }
  }
}
</script>
<style scoped>
.message {
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  margin: 0 auto 0rem;
  max-width: 600px;
  padding: 0.5rem 1.5rem;
}
.message p{
  border-radius: 1.15rem;
  line-height: 1.25;
  max-width: 75%;
  padding: 0.5rem .875rem;
  position: relative;
  word-wrap: break-word;
  margin: 0.5rem 0;
  width: fit-content;
}
.message p::before,
.message p::after {
  bottom: -0.1rem;
  content: "";
  height: 1rem;
  position: absolute;
}

p.right {
  align-self: flex-end;
  background-color: #248bf5;
  color: #fff; 
}
p.right::before {
  border-bottom-left-radius: 0.8rem 0.7rem;
  border-right: 1rem solid #248bf5;
  right: -0.35rem;
  transform: translate(0, -0.1rem);
}

p.right::after {
  background-color: #fff;
  border-bottom-left-radius: 0.5rem;
  right: -40px;
  transform:translate(-30px, -2px);
  width: 10px;
}

p.left {
  align-items: flex-start;
  background-color: #e5e5ea;
  color: #000;
}

p.left:before {
  border-bottom-right-radius: 0.8rem 0.7rem;
  border-left: 1rem solid #e5e5ea;
  left: -0.35rem;
  transform: translate(0, -0.1rem);
}

p.left::after {
  background-color: #fff;
  border-bottom-right-radius: 0.5rem;
  left: 20px;
  transform: translate(-30px, -2px);
  width: 10px;
}

.message span {
  max-width: 75%;
  font-size: 0.75rem;
  margin: 0rem 0.75rem;
}
span.left {
  align-self: flex-start;
}

span.right {
  align-self: flex-end;
}
</style>