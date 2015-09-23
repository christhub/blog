import Ember from 'ember';

export default Ember.Component.extend({
  // hovering: false,
  // actions: {
  //   something() {
  //     this.set('hovering', true)
  //   }
  // }

  actions: {
    openModal: function(modalName, model) {

        return this.render(modalName, {

            into: 'application',
            outlet: 'modal',
            model: modal
        });
    },

    closeModal: function() {

        return this.disconnectOutlet({

            outlet: 'modal',
            parentView: 'application'
        });
    }
}
});
