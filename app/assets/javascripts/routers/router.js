TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function(rootEl, boards) {
    this.$rootEl = rootEl;
    this.boards = boards;
  },

  routes: {
    "" : "boardsIndex",
    "boards/:id": "boardsShow"
  },

  boardsIndex: function () {
    var boardsIndex = new TrelloClone.Views.BoardIndex(boards); 
    this.$rootEl.html(boardsIndex.render().$el);


  },

  boardsShow: function() {

  }
})
