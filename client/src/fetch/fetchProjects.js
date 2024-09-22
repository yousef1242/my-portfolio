const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET; 
const apiVersion = 'v2021-10-21';

export const fetchProjects = async () => {
  const query = encodeURIComponent('*[_type == "projects"]');
  const url = `https://${projectId}.api.sanity.io/${apiVersion}/data/query/${dataset}?query=${query}`;
  

  try {
    const response = await fetch(url,{
        cache:"no-cache"
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
