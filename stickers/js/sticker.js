var Sticker = Backbone.Model.extend({
    defaults: {
      title: "Sticker",
      id: "",
      top: "",
      left: ""
    },

    remove: function() {
      this.destroy();
    }

});