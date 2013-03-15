var DeleteView = Backbone.View.extend({
    el: $("#delete"),
    events: {
      "mouseover": "toggleHint",
      "mouseout": "toggleHint"
    },

    initialize: function() {
      this.$el.droppable({
        tolerance:"touch",
        drop: function(event, ui) {
          stickerList.get(ui.draggable.context.id | 0).remove();
        }
      });
    },

    toggleHint: function() {
      $("#hint").fadeToggle(700);
    }

});