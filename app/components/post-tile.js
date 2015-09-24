import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    openModal: function(post) {
      $(".modal-title").text(post.get('headline'));
      $("#modal-image").attr("src", post.get('photo'));
      $("#myModal").modal('show');

      var article = post.get('article');
      var shortArticle = article.substring(0,500);

      $("#modal-article").text(shortArticle);

      var postID = post.get('id');
      var postURL = "/post/" + postID;

      $("a").attr("href", postURL);

    }
  }
  // hovering: false,
  // actions: {
  //   something() {
  //     this.set('hovering', true)
  //   }
  // }
});
