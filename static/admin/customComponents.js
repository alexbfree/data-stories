
// Register ChatWidget component in markdown editor
CMS.registerEditorComponent({
  id: "ChatWidget",
  label: "Chat Widget",
  fields: [{
    name: "text",
    label: "Message",
    widget: "markdown",
    required: false,
    i18n: true
  },
  {
    name: "linkTxt",
    label: "Link Text",
    widget: "string",
    required: false,
    i18n: true
  },
  {
    name: "linkSrc",
    label: "Link URL",
    widget: "string",
    required: false,
    i18n: true
  },
  {
    name: "position",
    label: "Position",
    widget: 'select',
    options: ['left', 'right'],
    multiple: false,
    required: false,
    i18n: true
  }],
  pattern: /<span data-component data-name='ChatWidget' data-props='{(?:"linkSrc":"(.*?)")?(?:,?"linkTxt":"(.*?)")(?:,?"position":"(.*?)")(?:,?"text":"(.*?)")}'><\/span>/,
  fromBlock (match) {
    return {
      linkSrc: match[1],
      linkTxt: match[2],
      position: match[3],
      text: match[4]
    };
  },
  toBlock: (props) => stringify('ChatWidget', props),
  toPreview: (props) => stringify('ChatWidget', props)
})

// Register CodeWidget component in markdown editor
CMS.registerEditorComponent({
  id: "CodeWidget",
  label: "Code Widget",
  fields: [
    {
      label: 'Text',
      name: 'text',
      required: false,
      i18n: true,
      widget: 'code',
      output_code_only: true
    },
    {
      label: 'Title',
      name: 'title',
      required: false,
      i18n: true,
      widget: 'string',
    },
    {
      label: 'Language',
      name: 'language',
      required: false,
      i18n: true,
      widget: 'select',
      options: ['text', 'javascript', 'json'],
    },
    {
      label: 'Text before the link to source',
      name: 'beforeLinkTxt',
      required: false,
      i18n: true,
      widget: 'string',
    },
    {
      label: 'Source Link Text',
      name: 'linkTxt',
      required: false,
      i18n: true,
      widget: 'string',
    },
    {
      label: 'Source Link URL',
      name: 'linkSrc',
      required: false,
      i18n: true,
      widget: 'string',
    }
  ],
  pattern: /<span data-component data-name='CodeWidget' data-props='{(?:"beforeLinkTxt":"(.*?)")?(?:,?"language":"(.*?)")?(?:,"linkSrc":"(.*?)")?(?:,"linkTxt":"(.*?)")?(?:,"text":"(.*?)")?(?:,"title":"(.*?)")?}'><\/span>/,
  fromBlock (match) { // must respect alphabetical order
    return {
      beforeLinkTxt: match[1],
      language: match[2],
      linkSrc: match[3],
      linkTxt: match[4],
      text: match[5],
      title: match[6]
    };
  },
  toBlock: (props) => stringify('CodeWidget', props),
  toPreview: (props) => stringify('CodeWidget', props)
})

// Register ImageWidget component in markdown editor
CMS.registerEditorComponent({
  id: "ImageWidget",
  label: "Image Widget",
  fields: [
    {
      label: 'Title',
      name: 'text',
      required: false,
      i18n: true,
      widget: 'string'
    },
    {
      label: 'Image',
      name: 'imageSrc',
      i18n: true,
      widget: 'image',
    },
    {
      label: 'Max Width (pixels)',
      name: 'maxWidth',
      required: false,
      i18n: true,
      widget: 'number'
    },
    {
      label: 'Max Height (pixels)',
      name: 'maxHeight',
      required: false,
      i18n: true,
      widget: 'number',
    },
    {
      label: 'Source link URL',
      name: 'linkSrc',
      required: false,
      i18n: true,
      widget: 'string',
    },
    {
      label: 'Source link Text',
      name: 'linkTxt',
      required: false,
      i18n: true,
      widget: 'string',
    },
    {
      label: 'Caption',
      name: 'caption',
      required: false,
      i18n: true,
      widget: 'string',
    }
  ],
  pattern: /<span data-component data-name='ImageWidget' data-props='{(?:"caption":"(.*?)")?(?:,?"imageSrc":"(.*?)")?(?:,?"linkSrc":"(.*?)")?(?:,?"linkTxt":"(.*?)")?(?:,?"maxHeight":"(.*?)")?(?:,?"maxWidth":"(.*?)")?(?:,?"text":"(.*?)")?}'><\/span>/,
  fromBlock (match) { // must respect alphabetical order
    return {
      caption: match[1],
      imageSrc: match[2],
      linkSrc: match[3],
      linkTxt: match[4],
      maxHeight: match[5],
      maxWidth: match[6],
      text: match[7]
    };
  },
  toBlock: (props) => stringify('ImageWidget', props),
  toPreview: (props) => stringify('ImageWidget', props)
})

// Register IconsListWidget component in markdown editor
CMS.registerEditorComponent({
  id: "IconsListWidget",
  label: "List with Icons Widget",
  fields:[
    {
      label: 'Title',
      name: "text",
      required: false,
      widget: 'string',
      i18n: true
    },
    {
      label: 'Items',
      name: "items",
      widget: 'list',
      summary: '{{fields.text}}',
      i18n: true,
      fields: [
        {
          label: 'Icon',
          name: "icon",
          widget: 'string',
        },
        {
          label: 'Text',
          name: "text",
          widget: 'string'
        }
      ]
    }
  ],
  pattern: /<span data-component data-name='IconsListWidget' data-props='{"items": (.*), "text": "(.*)"}'><\/span>/,
  fromBlock (match) {
    return {
      items: JSON.parse(match[1]),
      text: match[2]
    };
  },
  toBlock: ({ items, text }) =>
    `<span data-component data-name='IconsListWidget' data-props='{"items": ${JSON.stringify(items)}, "text": "${text}"}'></span>`,

  toPreview: ({ items, text }) => {
    return `<span data-component data-name='IconsListWidget' data-props='{"items": ${JSON.stringify(items)}, "text": "${text}"}'></span>`
  }
})

// Register LongQuoteWidget component in markdown editor
CMS.registerEditorComponent({
  id: "LongQuoteWidget",
  label: "Long Quote Widget",
  fields: [{
    name: "text",
    label: "Text",
    widget: "markdown",
    required: false,
    i18n: true
  },
  {
    name: "linkSrc",
    label: "Source link URL",
    widget: "string",
    required: false,
    i18n: true
  },
  {
    name: "linkTxt",
    label: "Source link Text",
    widget: 'string',
    required: false,
    i18n: true
  }],
  pattern: /<span data-component data-name='LongQuoteWidget' data-props='{(?:"linkSrc":"(.*?)")?(?:,?"linkTxt":"(.*?)")?(?:,?"text":"(.*?)")?}'><\/span>/,
  fromBlock (match) {
    return {
      linkSrc: match[1],
      linkTxt: match[2],
      text: match[3]
    };
  },
  toBlock: (props) => stringify('LongQuoteWidget', props),
  toPreview: (props) => stringify('LongQuoteWidget', props)
})

// Register PagePreviewLink component in markdown editor
CMS.registerEditorComponent({
  id: "PagePreviewLink",
  label: "Link with preview",
  fields: [
    {
      name: 'page',
      label: 'Page',
      widget: 'relation',
      collection: 'stories',
      value_field: 'id',
      display_fields: ['title'],
      search_fields: ['title'],
      multiple: false,
      required: true,
    },
    {
      name: "text",
      label: "text",
      widget: "string",
      required: false,
      i18n: true
    }
  ],
  pattern: /<span data-component data-name='PagePreviewLink' data-props='{"page":"(.*)","text":"(.*)"}'><\/span>/,
  fromBlock (match) {
    return {
      page: match[1],
      text: match[2]
    };
  },
  toBlock: (props) => stringify('PagePreviewLink', props),
  toPreview: (props) => stringify('PagePreviewLink', props)
})

// Register QuoteWidget component in markdown editor
CMS.registerEditorComponent({
  id: "QuoteWidget",
  label: "Quote Widget",
  fields: [
    {
      name: "text",
      label: "Text",
      widget: "markdown",
      required: false,
      i18n: true
    },
    {
      name: "linkSrc",
      label: "Source link URL",
      widget: "string",
      required: false,
      i18n: true
    },
    {
      name: "linkTxt",
      label: "Source link Text",
      widget: "string",
      required: false,
      i18n: true
    }
  ],
  pattern: /<span data-component data-name='QuoteWidget' data-props='{(?:"linkSrc":"(.*?)")?(?:,?"linkTxt":"(.*?)")?(?:,?"text":"(.*?)")?}'><\/span>/,
  fromBlock (match) {
    return {
      linkSrc: match[1],
      linkTxt: match[2],
      text: match[3]
    };
  },
  toBlock: (props) => stringify('QuoteWidget', props),
  toPreview: (props) => stringify('QuoteWidget', props)
})

// Register VoiceWidget component in markdown editor
CMS.registerEditorComponent({
  id: "VoiceWidget",
  label: "Voice Widget",
  fields: [ 
    {
      label: 'Text',
      name: 'text',
      required: false,
      i18n: true,
      widget: 'markdown',
    },
    {
      label: 'Color',
      name: 'color',
      required: false,
      i18n: true,
      widget: 'color',
    },
    {
      label: 'Width',
      name: 'width',
      required: false,
      i18n: true,
      widget: 'select',
      options: ['25%', '40%', '50%', '60%', '75%', '100%'],
    },
    {
      label: 'CSS classes',
      name: 'classes',
      required: false,
      i18n: true,
      widget: 'string',
    },
    {
      label: 'Link URL',
      name: 'linkSrc',
      required: false,
      i18n: true,
      widget: 'string',
    },
    {
      label: 'Link Text',
      name: 'linkTxt',
      required: false,
      i18n: true,
      widget: 'string',
    },
    {
      label: 'Position',
      name: 'position',
      required: false,
      i18n: true,
      widget: 'select',
      options: ['left', 'right'],
    },
    {
      name: 'authorlink',
      label: 'Author',
      widget: 'relation',
      collection: 'persons',
      value_field: 'id',
      display_fields: ['name'],
      search_fields: ['name'],
      multiple: false,
      required: false
    }
  ],
  pattern: /<span data-component data-name='VoiceWidget' data-props='{(?:"authorLink":"(.*?)")?(?:,?"classes":"(.*?)")?(?:,?"color":"(.*?)")?(?:,?"linkSrc":"(.*?)")?(?:,?"linkTxt":"(.*?)")?(?:,?"position":"(.*?)")?(?:,?"text":"(.*?)")?(?:,?"width":"(.*?)")?}'><\/span>/,
  fromBlock (match) {
    return {
      authorLink: match[1],
      classes: match[2],
      color: match[3],
      linkSrc: match[4],
      linkTxt: match[5],
      position: match[6],
      text: match[7],
      width: match[8]
    };
  },
  toBlock: (props) => stringify('VoiceWidget', props),
  toPreview: (props) => stringify('VoiceWidget', props)
})

stringify = (component, props) => {
  cleanProps = JSON.stringify(props, Object.keys(props).sort()).replace(/[']/g, "&apos;")
  return `<span data-component data-name='${component}' data-props='${cleanProps}'></span>`
}