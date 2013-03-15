var StickerCollection = Backbone.Collection.extend({
    model: Sticker,
    last_id: 0,
    localStorage: new Store("stickers"),

    getCountItems: function() {
      return this.last_id++;
    }

});