TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST["boards/index"],

  initialize: function() {
    this.listenTo(this.collection, "sync add", this.render);
    this.listenTo(this.collection, "add", this.addBoardSubview);

    this.collection.each(function(board) {
      this.addBoardSubview(board);
    }.bind(this));
  },

  events: {
    "click .add-button": "addBoard"
  },

  render: function() {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },

  addBoardSubview: function(board) {
    var boardItem = new TrelloClone.Views.BoardItem({ model: board });
    this.addSubview("ul.boards-index", boardItem);
  },

  addBoard: function(event) {
    event.preventDefault();
    var attrs = this.$el.find(".new-title").serializeJSON();
    var newBoard = new TrelloClone.Models.Board();
    var that = this;
    newBoard.set(attrs);
    newBoard.save({}, {
      success: function() {
        that.collection.add(newBoard);
      }
    });
  }
});
