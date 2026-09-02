# Weather Now

A small weather lookup app — type in a city, get the current conditions back. Built to practice integrating a third-party API into a full Node/Express stack.

**Live demo:** #
**Repo:** #

<img width="1600" height="802" alt="image" src="https://github.com/user-attachments/assets/684d9ad5-ce86-4342-99f8-f89c8dd317fe" />


## What it does

You type a city name, hit submit, and it shows you the temperature, a short description of the conditions, humidity, wind speed, and how it actually feels outside — along with a matching weather icon. If something goes wrong (bad city name, API hiccup), it fails gracefully instead of crashing.

## Stack

- Node.js + Express for the server
- Axios for the API calls
- EJS for rendering the page
- Plain CSS — no frameworks
- OpenWeatherMap's Current Weather API for the data
- dotenv to keep the API key out of the codebase

## How it's wired together

The form posts a city name to the server. 
Express grabs it from the request body, builds the API request, and calls OpenWeatherMap with Axios. 
The API key never touches the frontend — it's loaded from an environment variable at runtime. 
Once the response comes back, it's passed into an EJS template, which either renders the weather card or shows a fallback message if there's nothing to display yet.

## Running it locally

```bash
git clone <https://github.com/vaishnavi10S/weatherAPI>
cd weather-now
npm install
```

Add a `.env` file:

```
api_key=your_key_here
```

Then:

```bash
nodemon index.js
```

Open `localhost:3000`.

Vaishnavi Sharma

