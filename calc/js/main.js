var disableArray = [0, 0],
    controller = new Controller(),
    skin = new Skin();
    active_input = "operand1",
    calc = "";


CalcPro.prototype = new CalcBase();

calc = new CalcPro();

setListOnEl(window, "load", function() { controller.init(); });
document.onselectstart = function() { return false; };
