ABV_PER_SG_POINT = 131.25;
HONEY_SG = 1.425;
LITERS_PER_GALLON = 3.78541;
KILOS_PER_POUND = 0.453592;

function mead_plan() {
  var errs = [];
  var honey_mass = get_number('honey', errs);
  var water_vol = get_number('water', errs);
  var tolerance = get_number('tolerance', errs);

  if (errs.length > 0) return alert('ERROR:\n' + errs.join('\n'));

  var honey_kg = honey_mass;
  var mass_unit = get_value('mass_unit');
  if (mass_unit == 'pounds') honey_kg *= KILOS_PER_POUND;
  var honey_liters = honey_kg / HONEY_SG;

  var water_liters = water_vol;
  var volume_unit = get_value('volume_unit');
  if (volume_unit == 'gallons') water_liters *= LITERS_PER_GALLON;

  if (window.size_type == 'volume') water_liters -= honey_liters;
  else if (volume_unit == 'liters') water_vol += honey_liters;
  else water_vol += honey_liters / LITERS_PER_GALLON;

  var total_kg = water_liters + honey_kg;
  var total_liters = water_liters + honey_liters;
  var boost = get_number('boost', errs, true) || 0;
  if (errs.length > 0) return alert('ERROR:\n' + errs.join('\n'));
  var og = total_kg / total_liters + boost;

  var result_pieces = [];

  result_pieces.push('That batch should start with an SG of about ' +
                     og.toFixed(3) + ',');
  var str = ['based on', honey_mass, mass_unit, 'of honey in',
             water_vol.toFixed(1), volume_unit, 'total volume<br/>',
             '(assuming a typical honey SG of ' + HONEY_SG + ')'].join(' ');
  if (boost) {
    str += ',<br/>plus a boost of ' + boost + ' from other fermentables';
  }
  result_pieces.push(str + '.');

  var abv_max = (og - 1) * ABV_PER_SG_POINT;
  result_pieces.push('That\'s enough sugar to reach ' +
                     abv_max.toFixed(1) + '% ABV,');
  if (abv_max <= tolerance) result_pieces.push('which your yeast can do.');
  else result_pieces.push('but your yeast can only handle ' + tolerance + '%.');
  var abv_net = Math.min(abv_max, tolerance);
  var fg = og - abv_net / ABV_PER_SG_POINT;
  result_pieces.push('So, it should finish with an ABV of about ' +
                     abv_net.toFixed(1) + '%,', 
                     'and an SG of about ' + fg.toFixed(3) +
                     ', which is considered ' + sweetness(fg) + '.');
  document.getElementById('results').innerHTML =
    result_pieces.join('<br/>') + '<br/><br/>';
}


// horrible kluge since we can't just read the value
window.size_type = 'water';
function set_radio_size(element) {
  window.size_type = element.value;
}
