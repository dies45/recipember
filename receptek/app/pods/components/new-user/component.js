import Ember from 'ember';

export default Ember.Component.extend({
    users: Ember.Object.create(),
    hasErrors: false,
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                surname: this.$('#vnev').val(),
                forename: this.$('#knev').val(),
                username: this.$('#fnev').val(),
                password: this.$('#jelszo').val(),
                email: this.$('#emailcim').val(),
            });
        }
    },
    
    validate() {
        var surname = this.$('#vnev').val();
        var forename = this.$('#knev').val();
        var username = this.$('#fnev').val();
        var password = this.$('#jelszo').val();
        var email = this.$('#emailcim').val();
        
        
        this.set('users.surname', surname === '' ? 'A vezetéknév megadása kötelező!' : '');
        this.set('users.forename', forename === '' ? 'A keresztnév megadása kötelező!' : '');
        this.set('users.username', username === '' ? 'A felhasználónév megadása kötelező!' : '');
        this.set('users.password', password === '' ? 'A jelszó megadása kötelező!' : '');
        this.set('users.email', email === '' ? 'Az e-mail cím megadása kötelező!' : '');

        return this.get('users.surname') === '' &&
               this.get('users.forename') === '' &&
               this.get('users.username') === '' &&
               this.get('users.password') === '' &&
               this.get('users.email') === '';
    }
});