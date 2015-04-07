TrelloClone.Views.ListItem = Backbone.CompositeView.extend({
  template: JST["list/listItem"],
  tagName: "li",

  initialize: function() {
    this.listenTo(this.model.cards(), "add", this.addCardSubview.bind(this));
    this.listenTo(this.model, 'sync add', this.render);
    // this.listenTo(this.model.cards(), "remove", this.removeCardSubview.bind(this));
    this.model.cards().each(function(card) {
      this.addCardSubview(card);
    }.bind(this));
  },

  events: {
    "click .delete-list-item": "delete",
    "click .card-submit": "addCard"
  },


  render: function() {
    var renderedContent = this.template({list: this.model});
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  delete: function(event) {
    this.model.destroy();
    this.remove();
  },

  addCardSubview: function(card) {
    var cardItem = new TrelloClone.Views.CardItem({model: card});
    this.addSubview("ul.cards", cardItem);
  },

  addCard: function(event) {
    event.preventDefault();
    var attrs = this.$el.find(".new-card").serializeJSON().card;
    attrs.list_id = this.model.id;
    var newCardItem = new TrelloClone.Models.Card();
    var view = this;
    newCardItem.set(attrs);
    newCardItem.save({}, {
      success: function () {
        view.model.cards().add(newCardItem);
        view.$el.find(".card-title").val("");
      }
    });
  },

  removeListSubview: function(list) {
    var listView = "";
    this.subviews("ul.board-lists").forEach(function(view){
      if (view.model === list) {
        listView = view;
      }
    });
    this.removeSubview("ul.board-lists", listView);
  }
});
