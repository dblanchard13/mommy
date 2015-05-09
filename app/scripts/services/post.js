'use strict';

app.factory('Post', function($firebaseArray, firebaseURL){
  var ref = new Firebase(firebaseURL);
  var posts = $firebaseArray(ref.child('posts'));

  var Post = {
    all: posts,
    create: function(post){
      return posts.$add(post);
    },
    delete: function(post){
      return posts.$remove(post);
    }
  };

  return Post;
  
});
