window.onload = function() {
  
  var calc = new Calc();
  document.getElementById("add").addEventListener('click', function(){calc.add();}, false);
  document.getElementById("sub").addEventListener('click', function(){calc.sub();}, false);
  document.getElementById("mul").addEventListener('click', function(){calc.mul();}, false);
  document.getElementById("div").addEventListener('click', function(){calc.div();}, false);
  document.getElementById("result").readOnly = true;
  
  disableArray = new Array(0, 0);
  checkValues(document.getElementById("operand1"), 0);
  document.getElementById("operand1").addEventListener('keyup', function(){checkValues(this,0)}, false);
  document.getElementById("operand1").addEventListener('keyup', function(){checkValues(this,1)}, false);

}


function checkValues(obj, tag){

  var regex = new RegExp(/^(?:\d+(?:\.\d+)?)$/);
  if (regex.test(obj.value) || obj.value === '') {
      obj.className = '';
      disableArray[tag] = 1;
  } else {
      obj.className = 'wrong';
      disableArray[tag] = 0;
  }


  function setState(state) {
      document.getElementById('add').disabled = state;
      document.getElementById('sub').disabled = state;
      document.getElementById('mul').disabled = state;
      document.getElementById('div').disabled = state;
  }

  if (disableArray[0] === 1 && disableArray[1] === 1 && obj.value !== '') {
      setState(false);
  } else {
      setState(true);
  }

}


