@ -0,0 +1,21 @@
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/save-name', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).send('Name is required');

  const data = { name, time: new Date().toISOString() };
  fs.appendFile('names.json', JSON.stringify(data) + '\n', err => {
    if (err) return res.status(500).send('Error saving name');
    res.status(200).send('Name saved');
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
