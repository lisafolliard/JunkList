import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },

  actions: {
    destroyCategory(category) {
      category.destroyRecord();
      this.transitionTo('index');
    }
  }
});
