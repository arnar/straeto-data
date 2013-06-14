var fs = require('fs');
var gs = require('geojson');

fs.readFile('allStops.json', 'utf8', function (err, data) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }

  var data = JSON.parse(data);

  gs.parse(data, {Point: ['latitude', 'longitude']}, function (parsed) {
    console.log(JSON.stringify(parsed));
  });

});
