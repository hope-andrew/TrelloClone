TrelloClone.Views.BoardItem = Backbone.View.extend({
  tagName: "li",
  template: JST["boards/item"],

  render: function() {
    var renderedContent = this.template({board: this.model});
    this.$el.html(renderedContent);
    return this;
  }
});
