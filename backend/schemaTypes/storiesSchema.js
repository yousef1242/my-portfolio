import {defineField, defineType} from 'sanity'

export const storiesSchema = defineType({
  name: 'stories',
  title: 'Stories',
  type: 'document',
  fields: [
    defineField({
      name: 'type', // Field name for the tech
      title: 'Type', // Label for the tech
      type: 'string', // The field type
    }),
    defineField({
      name: 'text', // Field name for the tech
      title: 'Text', // Label for the tech
      type: 'string', // The field type
    }),
    defineField({
      name: 'name', // Field name for the tech
      title: 'Name', // Label for the tech
      type: 'string', // The field type
    }),
  ],
})
