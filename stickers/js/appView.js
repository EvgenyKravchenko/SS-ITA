var AppView = Backbone.View.extend({

    el: $("#sticker-board"),
    events: {
      "click" : "createSticker",
      "contextmenu" : "noEvent",
      "selectstart" : "noEvent"
    },

    initialize: function() {
      stickerList.bind("add", this.addSticker, this);
      stickerList.bind("reset", this.loadStickers, this);
      stickerList.fetch();
      stickerList.correctCountItems();
    },

    addSticker: function(model) {
      var sticker_view = new StickerView({ model:model });
      // this.$el.append(sticker_view.render().el);  ???
      $("#sticker-board").append(sticker_view.render().el);
      sticker_view.makeDraggable();
      sticker_view.editSticker();
    },

    createSticker: function() {
      var e = event || window.event,
          top = e.pageY - 50 + "px",
          left = e.pageX - 75 + "px",
          count = stickerList.getCountItems();

      stickerList.create(new Sticker({id:count, top:top, left:left}));
      return false;
    },

    loadSticker: function(model) {
      var sticker_view = new StickerView({ model:model });
      $("#sticker-board").append(sticker_view.render().el);
      sticker_view.makeDraggable();
    },

    loadStickers: function() {
      stickerList.each(this.loadSticker);
    },

    noEvent: function() {
      return false;
    }

});