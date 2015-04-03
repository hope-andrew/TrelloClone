window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    $rootEl = $("div#main");
    var boards = new TrelloClone.Collections.Boards();
    boards.fetch();

    new TrelloClone.Routers.Router({el: $rootEl, boards: boards});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
