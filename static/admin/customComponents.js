
// Register ChatBlock component in markdown editor
CMS.registerEditorComponent({
  id: "ChatBlock",
  label: "Chat bubble",
  fields: [{
    name: "text",
    label: "Message",
    widget: "string",
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
  pattern: /<span data-component data-name='ChatBlock' data-props='{(?:"linkSrc":"(.*?)")?(?:,?"linkTxt":"(.*?)")(?:,?"position":"(.*?)")(?:,?"text":"(.*?)")}'><\/span>/,
  fromBlock (match) {
    return {
      linkSrc: match[1],
      linkTxt: match[2],
      position: match[3],
      text: match[4]
    };
  },
  toBlock: (props) => stringify('ChatBlock', props),
  toPreview: (props) => stringify('ChatBlock', props)
})

// Register CodeBlock component in markdown editor
CMS.registerEditorComponent({
  id: "CodeBlock",
  label: "Code block pretty",
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
  pattern: /<span data-component data-name='CodeBlock' data-props='{(?:"beforeLinkTxt":"(.*?)")?(?:,?"language":"(.*?)")?(?:,"linkSrc":"(.*?)")?(?:,"linkTxt":"(.*?)")?(?:,"text":"(.*?)")?(?:,"title":"(.*?)")?}'><\/span>/,
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
  toBlock: (props) => stringify('CodeBlock', props),
  toPreview: (props) => stringify('CodeBlock', props)
})

// Register ImageBlock component in markdown editor
CMS.registerEditorComponent({
  id: "ImageBlock",
  label: "Image Block pretty",
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
  pattern: /<span data-component data-name='ImageBlock' data-props='{(?:"caption":"(.*?)")?(?:,?"imageSrc":"(.*?)")?(?:,?"linkSrc":"(.*?)")?(?:,?"linkTxt":"(.*?)")?(?:,?"maxHeight":"(.*?)")?(?:,?"maxWidth":"(.*?)")?(?:,?"text":"(.*?)")?}'><\/span>/,
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
  toBlock: (props) => stringify('ImageBlock', props),
  toPreview: (props) => stringify('ImageBlock', props)
})

// Register ListBlock component in markdown editor
CMS.registerEditorComponent({
  id: "ListBlock",
  label: "List with Icons",
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
  pattern: /<span data-component data-name='ListBlock' data-props='{"items": (.*), "text": "(.*)"}'><\/span>/,
  fromBlock (match) {
    return {
      items: JSON.parse(match[1]),
      text: match[2]
    };
  },
  toBlock: ({ items, text }) =>
    `<span data-component data-name='ListBlock' data-props='{"items": ${JSON.stringify(items)}, "text": "${text}"}'></span>`,

  toPreview: ({ items, text }) => {
    return `<span data-component data-name='ListBlock' data-props='{"items": ${JSON.stringify(items)}, "text": "${text}"}'></span>`
  }
})

// Register LongQuoteBlock component in markdown editor
CMS.registerEditorComponent({
  id: "LongQuoteBlock",
  label: "Long Quote",
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
  pattern: /<span data-component data-name='LongQuoteBlock' data-props='{(?:"linkSrc":"(.*?)")?(?:,?"linkTxt":"(.*?)")?(?:,?"text":"(.*?)")?}'><\/span>/,
  fromBlock (match) {
    return {
      linkSrc: match[1],
      linkTxt: match[2],
      text: match[3]
    };
  },
  toBlock: (props) => stringify('LongQuoteBlock', props),
  toPreview: (props) => stringify('LongQuoteBlock', props)
})

// Register PagePreviewLink component in markdown editor
CMS.registerEditorComponent({
  id: "PagePreviewLink",
  label: "Link with preview",
  fields: [{
    name: "link",
    label: "link",
    widget: "string",
    required: false,
    i18n: true
  },
  {
    name: "text",
    label: "text",
    widget: "string",
    required: false,
    i18n: true
  }],
  pattern: /<span data-component data-name='PagePreviewLink' data-props='{"link":"(.*)","text":"(.*)"}'><\/span>/,
  fromBlock (match) {
    return {
      link: match[1],
      text: match[2]
    };
  },
  toBlock: (props) => stringify('PagePreviewLink', props),
  toPreview: (props) => stringify('PagePreviewLink', props)
})

// Register QuoteBlock component in markdown editor
CMS.registerEditorComponent({
  id: "QuoteBlock",
  label: "Quote Block",
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
  pattern: /<span data-component data-name='QuoteBlock' data-props='{(?:"linkSrc":"(.*?)")?(?:,?"linkTxt":"(.*?)")?(?:,?"text":"(.*?)")?}'><\/span>/,
  fromBlock (match) {
    return {
      linkSrc: match[1],
      linkTxt: match[2],
      text: match[3]
    };
  },
  toBlock: (props) => stringify('QuoteBlock', props),
  toPreview: (props) => stringify('QuoteBlock', props)
})

// Register VoiceBlock component in markdown editor
CMS.registerEditorComponent({
  id: "VoiceBlock",
  label: "Voice Block",
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
  pattern: /<span data-component data-name='VoiceBlock' data-props='{(?:"authorLink":"(.*?)")?(?:,?"classes":"(.*?)")?(?:,?"color":"(.*?)")?(?:,?"linkSrc":"(.*?)")?(?:,?"linkTxt":"(.*?)")?(?:,?"position":"(.*?)")?(?:,?"text":"(.*?)")?(?:,?"width":"(.*?)")?}'><\/span>/,
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
  toBlock: (props) => stringify('VoiceBlock', props),
  toPreview: (props) => stringify('VoiceBlock', props)
})

stringify = (component, props) => {
  cleanProps = JSON.stringify(props, Object.keys(props).sort()).replace(/[']/g, "&apos;")
  return `<span data-component data-name='${component}' data-props='${cleanProps}'></span>`
}