
myApp.controller('repoController', function (GithubAPI){
  console.log('RepoController up and running!');
  vm = this;
  vm.githubRepo = [];

  vm.getRepo = function (){
    GithubAPI.githubRepos().then(function(data){
      vm.githubRepos=data;
    });
  };
  vm.getRepo();

});
