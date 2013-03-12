function RuntimeController () {
  var self = this,
      obj = "",
      time_mode = "full",
      date_time_mode = "time";

  this.init = function() {
    setList("container", "contextmenu", function() { self.toggleMode("right"); });
    setList("container", "mousedown", function() { self.toggleMode("left"); });

    SmallTimePresenter.prototype = new BasePresenter();
    FullTimePresenter.prototype = new BasePresenter();
    DatePresenter.prototype = new BasePresenter();

    obj = new FullTimePresenter();
    setInterval(self.intervalHandler, 1000);
  };

  this.intervalHandler = function() {
    getEl("container").innerHTML = obj.render();
  };


  this.toggleMode = function(click) {

    switch (click) {
      case "right" :
        date_time_mode = (date_time_mode === "time") ? "date" : "time";
        switch (date_time_mode) {
          case "date" :
            obj = new DatePresenter();
            break;

          case "time" :
            switch (time_mode) {
              case "small" :
                obj = new SmallTimePresenter();
                break;

              case "full" :
                obj = new FullTimePresenter();
                break;
            }

            break;
        }
        break;

      case "left" :
      if ( !dragdrop.isDrag() ) {
        time_mode = (time_mode === "small") ? "full" : "small" ;
        switch (time_mode) {
          case "small" :
            obj = new SmallTimePresenter();
            break;

          case "full" :
            obj = new FullTimePresenter();
            break;
        }
        break;
      }


    }

  };


}