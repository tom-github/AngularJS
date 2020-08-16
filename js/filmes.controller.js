angular.module("Filmes").controller("FilmesController", function($scope){
	$scope.titulo = "Filmes que já assisti";

	$scope.filmes = [
		{
			id: "123123123",
			titulo: "Deadpool",
			ano: 2016,
			produtora: "Fox",
			sinopse: "Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson. Depois de ser submetido a um desonesto experimento que o deixa com poderes de cura acelerada, Wade adota o alter ego de Deadpool. Armado com suas novas habilidades e um senso de humor negro e distorcido, Deadpool persegue o homem que quase destruiu sua vida.",
			cartaz: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
		},
		{
			id: "321321321",
			titulo: "X-MEN: APOCALYPSE",
			ano: 2016,
			produtora: "Fox",
			sinopse: "O ancestral dos mutantes, En Sabah Nur, retorna com planos de mergulhar o mundo em um apocalipse para garatir a supremacia. Sequência de \"X-Men: Dias de um Futuro Esquecido\".",
			cartaz: "https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_SY1000_CR0,0,676,1000_AL_.jpg"
		}
	];

	$scope.novoFilme = {};

	$scope.removerFilme = function(id) {
		angular.forEach($scope.filmes, function(filme, i){
			if(filme.id == id){
				$scope.filmes.splice(i, 1);
			}
		});
	}

	$scope.adicionarFilme = function(){
		var filme = angular.copy($scope.novoFilme);
		filme.id = Date.now();
		$scope.filmes.push(filme);

		$scope.novoFilme = {};
	}
});