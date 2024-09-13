import {defineField, defineType} from 'sanity'

export const experienceSchema = defineType({
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    defineField({
      name: 'title', // Field name for the title
      title: 'Title', // Label for the title
      type: 'string', // The field type
    }),
    defineField({
      name: 'description', // Field name for the description
      title: 'Description', // Label for the description
      type: 'text', // The field type
      description: 'Short description of the experience', // Help text
    }),
    defineField({
      name: 'websiteLink', // Field name for the website link
      title: 'Website Link', // Label for the website link
      type: 'url', // The field type
      description: 'Link to the relevant website',
    }),
  ],
})
