window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.$rootEl = $("div#main");
    var boards = new TrelloClone.Collections.Boards();
    boards.fetch();

    new TrelloClone.Routers.Router(this.$rootEl, boards);
    Backbone.History.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
