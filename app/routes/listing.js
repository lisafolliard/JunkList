import Ember from 'ember';

export default Ember.Route.extend({
  updateListing: false,
  model(params) {
    return this.store.findRecord('listing', params.listing_id);
  },

  actions: {
    delete(listing) {
      if (confirm('Are you sure you want to delete this listing?')) {
        var category = listing.category;
        listing.destroyRecord();
        this.transitionTo('category', category.category_id);
      }
    },

    update(listing, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          listing.set(key,params[key]);
        }
      });
      listing.save();
      this.transitionTo('listing', params.listing.id);
    }
  }
});
