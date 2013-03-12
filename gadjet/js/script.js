window.onload = function () {
  refresh_time();

  setList("container", "contextmenu", context_handler);
  setList("container", "mousedown", down_handler);
  setList("container", "mousemove", move_handler);
      
  setListOnEl(document, "contextmenu", function() {return false;});
  setListOnEl(document, "selectstart", function() {return false;});
  setListOnEl(document, "mouseup", up_handler);
  
  
};


/*
* time_mode = 0 - Format time 11:40
* time_mode = 1 - Format time 11:40:00
*
* date_time_mode = 0 - time
* date_time_mode = 1 - date
* */

var time_mode = 1,
    date_time_mode = 0,
    drag = 0,
    x, y, x_old, y_old,
    startx, starty;

function refresh_time() {
  var date = new Date();

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var current_time;

  hours = checked_value(hours);
  minutes = checked_value(minutes);

  current_time = hours + ":" + minutes;

  if (time_mode) {
    seconds = checked_value(seconds);
    current_time = current_time + ":" + seconds;
  }

  document.getElementById("container").innerHTML = current_time;
  setTimeout(refresh_date_time, 1000);
}

function refresh_date(){
  var date = new Date();

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  day = checked_value(day);
  month = checked_value(month);

  getEl("container").innerHTML = day + "." + month + "." + year;
  setTimeout(refresh_date_time, 1000*60);

}



function refresh_date_time(){
  switch (date_time_mode) {
    case 0: refresh_time(); break;
    case 1: refresh_date(); break;
  }
}

function context_handler() {
  date_time_mode = (date_time_mode) ? 0 : 1;
  refresh_date_time();
}

function down_handler(){
  var event = event || window.event;
  var element = document.getElementById("container");
  if (check_button(event) === "left") {
    x_old = define_position(event).x;
    y_old = define_position(event).y;
    x = absolute_position(element).x;
    y = absolute_position(element).y;

    startx = x_old;
    starty = y_old;
  }

}


function move_handler(event){
  var element = document.getElementById("container");

  var x_move = define_position(event).x;
  var y_move = define_position(event).y;
  if (startx && starty){
    if ((startx !== x_move) || (starty !== y_move)){
      drag = 1;
    }
  }

  if (drag) {
      element.style.left = x + define_position(event).x - x_old + "px";
      element.style.top = y + define_position(event).y - y_old + "px";
  }


}

function absolute_position(object){
  var x = 0;
  var y = 0;

  while(object) {
    x += object.offsetLeft;
    y += object.offsetTop;
    object = object.offsetParent;
  }
  return {x:x, y:y};
}


function define_position(event) {
  var x = 0;
  var y = 0;

  if (document.attachEvent) {
    x = window.event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
    y = window.event.clientY + document.documentElement.scrollTop + document.body.scrollTop;
  }
  if (!document.attachEvent && document.addEventListener) {
    x = event.clientX + window.scrollX;
    y = event.clientY + window.scrollY;
  }
  return {x:x, y:y};
}


function up_handler(){
  drag = 0;

  var target = event.target || event.srcElement;

  /* Если просто клик */
  if (startx === event.clientX && starty === event.clientY){
   time_mode = (target.innerHTML.length === 5)? 1 : 0;
   refresh_date_time();
  }


  startx = null;
  starty = null;
  document.onmousemove = null;

}


function checked_value(value){
  return value = (("" + value).length < 2) ? "0" + value : value;
}

function check_button(event){
  var button;
  if (event.which === 1) button = "left";
  else if (event.which === 3) button = "right";

  if (!event.which && event.button) {
    if (event.button & 1) button = "left";
    else if (event.button & 2) button = "right";
  }

  return button;
}


