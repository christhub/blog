import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    openModal: function() {
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
