const express = require('express');

const router = express.Router();

const locationStorage = {
  locations: []
};

router.post('/add-location', (request, response, next) => {
  locationStorage.locations.push({
    id: Math.random(),
    address: request.body.address,
    coords: { lat: request.body.lat, lng: request.body.lng }
  });
  response.json({ message: 'Stored location!' });
});

router.get('/location', (request, response, next) => {

});

module.exports = router;