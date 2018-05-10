myApp.service('GithubAPI', function($http) {
  //Enter your token and username here:
  var oauthToken = '0c856e166caddbb61cbad184651508594b51dec3';
  var username = 'chargar';
  

  //Call to Github API to fetch user's profile info
  this.githubProfile = function(){

    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username,
      headers: {
        'Authorization': 'token '+ oauthToken}
      }
    ).then(function(response) {
      console.log(response.data);
      return response.data;
    });
  };

  //Call to Github API to fetch list of my repos
  this.githubRepos = function(){

    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username + '/repos',
      headers: {
        'Authorization': 'token ' + oauthToken}
      }
    ).then(function(response) {
      console.log(response.data);
      return response.data;
    });
  };
});
