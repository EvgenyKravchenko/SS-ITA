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

  this.loadSkin = function(skin){
    var ajax = new self.AjaxObject();

    ajax.onreadystatechange = function () {
      if (ajax.readyState === 4 && ajax.status === 200){
        self.injectSkin(ajax.responseText, skin);
      }
    };

    ajax.open("GET", "templates/" + skin + ".tpl", false);
    ajax.send();

  };

  this.injectSkin = function(html, skin){
    var script = document.createElement("script");
    script.setAttribute("type", "text/html");
    script.setAttribute("id", skin);
    script.innerHTML = html;
    document.getElementsByTagName("head")[0].appendChild(script);
    self.renderSkin();
  };


  this.renderSkin = function() {
    var func = function(e) {controller.numberListener(e); };
    if (!getEl(skin)) {
      self.loadSkin(skin);
    }

    getEl("container_buttons").innerHTML = getEl(skin).innerHTML;

    elements = getEls(class_name);

    for (var i = 0; i < elements.length; i++) {
      setListOnEl(elements[i], "click", func);
    }
    setList("add", "click", function(){ controller.action("+"); });
    setList("sub", "click", function(){ controller.action("-"); });
    setList("mul", "click", function(){ controller.action("*"); });
    setList("div", "click", function(){ controller.action("/"); });
  };



  this.AjaxObject = function() {
    var result;

    if (window.XMLHttpRequest){
      result = new XMLHttpRequest();
    } else {
      result =  new ActiveXObject('Microsoft.XMLHTTP');
    }
    return result;
  };

}