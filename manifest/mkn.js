export default {
  title: 'Example Page',
  buildingBlocks: [
    { 
      component: 'blocks/ProfileBlock',
      props: {
        name: 'MKN', 
        jobTitle: 'Finnish MEP', 
        description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix ansalutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes',
        profilePicture: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg'
      }
    },
    { 
      component: 'blocks/ParagraphBlock',
      props: {
        title: 'My Gigantti data', 
        content: [
          {
            component: 'blocks/TextBlock',
            props: {
              value: 'Gigantti, like many supermarket chains, collects vast amounts of data. I want to show some of the data I have recovered from them through the'
            }
          },
          {
            component: 'base/button/AnimatedLink',
            props: {
              text: 'SAR process',
              url: ''
            }
          },
          {
            component: 'blocks/TextBlock',
            props: {
              value: ', to illustrate the different kinds of collection methods used.'
            }
          },
        ]
      }
    },
    { 
      component: 'blocks/FlowBlock',
      props: {
        leftText: '', 
        nodes: [{ id: 'volunteered', label: 'test', logo: 'mdiHandExtended', links: [{id: 'observed'}, {id: 'acquired', config: {dash: true, startSocket: 'left', endSocket: 'top'}}]}],
        content: [
          { 
            component: 'blocks/ParagraphBlock',
            props: {
              title: 'Volunteered', 
              content: [
                {
                  component: 'blocks/TextBlock',
                  props: {
                    value: 'First off, I *volunteer* a lot of data to them. I have provided them with my address and my phone number for instance, but also of course what I purchase.'
                  }
                },
              ]
            }
          }
        ]
      }
    },
    { 
      component: 'blocks/FlowBlock',
      props: {
        leftText: '', 
        nodes: [
          { id: 'observed', name: 'test', logo: 'mdiEye', links: [{id: 'derived'}] },
        ],
        dividerTop: true,
        content: [
          { 
            component: 'blocks/ParagraphBlock',
            props: {
              title: 'Observed', 
              content: [
                {
                  component: 'blocks/TextBlock',
                  props: {
                    value: 'While I volunteer some data, some is merely observed. I have (had) no conscience of giving it to them, but they nevertheless record it. This would include for instance geotagged newsletter clicks. On 8/20/2021 18:51, apparently, I clicked on a FitBit newsletter ad from location 63.7281,	23.0337. Gigantti saw that, and kept the record.'
                  }
                },
              ]
            }
          }
        ]
      }
    },
    { 
      component: 'blocks/FlowBlock',
      props: {
        leftText: '', 
        nodes: [{ id: 'acquired', name: 'test', logo: 'mdiEmailReceive', links: [{id: 'derived', config: {startSocket: 'bottom', endSocket: 'left'}}] }],
        nodesAlign: 'start',
        content: [
          { 
            component: 'blocks/ParagraphBlock',
            props: {
              title: 'Acquired', 
              content: [
                {
                  component: 'blocks/TextBlock',
                  props: {
                    value: 'Beyond the data observed or volunteered, Gigantti also bases its analyses on data that they acquire, in this case from two data brokers: Experian through its Mosaic product (I am a C10, which means "second home owner"), and Bisnode (which gets many things wrong, like my education level, family situation, and postal code). '
                  }
                },
              ]
            }
          }
        ]
      }
    },
    { 
      component: 'blocks/FlowBlock',
      props: {
        leftText: '', 
        nodes: [
          { id: 'derived', name: 'test', logo: 'mdiArrowDecision', links: [{id: 'metadata'}] },
        ],
        dividerBottom: true,
        content: [
          { 
            component: 'blocks/ParagraphBlock',
            props: {
              title: 'Derived', 
              content: [
                {
                  component: 'blocks/TextBlock',
                  props: {
                    value: 'The next step is derived data, which is built through models on top of the data Gigantti has. Gigantti uses a Recency Frequency Monetary value model, which seeks to assess how frequent and good of a customer I am. For instance apparently I am in a "Mid-Value" segment, in "Frequency Cluster" 2.'
                  }
                },
              ]
            }
          }
        ]
      }
    },
    { 
      component: 'blocks/FlowBlock',
      props: {
        leftText: '', 
        nodes: [{ id: 'metadata', name: 'test', logo: 'mdiFileDocumentMultiple', links: [] }],
        content: [
          { 
            component: 'blocks/ParagraphBlock',
            props: {
              title: 'Metadata', 
              content: [
                {
                  component: 'blocks/TextBlock',
                  props: {
                    value: 'The last kind of data is metadata. This is data relating to my consents, ..., or generally data that is produced by the IT infrastructure used by Gigantti. As we will see during this #digipower study, this is worth thinking about, as it shapes many relationships mediated by data.'
                  }
                },
              ]
            }
          }
        ]
      }
    },
    { 
      component: 'blocks/ParagraphBlock',
      props: {
        title: 'Ending', 
        content: [
          {
            component: 'blocks/TextBlock',
            props: {
              value: 'This is my conclusion'
            }
          }
        ]
      }
    },
  ]
}
