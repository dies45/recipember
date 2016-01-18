import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyRecipe(formData) {
            console.log(formData);
            var recipe = this.get('model');
            // error.set('location', formData.location);
            // error.set('description', formData.description);
            recipe.setProperties(formData);
            return recipe.save().then(() => {
                this.transitionToRoute('recipes.list');
            });
        }
    }
});
