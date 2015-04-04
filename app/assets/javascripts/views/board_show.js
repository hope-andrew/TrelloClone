TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST["board/show"],

  initialize: function() {
    this.listenTo(this.model.lists(), "add", this.addListSubview);
    this.listenTo(this.model, 'sync', this.render);
    this.model.lists().each(function(list) {
      this.addListSubview(list);
    }.bind(this));
  },

  render: function() {
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addListSubview: function(list) {
    var newListView = new TrelloClone.Views.ListItem({model: list});
    this.addSubview("ul.board-lists", newListView);
  },


});
