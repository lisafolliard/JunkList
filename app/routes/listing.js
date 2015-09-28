import Ember from 'ember';

export default Ember.Route.extend({
  updateListing: false,
  model(params) {
    return this.store.findRecord('listing', params.listing_id);
  },

  actions: {
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
