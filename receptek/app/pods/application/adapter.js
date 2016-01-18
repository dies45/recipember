import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://recipeapi-dies45.c9users.io',
    namespace: ''
});