window.onload = function() {
    
  function Calc() {
    
    this.add = function() {
      this.action("+");
    }

    this.sub = function() {
      this.action("-");
    }

    this.mul = function() {
      this.action("*");
    }

    this.div = function() {
      this.action("/");
    }

    this.action = function(action) {
      this.get_values();

      switch (action) {
        case '+': this.result = this.operand1 + this.operand2;  break;
        case '-': this.result = this.operand1 - this.operand2;  break;
        case '*': this.result = this.operand1 * this.operand2;  break;
        case '/': this.result = this.operand1 / this.operand2;  break;
      }

      this.view_result();
    }

    this.get_values = function() {
      this.operand1 = Number(document.getElementById("operand1").value);
      this.operand2 = Number(document.getElementById("operand2").value);
    }

    this.view_result = function() {
      this.validate_result();
      document.getElementById("result").value = this.result;
    }

    this.validate_result = function() {
      this.result = (this.result === Infinity || isNaN(this.result) === true) ? 'Div by zero!': this.result.toFixed(2);
    }

  }


    calc = new Calc();
    
    document.getElementById("add").addEventListener('click', function(){calc.add();}, false);
    document.getElementById("sub").addEventListener('click', function(){calc.sub();}, false);
    document.getElementById("mul").addEventListener('click', function(){calc.mul();}, false);
    document.getElementById("div").addEventListener('click', function(){calc.div();}, false);
    document.getElementById("result").readOnly = true;
    
    disableArray = new Array(0,0);
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


