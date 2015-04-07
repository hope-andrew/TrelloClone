TrelloClone.Views.CardItem = Backbone.View.extend({
  tagName: "li",
  template:JST["cards/item"],

  render: function() {
    var renderedContent = this.template({card: this.model});
    this.$el.html(renderedContent);
    return this;
  }
});
