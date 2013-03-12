
function Controller() {
  var self = this;

  this.init = function() {

    setList("toggleSkin", "click", skin.toggleSkin);
    getEl("result").readOnly = true;

    skin.loadSkin("standard");
    setList("operand1", "focus", function() { active_input = "operand1"; } );
    setList("operand2", "focus", function() { active_input = "operand2"; } );
    setList("operand1", "input", function() { self.checkValues(this,0); });
    setList("operand2", "input", function() { self.checkValues(this,1); });

  };


  this.action = function(act) {
    var operand1 = parseFloat(getEl("operand1").value) || 0,
        operand2 = parseFloat(getEl("operand2").value) || 0,
        result,
        incorrect;

    switch (act) {
      case "+" : result = calc.add(operand1, operand2); break;
      case "-" : result = calc.sub(operand1, operand2); break;
      case "*" : result = calc.mul(operand1, operand2); break;
      case "/" : result = calc.div(operand1, operand2); break;
    }
    incorrect = (result === Infinity || isNaN(result) === true);
    result = (incorrect) ? 'Div by zero!' : result.toFixed(2);
    getEl("result").value = result;
  };


  this.checkValues = function(obj, tag){

    var regex = new RegExp(/^(?:\d+(?:\.\d+)?)$/);

    if (regex.test(obj.value)) {
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

    if (disableArray[0] === 1 && disableArray[1] === 1) {
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