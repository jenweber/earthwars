import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('organization');
  this.route('activities', function() {
    this.route('activity');
  });
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('admin-dashboard');
  this.route('home');
});

export default Router;
