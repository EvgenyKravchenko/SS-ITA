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
      this.operand1 = parseFloat(document.getElementById("operand1").value);
      this.operand2 = parseFloat(document.getElementById("operand2").value);
    }

    this.view_result = function() {
      this.validate_result();
      document.getElementById("result").value = this.result;
    }

    this.validate_result = function() {
      this.result = (this.result === Infinity || isNaN(this.result) === true) ? 'Div by zero!': this.result.toFixed(2);
    }
    
    return this;
  }
