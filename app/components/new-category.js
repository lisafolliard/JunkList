import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategory: false,
  actions: {
    categoryFormShow() {
      this.set('addNewCategory', true);
    },

    save1() {
      var params = {
        name: this.get('name')
      };
      this.set('addNewCategory', false),
      this.sendAction('save2', params);
    }
  }
});
