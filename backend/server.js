const express = require('express');
const http = require('http');
const axios = require('axios');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/news', async (req, res) => {
  try {
    const response = await axios.get('https://api.currentsapi.services/v1/latest-news', {
      params: {
        language: 'en',
        apiKey: 'r-eZZd0qni9qzFmzDnp-jSeU9KvyYmlc_Uy1feRwKIBYjtZI', 
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Error fetching news' });
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
