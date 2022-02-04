export default {
  title: 'Example Page',
  buildingBlocks: [
    { 
      component: 'blocks/ProfileBlock',
      props: {
        name: 'John Doe', 
        jobTitle: 'Journalist at LeTemps.ch', 
        description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix ansalutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes',
        profilePicture: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg'
      }
    },
    { 
      component: 'blocks/ParagraphBlock',
      props: {
        title: 'Introduction', 
        content: [
          {
            component: 'blocks/TextBlock',
            props: {
              value: 'Lorem John Doe ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
            }
          }
        ]
      }
    },
    { 
      component: 'blocks/FlowBlock',
      props: {
        leftText: 'July 18, 2021', 
        nodes: [{ id: 'A', label: 'test', logo: 'mdiClose', links: [{id: 'B'},{id: 'C'}]}],
        content: [
          { 
            component: 'blocks/ParagraphBlock',
            props: {
              title: 'QuoteBlock', 
              content: [
                {
                  component: 'blocks/TextBlock',
                  props: {
                    value: 'Lorem John Doe ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
                  }
                },
                {
                  component: 'blocks/QuoteBlock',
                  props: {
                    text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at.',
                    author: 'François Quellec'
                  }
                }
              ]
            }
          }
        ]
      }
    },
    { 
      component: 'blocks/FlowBlock',
      props: {
        leftText: 'August 8, 2021', 
        nodes: [
          { id: 'B', name: 'test', logo: 'mdiHome', links: [{id: 'D'}] },
          { id: 'C', name: 'test', logo: 'mdiClose', links: [{id: 'E'}] }
        ],
        content: [
          { 
            component: 'blocks/ParagraphBlock',
            props: {
              title: 'CodeBlock', 
              content: [
                {
                  component: 'blocks/TextBlock',
                  props: {
                    value: 'Lorem John Doe ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
                  }
                },
                {
                  component: 'blocks/CodeBlock',
                  props: {
                    title: 'Example of code',
                    value: 'console.log("Hello World");\nconst test = true\nconsole.log("Test: ", test)',
                    language: "javascript",
                    sourceText: "Source: ",
                    sourceLinkText: "HestiaLabs",
                    sourceLinkURL: "https://digipower.hestialabs.org/"
                  }
                }
              ]
            }
          }
        ]
      }
    },
    { 
      component: 'blocks/FlowBlock',
      props: {
        leftText: 'October 30, 2021', 
        nodes: [
          { id: 'D', name: 'test', logo: 'mdiHome', links: [{id: 'F'}] },
          { id: 'E', name: 'test', logo: 'mdiClose', links: [{id: 'F'}] }
        ],
        content: [
          { 
            component: 'blocks/ParagraphBlock',
            props: {
              title: 'HorizontalBarChart', 
              content: [
                {
                  component: 'blocks/TextBlock',
                  props: {
                    value: 'Lorem John Doe ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
                  }
                },
                {
                  component: 'charts/HorizontalBarChart',
                  props: {
                    title: 'Top 10 advertisers',
                    xAccessor: 'value',
                    yAccessor: 'company',
                    barsColor: '#A4A8D0',
                    values: [
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
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    { 
      component: 'blocks/FlowBlock',
      props: {
        leftText: 'December 11, 2021', 
        nodes: [{ id: 'F', name: 'test', logo: 'mdiClose', links: [] }],
        content: [
          { 
            component: 'blocks/ParagraphBlock',
            props: {
              title: 'LongQuoteBlock', 
              content: [
                {
                  component: 'blocks/TextBlock',
                  props: {
                    value: 'Lorem John Doe ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
                  }
                },
                {
                  component: 'blocks/LongQuoteBlock',
                  props: {
                    text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix ansalutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes',
                    author: 'Paul-Olivier Dehaye',
                    link: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg'
                  }
                },
                {
                  component: 'blocks/TextBlock',
                  props: {
                    value: 'Lorem John Doe ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
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
        leftText: 'December 11, 2021', 
        nodes: [{ id: 'G', name: 'test', logo: 'mdiClose', links: [{id: 'G'}] }],
        content: [
          { 
            component: 'blocks/ParagraphBlock',
            props: {
              title: 'VoiceBlock', 
              content: [
                {
                  component: 'blocks/TextBlock',
                  props: {
                    value: 'Lorem John Doe ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
                  }
                },
                {
                  component: 'blocks/VoiceBlock',
                  props: {
                    text: 'Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix ansalutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes',
                    author: 'Paul-Olivier Dehaye',
                    link: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg'
                  }
                },
                {
                  component: 'blocks/TextBlock',
                  props: {
                    value: 'Lorem John Doe ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
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
        leftText: 'December 11, 2021', 
        nodes: [{ id: 'H', name: 'test', logo: 'mdiClose', links: [{id: 'H'}] }],
        content: [
          { 
            component: 'blocks/ParagraphBlock',
            props: {
              title: 'VoiceBlock multiple', 
              content: [
                {
                  component: 'blocks/TextBlock',
                  props: {
                    value: 'Lorem John Doe ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
                  }
                },
                {
                  component: 'blocks/VoiceBlock',
                  props: {
                    text: ' Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix ansalutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes',
                    author: 'Alex Bowyer',
                    width: '100%',
                    color: '#1ba39c',
                    link: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg'
                  }
                },
                {
                  component: 'blocks/VoiceBlock',
                  props: {
                    text: ' Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix ansalutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes',
                    author: 'Paul-Olivier Dehaye',
                    width: '100%',
                    link: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg'
                  }
                },
                {
                  component: 'blocks/TextBlock',
                  props: {
                    value: 'Lorem John Doe ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
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
        title: 'What did we learn ?', 
        content: [
          {
            component: 'blocks/TextBlock',
            props: {
              value: 'Lorem John Doe ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
            }
          }
        ]
      }
    },
  ]
}