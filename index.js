import 'dotenv/config';
import ejs from 'ejs';
import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';


const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.post('/weather', async (req, res) => {
    try{
  const city = req.body.city;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.api_key}`;  
  const response = await axios.get(API_URL);
  const weatherData = response.data;
  res.render('index.ejs', { weather: weatherData });
    }catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).send('Error fetching weather data, check for typos in the city name or try again later.');
    }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;