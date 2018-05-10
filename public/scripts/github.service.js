myApp.service('GithubAPI', function($http) {
  //Enter your token and username here:
  var oauthToken = '2b22f2345943c1557207c304d014e4d5a5ef3807';
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
