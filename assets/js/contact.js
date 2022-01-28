function check_form() {
  var form = document.forms['contact'];
  var mt = form['mt'].value;
  /* if false it will just sit there, naughty spammer! */
  return mt == null || mt == "";
}
