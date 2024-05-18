const API_URL = 'http://localhost:3000/api';

export const fetchItems = async () => {
  try {
    const response = await fetch(`${API_URL}/items`);
    if (!response.ok) {
      throw new Error('Failed to fetch items');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
};
