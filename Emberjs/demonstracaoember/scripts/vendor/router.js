App.Router.map(function(){
	this.route('teste')
	this.route('user', {path:'/usuarios'}) //trocar o nome que se chama na url de user para usuarios.
	this.route('beer')
	//dá para Chamar uma rota dentro da outra ou seja chamar uma view, depois fazer
});

App.UserRoute = Ember.Route.extend({
	model: function(){
		return[{name: 'rubens', technology:'javascript', framework:'Ember js'},
		{name: 'rubens', technology:'javascript', framework:'Ember js'},
		{name: 'rubens', technology:'javascript', framework:'Ember js'}, 
		{name: 'rubens', technology:'javascript', framework:'Ember js'}];
	}
})

App.BeerRoute = Ember.Route.extend({
	model: function(){
		return	Ember.$.getJSON('http://localhost/EmberJs/resources/beers.json');
	}
})
//Simular chamar de uma api
