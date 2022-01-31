<template>
  <VContainer>
    <ProfileBio />      
    <VRow>
      <VCol cols="12">
        <div class="py-4 mt-4">
          <h2 class="headline font-weight-light mb-4 primary--text">Introduction</h2>
          <div>
            Lorem <AnimatedLink url="www.example.com" text="John Doe" /> ipsum dolor sit amet, no nam oblique veritus. Commune
            imperdiet nec ut, sed euismod convenire principes at. Est et nobis
            iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique
            veritus. Commune imperdiet nec ut, sed euismod convenire principes
            at. Est et nobis iisque percipit, an vim zril disputando
            voluptatibus, vix an salutandi sententiae.
          </div>
        </div>
      </VCol>
    </VRow>
    <VRow>
      <FlowItem :inputs="[{ id: 'S', name: 'test5', logo: 'mdiClose', outputNodes: ['A', 'B']}]">
        <template #opposite>
          <span class="overline font-weight-bold primary--text"
            >July 18, 2021</span
          >
        </template>
        <template #content>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 primary--text`">
              Paragraph
            </h2>
            <div>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              imperdiet nec ut, sed euismod convenire principes at. Est et nobis
              iisque percipit, an vim zril disputando voluptatibus, vix an
              salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique
            </div>
            <QuoteBlock
              text="Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              imperdiet nec ut, sed euismod convenire principes at."
              author="François Quellec"
            />
          </div>
        </template>
      </FlowItem>
      <FlowItem
        :inputs="[
          { id: 'A', name: 'test', logo: 'mdiHome', outputNodes: ['C'] },
          { id: 'B', name: 'test2', logo: 'mdiClose', outputNodes: ['D'] }
        ]"
      >
        <template #opposite>
          <span class="overline font-weight-bold primary--text"
            >August 8, 2021</span
          >
        </template>
        <template #content>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 primary--text`">
              Paragraph
            </h2>
            <div>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              imperdiet nec ut, sed euismod convenire principes at. Est et nobis
              iisque percipit, an vim zril disputando voluptatibus, vix an
              salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique
              veritus. Commune imperdiet nec ut, sed euismod convenire principes
            </div>
            <CodeBlock
              title="Example of code"
              :value="code"
              language="javascript"
              source-text="Source: "
              source-link-text="HestiaLabs"
              source-link-u-r-l="https://digipower.hestialabs.org/"
              readonly
            />
          </div>
        </template>
      </FlowItem>
      <FlowItem
        :inputs="[
          { id: 'C', name: 'test3', logo: 'mdiHome', outputNodes: ['E'] },
          { id: 'D', name: 'test4', logo: 'mdiClose', outputNodes: ['E'] }
        ]"
      >
        <template #opposite>
          <span class="overline font-weight-bold primary--text"
            >October 30, 2021</span
          >
        </template>
        <template #content>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 primary--text`">
              Paragraph
            </h2>
            <div>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              imperdiet nec ut, sed euismod convenire principes at. Est et nobis
              iisque percipit, an vim zril disputando voluptatibus, vix an
              salutandi sententiae.
            </div>
            <HozizontalBarChart
              title="Top 10 advertisers"
              :values="graphTestValues"
              x-accessor="value"
              y-accessor="company"
              bars-color="#A4A8D0"
            />
          </div>
        </template>
      </FlowItem>
      <FlowItem :inputs="[{ id: 'E', name: 'test4', logo: 'mdiClose', outputNodes: [] }]">
        <template #opposite>
          <span class="overline font-weight-bold primary--text"
            >December 11, 2021</span
          >
        </template>
        <template #content>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 primary--text`">
              Paragraph
            </h2>
            <div>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              imperdiet nec ut, sed euismod convenire principes at. Est et nobis
              iisque percipit, an vim zril disputando voluptatibus, vix an
              salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique
              veritus. Commune imperdiet nec ut, sed euismod convenire principes
              at. Est et nobis iisque percipit, an vim zril disputando
              voluptatibus, vix an salutandi sententiae. Lorem ipsum dolor sit
              amet, no nam oblique veritus. Commune imperdiet nec ut, sed
              euismod convenire principes at. Est et nobis iisque percipit, an
              vim zril disputando voluptatibus, vix an salutandi sententiae.
              <LongQuoteBlock />
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              imperdiet nec ut, sed euismod convenire principes at. Est et nobis
              iisque percipit, an vim zril disputando voluptatibus, vix an
              salutandi sententiae.
            </div>
          </div>
        </template>
      </FlowItem>
    </VRow>
    <VRow>
      <VContainer>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 primary--text`">
            What we have learned ?
          </h2>
          <div>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
            imperdiet nec ut, sed euismod convenire principes at. Est et nobis
            iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae.
          </div>
        </div>
      </VContainer>
    </VRow>
  </VContainer>
</template>
<script>
import FlowItem from './FlowItem.vue'
import QuoteBlock from './base/QuoteBlock.vue'
import CodeBlock from './base/CodeBlock.vue'
import HozizontalBarChart from './charts/HozizontalBarChart.vue'
import ProfileBio from './base/ProfileBio.vue'
import LongQuoteBlock from './base/LongQuoteBlock.vue'
import AnimatedLink from './base/button/AnimatedLink.vue'
export default {
  components: { FlowItem, QuoteBlock, CodeBlock, HozizontalBarChart, ProfileBio, LongQuoteBlock, AnimatedLink },
  data: () => ({
    graphTestValues: [
      {
        company: 'Apple',
        value: 1960
      },
      {
        company: 'Facebook',
        value: 1360
      },
      {
        company: 'Google',
        value: 1060
      },
      {
        company: 'Boeing',
        value: 960
      },
      {
        company: 'Amazon',
        value: 800
      },
      {
        company: 'Orange',
        value: 500
      },
      {
        company: 'Bouygues',
        value: 480
      },
      {
        company: 'Twitter',
        value: 300
      },
      {
        company: 'Reddit',
        value: 280
      },
      {
        company: 'Swisscom',
        value: 100
      }
    ],
    lines: [],
    code: 'console.log("Hello World");\nconst test = true\nconsole.log("Test: ", test)'
  }),
  updated() {
    // update arrows position
    // this.lines.forEach(l => l.position())
  },
  mounted() {
    // Draw arrows
    /*
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
      this.lines.push(
        new LeaderLine(
          document.getElementById('S'),
          document.getElementById('A'),
          config
        )
      )
      this.lines.push(
        new LeaderLine(
          document.getElementById('S'),
          document.getElementById('B'),
          config
        )
      )
      this.lines.push(
        new LeaderLine(
          document.getElementById('A'),
          document.getElementById('C'),
          config
        )
      )
      this.lines.push(
        new LeaderLine(
          document.getElementById('B'),
          document.getElementById('D'),
          config
        )
      )
      this.lines.push(
        new LeaderLine(
          document.getElementById('C'),
          document.getElementById('E'),
          config
        )
      )
      this.lines.push(
        new LeaderLine(
          document.getElementById('D'),
          document.getElementById('E'),
          config
        )
      )
      this.lines.forEach(l => l.hide())
      this.lines.forEach(l => l.show())
    })
    */
  },
  destroyed() {
    // this.lines.forEach(l => l.remove())
  }
}
</script>
