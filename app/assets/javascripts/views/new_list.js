TrelloClone.Views.NewList = Backbone.View.extend({
  template: JST["list/new"],

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});
