import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('organization')
  this.route('activities', function() {
    this.route('activity');
  });
});

export default Router;
