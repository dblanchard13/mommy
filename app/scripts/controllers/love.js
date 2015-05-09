'use strict';

app.controller('LoveCtrl', function($scope, Post){
  $scope.posts = [];
  $scope.posts = Post.all;

  $scope.addPost = function(text, author){
    var post = {text: text, author: author};
    Post.create(post);
    $scope.text = '';
  };

});
