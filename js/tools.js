function changeVisibility(item, visibility) {
  visibility === 'visible' && item.classList.add("visible");
  visibility === 'hidden' && item.classList.remove("visible");
}

function validationCheck(value, reg) {
  if (!reg.test(value) || !(value === value.match(reg)[0])) return false;
  return true;
}