function SmallTimePresenter () {
  var self = this;

  this.render = function() {
    var date = new Date(),
        hours = self.correctValue(date.getHours()),
        minutes = self.correctValue(date.getMinutes()),
        current_time = "";


    current_time = hours + ":" + minutes;
    return current_time;


  };

  return this;

}