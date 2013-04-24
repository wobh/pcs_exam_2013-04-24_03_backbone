
var Jungle = $(function(){
    var Beast = Backbone.Model.extend({
	urlRoot: '/beast'
    });

    var Beasts = Backbone.Collection.extend({
	url: '/beasts',
	model: Beast
    });
				       
    var BeastsView = Backbone.View.extend({
	el: '#beasts',

	initialize: function () {
	    this.collection.fetch({reset: true});
	},

	render: function () {
	    this.collection.each( function(beast) {
		this.$el.append (beast);
		}, this);
	    return this;
	},

	addOne: function (beast) { 
	},

	addAll: function (beasts) {
	}
    });


    return new BeastsView();
})();
