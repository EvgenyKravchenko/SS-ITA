var StickerView = Backbone.View.extend({

    tagName: "div",

    template: _.template($("#sticker-template").html()),

    events: {
      "contextmenu" : "editSticker",
      "keypress .edit" : "updateOnEnter",
      "blur .edit" : "closeEdit"
    },

    initialize: function() {
      // this.model.bind('change', this.render, this);
      this.model.bind('destroy', this.removeSticker, this);
    },

    makeDraggable: function() {
      var model = this.model;

      $("#" + model.get("id")).css("left", model.get("left"))
                              .css("top", model.get("top"));
      $("#" + model.get("id")).draggable({
        drag: function(event, ui) {
          model.save({top:ui.position.top+"px", left:ui.position.left+"px"});
        }
      });

      $("#" + model.get("id") + " input").hide();
    },

    editSticker: function() {
      $("#" + this.model.get("id") + " label").hide();
      $("#" + this.model.get("id") + " input").show().focus();
    },

    updateOnEnter: function() {
      var e = event || window.event;
      if (e.keyCode == 13) this.closeEdit();
    },

    closeEdit: function() {
      $("#" + this.model.get("id") + " input").hide();
      $("#" + this.model.get("id") + " .view").show();

      var new_title = $("#" + this.model.get("id") + " input").val();
      this.model.save({ title:new_title });
      this.render();
      this.makeDraggable();

    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    removeSticker: function() {
      this.remove();
    }


  });
