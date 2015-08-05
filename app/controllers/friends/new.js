import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      console.log('+- save action in friends new controller');

      // false will make it stop bubbling up to parent
      return false;
    },
    cancel() {
      console.log('+- cancel action in friends new controller');

      return false;
    }
  }
});
