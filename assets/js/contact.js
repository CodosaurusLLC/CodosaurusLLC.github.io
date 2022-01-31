function check_form() {
  var form = document.forms['contact'];
  var mt = form['mt'].value;
  var ok = true;

  if(ok) {
    var mt = form['mt'].value;
    ok &&= mt == null || mt == "";
  }

  if(ok) { ok &&= form['notspam'].checked; }

  /* if false it will just sit there, naughty spammer! */
  return ok;
}
