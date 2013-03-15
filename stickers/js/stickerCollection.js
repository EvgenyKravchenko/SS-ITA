var StickerCollection = Backbone.Collection.extend({
    model: Sticker,
    last_id: 0,
    localStorage: new Backbone.LocalStorage("StickerCollection"),

    getCountItems: function() {
      return this.last_id++;
    },

    correctCountItems: function() {
      if (this.length) {
        this.last_id = this.at(this.length-1).id + 1;
      }
    }

});