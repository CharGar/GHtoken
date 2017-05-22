
myApp.controller('repoController', function (GithubAPI){
  console.log('RepoController up and running!');
  vm = this;
  vm.githubRepo = [];

  vm.getRepo = function (){
    GithubAPI.githubRepo().then(function(data){
      vm.githubRepo=data;
    });
  };
  vm.getRepo();

});
