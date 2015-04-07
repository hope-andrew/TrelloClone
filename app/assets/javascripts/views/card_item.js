TrelloClone.Views.CardItem = Backbone.View.extend({
  tagName: "li",
  template:JST["cards/item"],

  events: {
    "click .delete-card": "delete"
  },

  render: function() {
    var renderedContent = this.template({card: this.model});
    this.$el.html(renderedContent);
    return this;
  },

  delete: function(event) {
    this.model.destroy();
    this.remove();
  }
});
