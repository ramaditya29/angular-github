angular.module('githubApp')
	.controller('githubCtrl', function($scope, $http, $window){

		
		$scope.username = "ramaditya29";
			//Retrieving the repositories from github
			$http.get('https://api.github.com/users/' + $scope.username)
				.success(function(data, status){
					
					$http.get(data.repos_url)
						.success(function(repodata, status){
							
							$scope.repodata = repodata;
							console.log($scope.repodata);
					});
			});
		
		
		var github = new Github({
		  token: "064aeee574a3d13987d141f7fd2c9b9b3c606b8b",
		  auth: "oauth"
		});

		//Deleting the Repository
		$scope.deleteRepository = function(repoName){
			var repo = github.getRepo("ramaditya29", repoName);

			repo.deleteRepo(function(err, res) {
				if(err){
					console.log("There is no such repository");
					throw err;
				}
				console.log("Repo successfully deleted");
				alert("Repo Successfully deleted");
				$window.location.reload();
			});

		};		
	})
	.controller('manageCtrl', function($scope){
		//GITHUB Token
		var github = new Github({
		  token: "064aeee574a3d13987d141f7fd2c9b9b3c606b8b",
		  auth: "oauth"
		});

		
		$scope.data = github.getUser();
	


		$scope.createRepository = function(user){
			//console.log({"name": $scope.user.name, "description": $scope.user.description, "homepage": $scope.user.homepage, "private": $scope.user.private});
			$scope.data.createRepo({"name": user.repository, "description": user.description, "homepage": user.homepage}, function(err, res) {
				console.log("repository successfully created");
				alert("Repository was successfully created");
			});
			$scope.user  = "";
		};

	});
	