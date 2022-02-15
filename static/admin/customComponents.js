// Register PagePreviewLink component in markdown editor
CMS.registerEditorComponent({
  id: "PagePreviewLink",
  label: "Link with preview",
  fields: [{
    name: "link",
    label: "link",
    widget: "string"
  },
  {
    name: "text",
    label: "text",
    widget: "string"
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
    },
    {
      label: 'Items',
      name: "items",
      widget: 'list',
      summary: '{{fields.text}}',
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

// Register ChatBlock component in markdown editor
CMS.registerEditorComponent({
  id: "ChatBlock",
  label: "Chat bubble",
  fields: [{
    name: "text",
    label: "Message",
    widget: "string"
  },
  {
    name: "author",
    label: "Author",
    widget: "string"
  },
  {
    name: "position",
    label: "Position",
    widget: 'select',
    options: ['left', 'right'],
    multiple: false
  }],
  pattern: /<span data-component data-name='ChatBlock' data-props='{"author":"(.*)","position":"(.*)","text":"(.*)"}'><\/span>/,
  fromBlock (match) {
    return {
      author: match[1],
      position: match[2],
      text: match[3]
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
      label: 'SourceText',
      name: 'sourceText',
      required: false,
      i18n: true,
      widget: 'text',
    },
    {
      label: 'SourceLinkText',
      name: 'sourceLinkText',
      required: false,
      i18n: true,
      widget: 'string',
    },
    {
      label: 'SourceLinkURL',
      name: 'sourceLinkURL',
      required: false,
      i18n: true,
      widget: 'file',
    }
  ],
  pattern: /<span data-component data-name='CodeBlock' data-props='{(?:"text":"(.*?)")?(?:,"title":"(.*?)")?(?:,"language":"(.*?)")?(?:,"sourceLinkText":"(.*)")?(?:,"sourceLinkURL":"(.*)")?(?:,"sourceText":"(.*)")?}'><\/span>/,
  fromBlock (match) { // must respect alphabetical order
    return {
      text: match[1],
      title: match[2],
      language: match[3],
      sourceLinkText: match[4],
      sourceLinkURL: match[5],
      sourceText: match[6]
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
      label: 'Max Width',
      name: 'maxWidth',
      required: false,
      i18n: true,
      widget: 'string'
    },
    {
      label: 'Max Height',
      name: 'maxHeight',
      required: false,
      i18n: true,
      widget: 'string',
    },
    {
      label: 'Source',
      name: 'source',
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
  pattern: /<span data-component data-name='ImageBlock' data-props='{(?:"caption":"(.*?)")?(?:,"imageSrc":"(.*?)")?(?:,"maxHeight":"(.*?)")?(?:,"maxWidth":"(.*)")?(?:,"source":"(.*)")?(?:,"text":"(.*)")?}'><\/span>/,
  fromBlock (match) { // must respect alphabetical order
    return {
      caption: match[1],
      imageSrc: match[2],
      maxHeight: match[3],
      maxWidth: match[4],
      source: match[5],
      text: match[6]
    };
  },
  toBlock: (props) => stringify('ImageBlock', props),
  toPreview: (props) => stringify('ImageBlock', props)
})

// Register LongQuoteBlock component in markdown editor
CMS.registerEditorComponent({
  id: "LongQuoteBlock",
  label: "Long Quote",
  fields: [{
    name: "text",
    label: "Text",
    widget: "string"
  },
  {
    name: "author",
    label: "Author",
    widget: "string"
  },
  {
    name: "link",
    label: "Link",
    widget: 'string'
  }],
  pattern: /<span data-component data-name='LongQuoteBlock' data-props='{"author":"(.*)","link":"(.*)","text":"(.*)"}'><\/span>/,
  fromBlock (match) {
    return {
      author: match[1],
      link: match[2],
      text: match[3]
    };
  },
  toBlock: (props) => stringify('LongQuoteBlock', props),
  toPreview: (props) => stringify('LongQuoteBlock', props)
})

// Register QuoteBlock component in markdown editor
CMS.registerEditorComponent({
  id: "QuoteBlock",
  label: "Quote Block",
  fields: [{
    name: "text",
    label: "Text",
    widget: "string"
  },
  {
    name: "author",
    label: "Author",
    widget: "string"
  },
  {
    name: "link",
    label: "Link",
    widget: 'string'
  }],
  pattern: /<span data-component data-name='QuoteBlock' data-props='{"author":"(.*)","link":"(.*)","text":"(.*)"}'><\/span>/,
  fromBlock (match) {
    return {
      author: match[1],
      link: match[2],
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
      widget: 'string',
    },
    {
      label: 'CSS classes',
      name: 'classes',
      required: false,
      i18n: true,
      widget: 'string',
    },
    {
      label: 'Link',
      name: 'link',
      required: false,
      i18n: true,
      widget: 'file',
    },
    {
      label: 'Author Name',
      name: 'author',
      required: false,
      i18n: true,
      widget: 'string',
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
  pattern: /<span data-component data-name='VoiceBlock' data-props='{(?:"author":"(.*?)")?(?:,"authorLink":"(.*?)")?(?:,"classes":"(.*?)")?(?:,"color":"(.*?)")?(?:,"link":"(.*?)")?(?:,"text":"(.*?)")?(?:,"width":"(.*?)")?}'><\/span>/,
  fromBlock (match) {
    return {
      author: match[1],
      authorLink: match[2],
      classes: match[3],
      color: match[4],
      link: match[5],
      text: match[6],
      width: match[7]
    };
  },
  toBlock: (props) => stringify('VoiceBlock', props),
  toPreview: (props) => stringify('VoiceBlock', props)
})

stringify = (component, props) => {
  cleanProps = JSON.stringify(props, Object.keys(props).sort()).replace(/[']/g, "&apos;")
  return `<span data-component data-name='${component}' data-props='${cleanProps}'></span>`
}