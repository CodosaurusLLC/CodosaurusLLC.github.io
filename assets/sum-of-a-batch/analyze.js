function mead_analyze() {
  var errs = [];
  var fg = get_number('FG', errs);
  var og = get_number('OG', errs);

  var abv = (og - fg) * 131.25;

  document.getElementById('results').innerHTML =
    '<p>That means an ABV of about ' + abv.toFixed(1) + '%.</p>';
}
