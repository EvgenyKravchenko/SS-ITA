var disableArray = [0, 0],
    calc_parent = new CalcBase();
    controller = new Controller(),
    skin = new Skin();
    active_input = "operand1";


CalcPro.prototype = calc_parent;

var calc = new CalcPro();

window.onload = function() { controller.init(); };
document.onselectstart = function() { return false; };

function Controller() {
  var self = this;

  this.init = function() {
    setList("toggleSkin", "click", skin.toggleSkin);
    getEl("result").readOnly = true;
    
    skin.renderSkin();
    setList("operand1", "focus", function() { active_input = "operand1"; } );
    setList("operand2", "focus", function() { active_input = "operand2"; } );
    setList("operand1", "keyup", function(){ self.checkValues(this,0); });
    setList("operand2", "keyup", function(){ self.checkValues(this,1); });
    self.checkValues(document.getElementById("operand1"), 0);
  };


  this.action = function(act) {
    var operand1 = parseFloat(getEl("operand1").value) || 0,
        operand2 = parseFloat(getEl("operand2").value) || 0,
        result;

    switch (act) {
      case "+" : result = calc.add(operand1, operand2); break;
      case "-" : result = calc.sub(operand1, operand2); break;
      case "*" : result = calc.mul(operand1, operand2); break;
      case "/" : result = calc.div(operand1, operand2); break;
    }
    // TODO: Question about var
    var incorrect = (result === Infinity || isNaN(result) === true);
    result = (incorrect) ? 'Div by zero!' : result.toFixed(2);
    getEl("result").value = result;
  };
  

  this.checkValues = function(obj, tag){

    var regex = new RegExp(/^(?:\d+(?:\.\d+)?)$/);
    
    if (regex.test(obj.value) || obj.value === '') {
      obj.className = '';
      disableArray[tag] = 1;
    } else {
      obj.className = "wrong";
      disableArray[tag] = 0;
    }
  
  
    function setState(state) {
      getEl("add").disabled = state;
      getEl("sub").disabled = state;
      getEl("mul").disabled = state;
      getEl("div").disabled = state;
    }
  
    if (disableArray[0] === 1 && disableArray[1] === 1 && obj.value !== '') {
      setState(false);
    } else {
      setState(true);
    }

  };

  this.numberListener = function (e) {
      getEl(active_input).value += e.target.id;
  };


  return this;
}