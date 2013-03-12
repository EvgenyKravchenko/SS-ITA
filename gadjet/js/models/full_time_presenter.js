function FullTimePresenter () {
  var self = this;

  this.render = function() {
    var date = new Date(),
        hours = self.correctValue(date.getHours()),
        minutes = self.correctValue(date.getMinutes()),
        seconds = self.correctValue(date.getSeconds()),
        current_time = "";

    current_time = hours + ":" + minutes + ":" + seconds;
    return current_time;


  };

  return this;

}