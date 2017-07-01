import Ember from 'ember';

export default Ember.Controller.extend({

    notChosenYet: true,
    
    actions: {
	gotoSimpleBarChart() {
	    this.set("notChosenYet", false);
	    this.transitionToRoute("/comps/sbc");
	},

	gotoSimplePieChart() {
	    this.set("notChosenYet", false);
	    this.transitionToRoute("/comps/spc");
	}
    }
});
