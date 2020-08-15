function mead_blend() {
  var errs = [];
  var vol1 = get_number('vol1', errs);
  var vol2 = get_number('vol2', errs);
  var sg1 = get_number('sg1', errs);
  var sg2 = get_number('sg2', errs);
  var abv1 = get_number('abv1', errs);
  var abv2 = get_number('abv2', errs);

  if (errs.length > 0) return alert('ERROR:\n' + errs.join('\n'));

  var vol_tot = vol1 + vol2;
  var sg_avg = (sg1 * vol1 + sg2 * vol2) / vol_tot;
  var abv_avg = (abv1 * vol1 + abv2 * vol2) / vol_tot;

  document.getElementById('results').innerHTML = [
    'The combined batch will have:',
    '<ul>',
    '<li>a volume of ' + vol_tot + ' units,</li>',
    '<li>an SG of ' + sg_avg.toFixed(3) + ', and</li>',
    '<li>an ABV of ' + abv_avg.toFixed(1) + '%.</li>',
    '</ul>'].join('\n');
}
