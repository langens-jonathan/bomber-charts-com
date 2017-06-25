import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
	gotoSimpleBarChart() {
	    this.transitionToRoute("/components/simplebarchart");
	}
    }
});
