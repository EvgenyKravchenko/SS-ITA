function BasePresenter () {

  this.render = function() {
    // body
  };
  
  this.correctValue = function(value) {
    return (("" + value).length < 2) ? "0" + value : value;
  };
}