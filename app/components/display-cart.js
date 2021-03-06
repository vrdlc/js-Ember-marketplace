import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  inCart: Ember.inject.service(),

  cartTotal: Ember.computed('shoppingCart.items.[]', function() {
    var total = 0;
    for (var i = 0; i < this.get('shoppingCart.items.length'); i++) {
      total += this.get('shoppingCart.items')[i].get('cost');
    }
    return total;
  }),
  actions: {
    emptyCart() {
      this.get('shoppingCart').empty([]);
    },
  }
});
