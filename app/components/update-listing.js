import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "span",
  updateListingForm: false,
  actions: {
    updateListingForm() {
      this.set('updateListingForm', true);
    },
    update(listing) {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        price: this.get('price'),
        location: this.get('location'),
        image: this.get('image'),
        contact_info: this.get('contact_info')
      };
      this.set('updateListingForm', false);
      this.sendAction('update', listing, params);
    }
  }
});
