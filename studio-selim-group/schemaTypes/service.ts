import {defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  orderings: [
    {
      title: 'Order',
      name: 'orderRank',
      by: [
        {field: 'orderRank', direction: 'asc'},
        {field: 'orderRank', direction: 'asc'},
      ],
    },
  ],
  fields: [
    defineField({
      name: 'orderRank',
      title: 'Order',
      type: 'number',
      description: 'Order in which this service appears in the list',
    }),
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Dumpster', value: 'Dumpster'},
          {title: 'InteriorDemolition', value: 'InteriorDemolition'},
          {title: 'InteriorRenovation', value: 'InteriorRenovation'},
          {title: 'LicensedRealtors', value: 'LicensedRealtors'},
          {title: 'RealEstateInvestment', value: 'RealEstateInvestment'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
