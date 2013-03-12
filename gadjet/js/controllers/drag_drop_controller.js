function DragAndDrop () {
  var self = this,
      drag = 0,
      x, y,
      x_old, y_old,
      startx, starty;

  this.init = function() {
    setList("container", "mousedown", function(e){ self.downHandler(e);} );
    setList("container", "mousemove", function(e){ self.moveHandler(e);} );
    setListOnEl(document, "mouseup",  function(e){ self.upHandler(e); } );
  };


  this.downHandler = function(e){

    var element = getEl("container");
    if (checkButton(e) === "left") {
      x_old = definePosition(e).x;
      y_old = definePosition(e).y;
      x = absolutePosition(element).x;
      y = absolutePosition(element).y;

      startx = x_old;
      starty = y_old;
    }

  };

  this.moveHandler = function(event){
    var element = getEl("container"),
        x_move = definePosition(event).x,
        y_move = definePosition(event).y;

    if (startx && starty){
      if ((startx !== x_move) || (starty !== y_move)){
        drag = 1;
      }
    }

    if (drag) {
      element.style.left = x + definePosition(event).x - x_old + "px";
      element.style.top = y + definePosition(event).y - y_old + "px";
    }


  };

  this.upHandler = function(){
    drag = 0;

    var target = event.target || event.srcElement;

    startx = null;
    starty = null;
    document.onmousemove = null;

  };

  /* Private methods */

  function checkButton(event){
    var button;
    if (event.which === 1) button = "left";
    else if (event.which === 3) button = "right";

    if (!event.which && event.button) {
      if (event.button & 1) button = "left";
      else if (event.button & 2) button = "right";
    }

    return button;
  }

  function definePosition(e) {
    var x = 0,
        y = 0;

    if (document.attachEvent) {
      x = e.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
      y = e.clientY + document.documentElement.scrollTop + document.body.scrollTop;
    }
    if (!document.attachEvent && document.addEventListener) {
      x = e.clientX + window.scrollX;
      y = e.clientY + window.scrollY;
    }
    return {x:x, y:y};
  }

  function absolutePosition(object){
    var x = 0,
        y = 0;

    while(object) {
      x += object.offsetLeft;
      y += object.offsetTop;
      object = object.offsetParent;
    }
    return {x:x, y:y};
  }

  this.isDrag = function() {
    return (drag) ? true : false ;
  };


  return this;
}