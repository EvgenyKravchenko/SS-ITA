var runtime = new RuntimeController();
var dragdrop = new DragAndDrop();

window.onload = function() {
  document.oncontextmenu = function() { return false; };
  document.onselectstart = function() { return false; };
  runtime.init();
  dragdrop.init();
};