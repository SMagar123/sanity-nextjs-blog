export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of blog article',
      options: {
        source: 'title',
      },
    },
    {
      name: 'headerImage',
      type: 'image',
      title: 'Header Image',
    },
    {
      name: 'shortDescription',
      type: 'text',
      title: 'Short DEscription',
    },
    {
      name: 'createdOn',
      type: 'datetime',
      title: 'Created On',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Published', value: 'published'},
          {title: 'Draft', value: 'draft'},
        ],
        layout: 'dropdown', // Use 'radio' if you prefer radio buttons
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Blog', value: 'blog'},
          {title: 'Resources', value: 'resources'},
          {title: 'Hosting', value: 'hosting'},
        ],
      },
    },

    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strikethrough', value: 'strike-through'},
              {title: 'Code', value: 'code'},
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: {isHighlighted: true},
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              options: {isHighlighted: true},
            },
          ],
        },
      ],
    },
  ],
}
