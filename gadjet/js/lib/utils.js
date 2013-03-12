/**
* Return element by id
*/
function getEl (id) {
  return document.getElementById(id);
}

/**
* Get elements by class name
*/
function getEls (class_name) {
  return document.getElementsByClassName(class_name);
}

/**
* Set event listener on element by id
*/
function setList (id, action, func){
  var el = getEl(id);
  el.addEventListener(action, func, false);
}

/**
* Set event listener on element by element
*/
function setListOnEl (element, action, func) {
  element.addEventListener(action, func, false);
}

