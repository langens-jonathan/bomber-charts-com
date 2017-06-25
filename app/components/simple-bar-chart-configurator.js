import Ember from 'ember';

export default Ember.Component.extend({
    
    width: 500,

    height: 500,

    barPadding: 4,

    title: "example chart",

    forceShowLabels: false,

    hideLabels: false,

    showXAxis: true,

    showYAxis: true,

    numberOfEntries: 16,

    dataArray: [],

    newData: "",

    code: Ember.computed('width', 'height', 'barPadding',
			 'title', 'forceShowLabel', 'showXAxis',
			 'showYAxis', function() {
			     var width = this.get('width');
			     var height = this.get('height');
			     var barPadding = this.get('barPadding');
			     var title = this.get('title');
			     var forceShowLabels = this.get('forceShowLabels');
			     var showXAxis = this.get('showXAxis');
			     var showYAxis = this.get('showYAxis');
			     var animate = this.get('animate');
			     var hideLabels = this.get('hideLabels');

			     var code = "{{simple-bar-chart dataArray=dataArray ";
			     if(width !== 500) {
				 code += " width=" + width + " ";
			     }

			     if(height !== 500) {
				 code += " height=" + height + " ";
			     }

			     if(barPadding !== 4) {
				 code += " barPadding=" + barPadding + " ";
			     }
			     
			     if(title.length > 0) {
				 code += " title=\"" + title + "\" ";
			     }

			     if(forceShowLabels === true) {
				 code += " forceShowLabels=true ";
			     }

			     if(showXAxis === false) {
				 code += " showXAxis=false ";
			     }

			     if(showYAxis === false) {
				 code += " showYAxis=false ";
			     }

			     if(animate === true) {
				 code += " animate=true ";
			     }

			     if(hideLabels === true) {
				 code += " hideLabels=true ";
			     }

			     code += "}}";

			     Ember.Logger.log(code);
			     return code;
			 }),

    codeWithData: Ember.computed('code', 'dataArray', function() {
	return this.get('code').slice(0, -2) + " dataArray=\"" + JSON.stringify(this.dataArray).split("\"").join("\\\"") + "\" }}";
    }),

    data: Ember.computed.oneWay('dataArray', function() {
	return "\"" + JSON.stringify(this.get('dataArray')).split("\"").join("\"") + "\\\"";
    }),
    
    init: function() {
	this._super(...arguments);
	this.get('generateData')(this);
	this.get('code');
    },

    generateData: function(comp) {
	var dataset = [];
	var names = ["Olin", "Trudi", "Desirae", "Clorinda", "Bryan", "Celesta", "Eleanore", "Javier", "Autumn", "Lana", "Tasha", "Karlyn", "Shawnna", "Rory", "Enrique", "Lorrie", "Tammy", "Verlie", "Carmina", "Raeann", "Rich", "Donita", "Rufus", "Migdalia", "Thresa", "Alethea", "Nubia", "Suzi", "Celina", "Irwin", "Dorthea", "Ivory", "Ashley", "Amie", "Kathaleen", "Ethan", "Teresa", "Marline", "Christal", "Hallie", "Callie", "Myrtis", "Nicola", "Marco", "Filiberto", "Titus", "Jasper", "Alpha", "Trish", "Tori", "Trula", "Nicol", "Minh", "Elyse", "Chad", "Pamula", "Savanna", "Marcelina", "Argelia", "Rubin", "Leonarda", "Nina", "Theo", "Sharyn", "Hazel"];
	for (var i = 0; i < comp.get("numberOfEntries") ; i++) {
	    var newNumber = (Math.random() * 30) + 1;
	    if(newNumber > 25)
	    {
		dataset.push({"data": Math.floor(newNumber),
			      "label": names[i],
			      "fill": "#850000",
			      "stroke": "#757475",
			      "hover": "#fff8ee",
			      "stroke-width": 3
			     });
	    } else if (newNumber > 20)
	    {
		dataset.push({"data": Math.floor(newNumber),
			      "label": names[i],
			      "fill": "#850085",
			      "stroke": "orange",
			      "hover": "green",
			      "stroke-width": 3
			     });
	    } else {
		dataset.push({"data": Math.floor(newNumber),
			      "label": names[i],
			     });
	    }
	}
	comp.set("dataArray", dataset);
	comp.set("newData", JSON.stringify(dataset));
    },

    actions: {
	updateNumberOfEntries(noe) {
	    this.set("numberOfEntries", noe);
	    this.get("generateData")(this);
	},
	showConfiguration() {
	    this.set("showConfiguration", true);
	    this.set("showStyling", false);
	    this.set("showCode", false);
	    this.set("showData", false);
	},
	showCode() {
	    this.set("showConfiguration", false);
	    this.set("showStyling", false);
	    this.set("showCode", true);
	    this.set("showData", false);
	},
	
	showStyling() {
	    this.set("showConfiguration", false);
	    this.set("showStyling", true);
	    this.set("showCode", false);
	    this.set("showData", false);
	},
	
	showData() {
	    this.set("showConfiguration", false);
	    this.set("showStyling", false);
	    this.set("showCode", false);
	    this.set("showData", true);
	},

	loadData() {
	    this.set("dataArray", JSON.parse(this.get("newData")));
	},

	showDataModification () {
	    var dm = this.get("showDataModification");
	    if(dm === true) {
		this.set("showDataModification", false);
	    } else {
		this.set("showDataModification", true);
	    }
	},

	showCodeWithData () {
	    var cwd = this.get("copyTemplateWithData");
	    if(cwd === true) {
		this.set("copyTemplateWithData", false);
	    } else {
		this.set("copyTemplateWithData", true);
	    }
	}
    }
});
