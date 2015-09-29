import Ember from 'ember';

export default Ember.Route.extend({
  updateCategory: false,
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },

  actions: {
    delete(category) {
      if (confirm('Are you sure you want to delete this category?')) {
        category.get('listings').forEach(function(listing) {
          listing.destroyRecord();
        });
        category.destroyRecord();
        this.transitionTo('index');
      }
    },

    update(category, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          category.set(key,params[key]);
        }
      });
      category.save();
      this.transitionTo('category', params.category.id);
    },

    saveListing(params) {
      var newListing = this.store.createRecord('listing', params);
      var category = params.category;
      category.get('listings').addObject(newListing);
      newListing.save().then(function() {
        return category.save();
      });
      this.transitionTo('category', params.category);
    }
  }
});
