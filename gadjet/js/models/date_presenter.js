function DatePresenter () {
  var self = this;

  this.render = function() {
    var date = new Date(),
        day = self.correctValue(date.getDate()),
        month = self.correctValue(date.getMonth() + 1),
        year = self.correctValue(date.getFullYear());

    string_date = day + "." + month + "." + year;
    return string_date;


  };

  return this;
  
}