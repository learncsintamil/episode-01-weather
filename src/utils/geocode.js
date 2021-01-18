const request = require("request");
const util = require("util");

const geocode = (address, callback) => {
  const accessToken = process.env.WEATHER_APP_MAP_BOX_ACCESS_TOKEN;
  const baseUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places";
  const url = `${baseUrl}/${address}.json?access_token=${accessToken}&limit=1`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect location services", undefined);
      return;
    }
    if (body.features.length === 0) {
      callback("unable to find location.try another search", undefined);
      return;
    }
    callback(undefined, {
      latitude: body.features[0].center[1],
      longitude: body.features[0].center[0],
      location: body.features[0].place_name,
    });
  });
};

module.exports = util.promisify(geocode);
