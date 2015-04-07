TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST["board/show"],

  initialize: function() {
    this.listenTo(this.model.lists(), "add", this.addListSubview.bind(this));
    this.listenTo(this.model.lists(), "remove", this.removeListSubview.bind(this));
    this.listenTo(this.model, 'sync add', this.render);
    this.model.lists().each(function(list) {
      this.addListSubview(list);
    }.bind(this));
    var newListSubview = new TrelloClone.Views.NewList();
    this.addSubview("form.new-list", newListSubview);
  },

  events: {
    "click button.new-list": "addList",
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

  removeListSubview: function(list) {
    var listView = "";
    this.subviews("ul.board-lists").forEach(function(view){
      if (view.model === list) {
        listView = view;
      }
    });
    this.removeSubview("ul.board-lists", listView);
  },

  addList: function(event) {
    event.preventDefault();
    var attrs = this.$el.find(".new-list-title").serializeJSON().list;
    attrs.board_id = this.model.id;
    var newListItem = new TrelloClone.Models.List();
    var view = this;
    newListItem.set(attrs);
    newListItem.save({}, {
      success: function () {
        view.model.lists().add(newListItem);
        view.$el.find(".new-list-title").val("");
      }
    });
  },

});
