import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newRecipe(formData) {
            console.log(formData);
            var recipe = this.store.createRecord('recipe', Object.assign({
                //date: Date.now().toString(),
                //location: 'labor',
                //description: 'hiba',
            }, formData));
            return recipe.save().then(() => {
                this.transitionToRoute('recipes.list');
            });
        }
    }
});
