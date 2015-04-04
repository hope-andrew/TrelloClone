TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST["board/show"],

  initialize: function() {
    this.listenTo(this.model.lists(), "add", this.addListSubview);
    this.listenTo(this.model, 'sync add', this.render);
    this.model.lists().each(function(list) {
      this.addListSubview(list);
    }.bind(this));
    var newListSubview = new TrelloClone.Views.NewList();
    this.addSubview("form.new-list", newListSubview);
  },

  events: {
    "click button.new-list": "addList"
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

  addList: function(event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    // Set up serialize JSON (require in application.js) and set params for new list items
    debugger;
    var newListItem = new TrelloClone.Models.List({title: params["title"]});

    newListItem.save({}, {
      success: function () {
        this.collection.add(newListItem);
      }.bind(this)
    });
  }
});
