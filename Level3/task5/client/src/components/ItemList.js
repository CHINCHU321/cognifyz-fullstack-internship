import React, { useState, useEffect } from 'react';
import { fetchItems } from '../services/api';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems()
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{`${item.id}: ${item.name}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
