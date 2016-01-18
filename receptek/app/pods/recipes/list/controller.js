import Ember from 'ember';

export default Ember.Controller.extend({
        actions: {
        newRecipe(formData) {
            //console.log('QQQ', formData);
            var recipe = this.store.createRecord('recipe', Object.assign({
                //date: Date.now().toString(),
                //location: 'labor',
                //description: 'hiba',
            }, formData));
            recipe.save();
        }
    }
});
