TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.el;
    this.boards = options.boards;
  },

  routes: {
    "": "boardsIndex",
    "api/boards": "boardsIndex",
    "api/boards/:id": "boardShow"
  },

  boardsIndex: function () {
    this.boards.fetch();
    var boardsIndex = new TrelloClone.Views.BoardsIndex({collection: this.boards});
    this._swapView(boardsIndex);
  },

  boardShow: function(id) {
    var board = this.boards.getOrFetch(id);
    var boardShow = new TrelloClone.Views.BoardShow({ model: board });
    this._swapView(boardShow);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
