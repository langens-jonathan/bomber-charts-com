import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
	gotoComponents () {
	    this.transitionToRoute("components");
	},
	gotoSBC () {
	    this.transitionToRoute("SBC");
	},
	gotoHome () {
	    this.transitionToRoute("home");
	},
	gotoGettingStarted () {
	    this.transitionToRoute("gettingstarted");
	},
	gotoDocs () {
	    this.transitionToRoute("docs");
	},
    }
});
