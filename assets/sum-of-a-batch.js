HONEY_POUNDS_PER_GALLON = 11.94;
WATER_POUNDS_PER_GALLON = 8.34;

function mead_calc() {
  var honey_pounds = parseFloat(document.getElementById('honey').value) || 0;
  var gallons = parseFloat(document.getElementById('gallons').value) || 0;
  var size_type = window.size_type;
  var tolerance = parseFloat(document.getElementById('tolerance').value) || 0;
  var result_pieces = [];

  var honey_gallons = honey_pounds / HONEY_POUNDS_PER_GALLON;
  var water_gallons = gallons;
  if (size_type == 'volume') water_gallons -= honey_gallons;
  var total_gallons = water_gallons + honey_gallons;
  var boost = parseFloat(document.getElementById('boost').value) || 0;

  var total_pounds = water_gallons * WATER_POUNDS_PER_GALLON + honey_pounds;
  var og = total_pounds / total_gallons / WATER_POUNDS_PER_GALLON + boost;
  result_pieces.push('That batch should start with an SG of about ' +
                     og.toFixed(3) + '%,');
  var str = ('based on ' + honey_pounds + ' pounds of honey in ' +
        total_gallons.toFixed(2) + ' gallons total volume');
  if (boost) str += ',\nplus a boost of ' + boost + ' from other fermentables';
  result_pieces.push(str + '.');

  var abv_max = (og - 1) / .007;
  result_pieces.push('That\'s enough sugar to reach ' +
                     abv_max.toFixed(1) + '% ABV,');
  if (abv_max <= tolerance) result_pieces.push('which your yeast can do.');
  else result_pieces.push('but your yeast can only handle ' + tolerance + '%.');
  var abv_net = Math.min(abv_max, tolerance);
  var fg = og - .007 * abv_net;
  result_pieces.push('So, it should finish with an ABV of about ' +
                     abv_net.toFixed(1) + ',', 
                     'and an SG of about ' + fg.toFixed(3) + '.');
  document.getElementById('results').innerText = result_pieces.join('\n');
}


window.size_type = 'water';
function set_radio_size(element) {
  window.size_type = element.value;
}

