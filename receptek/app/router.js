import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('registration', {path: '/registration'});
  this.route('recipes', function() {
    this.route('list');
    this.route('new');
    this.route('view', {path:'/:recipe_id'});
    this.route('edit', {path:'/edit/:recipe_id'});
  });
});

export default Router;
