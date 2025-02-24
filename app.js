const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const db = require('./db')
const PORT = process.env.PORT || 3000
app.use(express.json()) // Parse incoming JSON data

// Serve static files from 'css', 'html', 'image', and 'js' directories
app.use('/css', express.static(path.join(__dirname, '../education-x/css')));
app.use('/html', express.static(path.join(__dirname, '../education-x/html')));
app.use('/image', express.static(path.join(__dirname, '../education-x/image')));
app.use('/js', express.static(path.join(__dirname, '../education-x/js')));

// Route for serving the home page (replace with actual serving logic)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'home.html'));
});

app.get('/cart', async (req, res) => {
  try {
    const results = await db.select('cart', '*'); // Assuming select takes table and column(s)
    console.log("Success")
    res.json(results);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).send('Error retrieving cart items');
  }
});

app.post('/cart', async (req, res) => {
  try {
    const newItem = req.body; // Assuming the request body contains the necessary properties
    const result = await db.insert('cart', newItem.id, newItem.product_name, newItem.price, newItem.user_id);
    console.log("Success");
    res.json({ message: 'Item added to cart successfully!' });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).send('Error adding item to cart');
  }
});



app.listen(port, () => console.log(`Server up at PORT:${port}`))
