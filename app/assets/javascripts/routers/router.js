TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.el;
    this.boards = options.boards;
  },

  routes: {
    "": "boardsIndex",
    "boards/:id": "boardsShow"
  },

  boardsIndex: function () {
    this.boards.fetch();
    var boardsIndex = new TrelloClone.Views.BoardsIndex({collection: this.boards});
    this._swapView(boardsIndex);
  },

  boardsShow: function() {

  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
