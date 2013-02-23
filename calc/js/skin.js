function Skin () {
  var skin = "standard",
      self = this,
      elements,
      class_name = "numbers";

  this.toggleSkin = function() {
    
    skin = (skin === "cool") ? "standard" : "cool" ;
    class_name = (skin === "standard") ? "numbers" : "numbers-div" ;
    self.renderSkin();
  };
  
  this.renderSkin = function() {
    getEl("container_buttons").innerHTML = getEl(skin).innerHTML;
    
    elements = getEls(class_name);
    for (var i = 0; i < elements.length; i++) {
      setListOnEl(elements[i], "click", function(e) {controller.numberListener(e); });
    }
    setList("add", "click", function(){ controller.action("+"); });
    setList("sub", "click", function(){ controller.action("-"); });
    setList("mul", "click", function(){ controller.action("*"); });
    setList("div", "click", function(){ controller.action("/"); });
  };
  
  
  
  
}