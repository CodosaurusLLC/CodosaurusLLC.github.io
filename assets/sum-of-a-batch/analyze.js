function mead_analyze() {
  var errs = [];
  var fg = get_number('FG', errs);
  var og = get_number('OG', errs);

  var abw = 76.08 * (og - fg) / (1.775 - og);
  var abv = abw * fg / 0.794;

  document.getElementById('results').innerHTML = [
    '<table>',
      '<tr>',
        '<td>Alcohol by Volume: </td>',
        '<td>', abv.toFixed(1), '%</td>',
      '</tr>',
      '<tr>',
        '<td>Alcohol by Weight: </td>',
        '<td>', abw.toFixed(1), '%</td>',
      '</tr>',
    '</table>'
  ].join('');
}
