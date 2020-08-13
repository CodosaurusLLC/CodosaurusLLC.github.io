function mead_blend() {
  var vol1 = parseFloat(document.getElementById('vol1').value) || 0;
  var vol2 = parseFloat(document.getElementById('vol2').value) || 0;
  var vol_tot = vol1 + vol2;
  var sg1 = parseFloat(document.getElementById('sg1').value) || 0;
  var sg2 = parseFloat(document.getElementById('sg2').value) || 0;
  var sg_avg = (sg1 * vol1 + sg2 * vol2) / vol_tot;
  var abv1 = parseFloat(document.getElementById('abv1').value) || 0;
  var abv2 = parseFloat(document.getElementById('abv2').value) || 0;
  var abv_avg = (abv1 * vol1 + abv2 * vol2) / vol_tot;

  document.getElementById('results').innerHTML = [
    'The combined batch will have:',
    '<ul>',
    '<li>a volume of ' + vol_tot + ' units,</li>',
    '<li>an SG of ' + sg_avg.toFixed(3) + ', and</li>',
    '<li>an ABV of ' + abv_avg.toFixed(1) + '%.</li>',
    '</ul>'].join('\n');
}
