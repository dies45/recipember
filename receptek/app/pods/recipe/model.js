import DS from 'ember-data';

const ErrorModel = DS.Model.extend({
  rname: DS.attr(),
  preparation: DS.attr(),
  ingredients: DS.attr(),
});

ErrorModel.reopenClass({
    FIXTURES: [
    ] 
});

export default ErrorModel;
