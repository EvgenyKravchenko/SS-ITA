window.onload = function() {
    document.getElementById("add").addEventListener('click', calculate, false);
    document.getElementById("sub").addEventListener('click', calculate, false);
    document.getElementById("mul").addEventListener('click', calculate, false);
    document.getElementById("div").addEventListener('click', calculate, false);
    document.getElementById("result").readOnly = true;
    disableArray = new Array(0,0);
    checkValues(document.getElementById("operand1"), 0);
}


function calculate() {
    var op1, op2;
    op1 = Number(document.getElementById("operand1").value);
    op2 = Number(document.getElementById("operand2").value);

    function process(result, action) {
        document.getElementById("action").innerText = action;
        document.getElementById("result").value = (result === Infinity || isNaN(result) === true) ? 'Div by zero!': result.toFixed(2);
    }

    var action = this.innerText;
    switch (action) {
        case '+': process(op1+op2, action); break;
        case '-': process(op1-op2, action); break;
        case 'x': process(op1*op2, action); break;
        case '/': process(op1/op2, action); break;

    }
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


