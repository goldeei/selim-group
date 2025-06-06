export default {
  name: 'propertyPage',
  title: 'Property Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'properties',
      title: 'Properties',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'property'}]}],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
