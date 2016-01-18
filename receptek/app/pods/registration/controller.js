import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newUser(formData) {
            console.log(formData);
            var user = this.store.createRecord('user', Object.assign({
                //date: Date.now().toString(),
                //location: 'labor',
                //description: 'hiba',
            }, formData));
            return user.save().then(() => {
                this.transitionToRoute('recipes.list');
            });
        }
    }
});