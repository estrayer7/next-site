export default {
  name: 'fish',
  title: 'Fish',
  type: 'document',
  fields: [
    {
      name: 'bait',
      title: 'Bait',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'id',
      title: 'ID',
      type: 'number'
    }
  ],
};