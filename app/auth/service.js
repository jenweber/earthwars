import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  credentials: storageFor('auth'),
  isAuthenticated: Ember.computed.bool('credentials.token'),

  signUp (credentials) {
    console.log(credentials.id);
    return this.get('ajax').post('/sign-up', {
      data: {
        credentials: {
          email: credentials.email,
          name: credentials.name,
          password: credentials.password,
          password_confirmation: credentials.passwordConfirmation,
          organization_id: credentials.organization_id
        }
      },
    });
  },

  signIn (credentials) {
    return this.get('ajax').post('/sign-in', {
      data: {
        credentials: {
          email: credentials.email,
          password: credentials.password,
        }
      },
    })
    .then((result) => {
      console.log(result);
      this.get('credentials').set('id', result.user.id);
      this.get('credentials').set('email', result.user.email);
      this.get('credentials').set('token', result.user.token);
      this.get('credentials').set('admin', result.user.admin);
      this.get('credentials').set('organization_id', result.user.organization_id);
    });
  },

  changePassword (passwords) {
    return this.get('ajax').patch(`/change-password/${this.get('credentials.id')}`, {
      data: {
        passwords: {
          old: passwords.previous,
          new: passwords.next,
        }
      },
    });
  },

  signOut () {
    return this.get('ajax').del(`/sign-out/${this.get('credentials.id')}`)
    .finally(() => this.get('credentials').reset());
  },
});
