import Ember from 'ember';

export function currentDate() {
  return moment().format('LL');
}

export default Ember.Helper.helper(currentDate);
