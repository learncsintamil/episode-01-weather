const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const baseUrl = `http://api.weatherstack.com`;
  const accessKey = process.env.WEATHER_APP_WEATHER_STACK_ACCESS_KEY;
  const url = `${baseUrl}/current?access_key=${accessKey}&query=${latitude}, ${longitude}&units=m`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect weather", undefined);
    } else if (body.error) {
      callback("unable to find location.", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". it is currently " +
          body.current.temperature +
          " degree celsius. Winds speed " +
          body.current.wind_speed +
          " km/hr.The Humidity is " +
          body.current.humidity +
          "%."
      );
    }
  });
};
module.exports = forecast;
