app.controller('DisciplinaController', function($scope) {

	//$scope.disciplina = {};
	$scope.listaDisciplinas = [];

	$scope.gravar = function() {
		$scope.listaDisciplinas.push($scope.disciplina);
		$scope.disciplina = {};
	}


});
	