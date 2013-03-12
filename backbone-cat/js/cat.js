var Cat = Backbone.Model.extend({
  
  defaults:{
    name: "Murzik",
    color: "Grey"
  },

  initialize: function() {
    console.log(this.get("color") + " cat " + 
      this.get("name") + " was created...");
  },

  runAway: function() {
    console.log(this.get("color") + " cat " + 
      this.get("name") + " run away...");
  },

  rename: function(name) {
    this.set({"name" : name});
    console.log("New name is " + this.get("name"));
  }

});


var murzik = new Cat();

