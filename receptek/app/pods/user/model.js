import DS from 'ember-data';

var UserModel = DS.Model.extend({
  surname: DS.attr(),
  forename: DS.attr(),
  username: DS.attr(),
  password: DS.attr(),
  email: DS.attr(),
});

UserModel.reopenClass({
    FIXTURES: [
    ]
});

export default UserModel;