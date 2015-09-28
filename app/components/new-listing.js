import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },

    saveListing() {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        price: this.get('price'),
        location: this.get('location'),
        image: this.get('image'),
        contact_info: this.get('contact_info'),
        category: this.get('category'),
        date_added: moment().format('LL')
      };
      this.set('addNewListing', false),
      this.sendAction('saveListing', params);
    }
  }
});
