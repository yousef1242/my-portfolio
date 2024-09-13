import {defineField, defineType} from 'sanity'

export const techSchema = defineType({
  name: 'techs',
  title: 'Techs',
  type: 'document',
  fields: [
    defineField({
      name: 'name', // Field name for the tech
      title: 'Name', // Label for the tech
      type: 'string', // The field type
    }),
  ],
})
