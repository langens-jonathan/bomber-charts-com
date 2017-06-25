import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('components', function() {
    this.route('simpleBarChart');
  });
  this.route('home');
  this.route('docs');
  this.route('sbc');
  this.route('gettingstarted');
  this.route('SBC');
});

export default Router;
