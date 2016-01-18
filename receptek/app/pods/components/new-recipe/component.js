import Ember from 'ember';

export default Ember.Component.extend({
    recipes: Ember.Object.create(),
    hasErrors: false,
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                rname: this.$('#rnev').val(),
                preparation: this.$('#elkeszites').val(),
                ingredients: this.$('#hozzavalok').val(),
            });
        }
    },
    
    validate() {
        var rname = this.$('#rnev').val();
        var preparation = this.$('#elkeszites').val();
        var ingredients = this.$('#hozzavalok').val();
        
        this.set('recipes.rname', rname === '' ? 'A recept nevének megadása kötelező!' : '');
        this.set('recipes.preparation', preparation === '' ? 'A recept elkészítésének a leírása kötelező!' : '');
        this.set('recipes.ingredients', ingredients === '' ? 'A hozzávalók megadása kötelező' : '');

        return this.get('recipes.rname') === '' &&
               this.get('recipes.preparation') === '' &&
               this.get('recipes.ingredients') === '';
    }
});
