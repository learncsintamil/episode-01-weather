const request = require("request");
const util = require("util");

const forecast = (latitude, longitude, callback) => {
  const baseUrl = `http://api.weatherstack.com`;
  const accessKey = process.env.WEATHER_APP_WEATHER_STACK_ACCESS_KEY;
  const url = `${baseUrl}/current?access_key=${accessKey}&query=${latitude}, ${longitude}&units=m`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect weather", undefined);
      return;
    }
    if (body.error) {
      callback("unable to find location.", undefined);
      return;
    }

    callback(undefined, {
      description: body.current.weather_descriptions[0],
      temperature: body.current.temperature,
      windSpeed: body.current.wind_speed,
      humidity: body.current.humidity,
    });
  });
};
module.exports = util.promisify(forecast);
