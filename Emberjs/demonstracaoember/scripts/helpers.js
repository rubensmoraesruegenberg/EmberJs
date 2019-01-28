Ember.Handlebars.helper('format-date', function(value){
	return moment(value).fromNow();
})