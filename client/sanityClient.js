// sanityClient.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = 'xxlhhl9o'; // Replace with your Sanity project ID
const dataset = 'production'; // Replace with your dataset name
const apiVersion = 'v2021-10-21'; // Replace with the API version you are using

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if you want fresh data
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

