TrelloClone.Views.BoardsIndex = Backbone.View.extend({

  initialize: function(boards) {
    this.boards = boards;
  },

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});
