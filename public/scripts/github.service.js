myApp.service('GithubAPI', function($http) {
  //Enter your token and username here:
  var oauthToken = '580a25cb6dc3e93a787bf12abd5eb94c4e2c3c0a';
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

  //Call to Github API to fetch list of user's repos
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
