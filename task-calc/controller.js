var disableArray = new Array(0, 0);
var calc = new Calc();
var controller = new Controller();

window.onload = function() { controller.init(); }


function Controller() {
  
  this.init = function() {
    
    document.getElementById("add").addEventListener("click", function(){ action("+"); }, false);
    document.getElementById("sub").addEventListener("click", function(){ action("-"); }, false);
    document.getElementById("mul").addEventListener("click", function(){ action("*"); }, false);
    document.getElementById("div").addEventListener("click", function(){ action("/"); }, false);
    document.getElementById("operand1").addEventListener("keyup", function(){checkValues(this,0)}, false);
    document.getElementById("operand1").addEventListener("keyup", function(){checkValues(this,1)}, false);
    
    document.getElementById("result").readOnly = true;
    checkValues(document.getElementById("operand1"), 0);
  }
  
  
  
  function action(act) {
    var operand1 = parseFloat(document.getElementById("operand1").value) || 0;
    var operand2 = parseFloat(document.getElementById("operand2").value) || 0;
    var result;
    
    switch (act) {
      case "+" : result = calc.add(operand1, operand2); break;       
      case "-" : result = calc.sub(operand1, operand2); break;       
      case "*" : result = calc.mul(operand1, operand2); break;       
      case "/" : result = calc.div(operand1, operand2); break;       
    }

    result = (result === Infinity || isNaN(result) === true) ? 'Div by zero!': result.toFixed(2);
    document.getElementById("result").value = result;
  }
  
  function checkValues(obj, tag){

    var regex = new RegExp(/^(?:\d+(?:\.\d+)?)$/);
    
    if (regex.test(obj.value) || obj.value === '') {
      obj.className = '';
      disableArray[tag] = 1;
    } else {
      obj.className = "wrong";
      disableArray[tag] = 0;
    }
  
  
    function setState(state) {
      document.getElementById("add").disabled = state;
      document.getElementById("sub").disabled = state;
      document.getElementById("mul").disabled = state;
      document.getElementById("div").disabled = state;
    }
  
    if (disableArray[0] === 1 && disableArray[1] === 1 && obj.value !== '') {
      setState(false);
    } else {
      setState(true);
    }

  }
  
  return this;
}





