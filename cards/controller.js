function Controller () {
  var self = this;

  this.init = function() {
    $(".card").bind("mouseenter", this.focusIn);
    $(".card").bind("mouseout", this.focusOut);
    $(".card").bind("click", this.clickHandler);
    $(document).bind("click", this.clear);
    $(".text").hide();
  };

  this.focusIn = function() {
    $(this).animate({
      top: '-=10',
      opacity: 1
    }, 400);
  };

  this.focusOut = function() {
    $(this).animate({
      top: '+=10',
      opacity: 0.6
    }, 400);
  };

  this.clickHandler = function() {
    var facade = new Facade(),
        id = this.id;

    facade.sendRequest(id, function(data) {
      self.renderCallback(id + "_text", data);
    });
  };

  this.renderCallback = function(target, data) {
    $("#" + target).html(data);
    $("#" + target).show();
  };

  this.clear = function() {
    $(".text").html("");
    $(".text").hide();
  };


  return this;
}