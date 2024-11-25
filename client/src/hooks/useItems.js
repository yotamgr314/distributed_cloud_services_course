/*NOTE THIS FILE IS WHERE WE CONNECT USER - RELATED ACTIONS LIKE: 
 SUBMITTING A FORM, PRESSING A BUTTON TO THE BACKEND API ROUTES VIA THE services/user.service.js FUNCTIONS. */

/* NOTE: The hooks folder is where we connect user actions (like button clicks or form submissions) 
to the service layer. 
This file (useItems.js) is responsible for managing the state and logic related to item operations, 
such as fetching, creating, updating, or deleting items in the UI.
*/

/* NOTE HERE IS AN OPTIONAL EXAMPLE OF CONNECTION THE USER  */


/* import { useState, useEffect } from "react";
import { getItems, createItem } from "../services/items.service";

export function useItems() {
  const [items, setItems] = useState([]);

  // שליפה של פריטים מהשרת
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  // יצירת פריט חדש
  const addItem = async (newItem) => {
    try {
      const createdItem = await createItem(newItem);
      setItems((prevItems) => [...prevItems, createdItem]);
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  return { items, addItem };
}
 */