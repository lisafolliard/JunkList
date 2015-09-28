import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "span",
  updateCategoryForm: false,
  actions: {
    updateCategoryForm() {
      this.set('updateCategoryForm', true);
    },
    update(category) {
      var params = {
        name: this.get('name'),
      };
      this.set('updateCategoryForm', false);
      this.sendAction('update', category, params);
    }
  }
});
