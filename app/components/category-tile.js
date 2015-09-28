import Ember from 'ember';

export default Ember.Component.extend({
  updateCategory: false,
  actions: {
    delete(category) {
      if (confirm('Are you sure you want to delete this category?')) {
        this.sendAction('destroyCategory', category);
      }
    },
    update(category,params) {
      this.sendAction('update', category, params);
    }
  }
});
