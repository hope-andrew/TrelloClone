TrelloClone.Views.ListItem = Backbone.View.extend({
  template: JST["list/listItem"],
  tagName: "li",

  render: function() {
    var renderedContent = this.template({list: this.model});
    this.$el.html(renderedContent);
    return this;
  }
});
