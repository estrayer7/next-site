export default {
  name: 'repo',
  title: 'Repo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'giturl',
      title: 'Giturl',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}]
    }
  ],
};