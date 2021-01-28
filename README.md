# Learn CS in Tamil - Code Reviews - Episode #1

[Episode Link](https://www.learncsintamil.com/code-reviews/episode-01-weather-app)

Reviewing the [Weather App](https://github.com/S-Vasanth/weather) by Vasanth (https://github.com/S-Vasanth)

===================================================================================================================


## Weather App

A sample weather finding application using node.js for learning and understanding the technologies involved.

## Steps To Run

Make sure you have the latest version of node.js installed on your machine. I've developed it using `15.0.1`.

1. Create a free account in the following websites and get the corresponding API access tokens
  - [Mapbox](https://www.mapbox.com/)
  - [Weatherstack](https://weatherstack.com/)
2. Open Terminal or Powershell (in windows)
3. Clone this git repo.
4. Set the following environment variables 
```bash
# In Linux or Mac OS
export WEATHER_APP_MAP_BOX_ACCESS_TOKEN=your_mapbox_access_token
export WEATHER_APP_WEATHER_STACK_ACCESS_KEY=your_weatherstack_access_token
# In Windows
SET WEATHER_APP_MAP_BOX_ACCESS_TOKEN=your_mapbox_access_token
SET WEATHER_APP_WEATHER_STACK_ACCESS_KEY=your_weatherstack_access_token
``` 
5. Install the packages using the `npm install` command.
6. Then start the server in the `dev` mode using the `npm run dev` command.
7. Visit http://localhost:3000 in the browser to view the app.