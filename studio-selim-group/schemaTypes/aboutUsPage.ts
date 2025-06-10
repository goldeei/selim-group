import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutUsPage',
  title: 'About Us Page',
  type: 'document',
  description: 'About us page',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Main description for the about us page',
    }),
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'teamMember'}]}],
      description: 'List of team members to display',
    }),
  ],
})
