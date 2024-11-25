/* NOTE HERE IS WHERE I CONNECT THE BACKEND ROUTES RELATED TO ITEMS WITH THE FRONTEND,
   WHERE WE CREATE FUNCTION WHICH MAKES API CALLS TO THE BACKEND PREDEFINED ROUTES OF ITEMS. 
   FOR EXAMPLE - FUNCTIONS WHICH RESPONSIBLE FOR FECTHING, CREATING, UPDATING, DELETING ITEMS USING HTTP REQUESTS.*/



// NOTE: here is an example of implemnation to the services - aka a file which holds all the functions which uses the API. 

/* const BASE_URL = "http://localhost:5000";

export const getItems = async () => {
  const response = await fetch(`${BASE_URL}/items`);
  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }
  return await response.json();
};

export const createItem = async (itemData) => {
  const response = await fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(itemData),
  });
  if (!response.ok) {
    throw new Error("Failed to create item");
  }
  return await response.json();
};
 */