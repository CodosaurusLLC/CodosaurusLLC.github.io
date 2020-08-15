function get_number(name, errs, blank_ok = false) {
  var val = get_value(name);
  if (val == '' && blank_ok) return 0;
  var res = parseFloat(val);
  if (isNaN(res)) {
    errs.push('"' + val + '" is not a valid value for ' + name);
    return;
  } else if (res <= 0 && !blank_ok) {
    errs.push(name + ' must be greater than zero');
    return;
  } else return res;
}


function get_value(name) {
  return document.getElementById(name).value;
}
