function Facade () {

  var url = "backend/server.php";


  this.sendRequest = function(targ, callback) {
    $.ajax({
      url: "backend/server.php",
      data : {"target" : targ},
      success: function(data){
        callback(data);
      }
    });
  };

}