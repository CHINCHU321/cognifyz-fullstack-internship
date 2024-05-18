// Dummy data for demonstration
let data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// CRUD operations for items
const itemController = {
  getAllItems: (req, res) => {
    res.json(data);
  },
  getItemById: (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = data.find(item => item.id === itemId);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  },
  createItem: (req, res) => {
    const newItem = req.body;
    newItem.id = data.length + 1;
    data.push(newItem);
    res.status(201).json(newItem);
  },
  updateItem: (req, res) => {
    const itemId = parseInt(req.params.id);
    const updatedItem = req.body;
    const index = data.findIndex(item => item.id === itemId);
    if (index !== -1) {
      data[index] = updatedItem;
      res.json(updatedItem);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  },
  deleteItem: (req, res) => {
    const itemId = parseInt(req.params.id);
    data = data.filter(item => item.id !== itemId);
    res.status(204).end();
  }
};

module.exports = itemController;
