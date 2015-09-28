import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.belongsTo('category', { async: true }),
  title: DS.attr(),
  description: DS.attr(),
  date_added: DS.attr(),
  price: DS.attr(),
  location: DS.attr(),
  image: DS.attr(),
  contact_info: DS.attr()
});
