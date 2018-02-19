
myApp.controller('profileController', function ($http, GithubAPI){
  console.log('ProfileController up and running!');
  vm = this;
  vm.info =[];

  vm.getInfo = function(){
    GithubAPI.githubProfile().then(function(data){
      vm.info = data;
    });
  };
  vm.getInfo();
});
