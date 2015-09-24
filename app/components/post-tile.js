import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    openModal: function(post) {
      $(".modal-title").text(post.get('headline'));
      $("#modal-image").attr("src", post.get('photo'));
      $("#myModal").modal('show');
    }
  }
  // hovering: false,
  // actions: {
  //   something() {
  //     this.set('hovering', true)
  //   }
  // }
});
