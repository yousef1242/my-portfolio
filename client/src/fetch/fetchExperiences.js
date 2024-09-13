const projectId = 'xxlhhl9o'; // Replace with your Sanity project ID
const dataset = 'production'; // Replace with your dataset name
const apiVersion = 'v2021-10-21'; // Replace with the API version you are using

export const fetchExperiences = async () => {
  const query = encodeURIComponent('*[_type == "experiences"]');
  const url = `https://${projectId}.api.sanity.io/${apiVersion}/data/query/${dataset}?query=${query}`;
  

  try {
    const response = await fetch(url,{
        cache:"no-store"
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    
    return data.result; // Adjust based on the structure of the response
  } catch (error) {
    console.error("Error fetching techs:", error);
    return [];
  }
};