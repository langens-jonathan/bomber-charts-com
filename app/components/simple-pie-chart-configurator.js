import Ember from 'ember';

export default Ember.Component.extend({
    
    width: 500,

    height: 500,

    title: "example chart",

    hideLabels: false,

    innerRadius: 0,

    outerRadius: 200,

    colorScheme: ["#f4e04d", "#cee397", "#8db1ab", "#587792","#f2ed6f", "#7d7e75", "#8d86c9", "#73a6ad", "#9b97b2", "#f4a261", "#2a9d8f", "#86cb92", "#71b48d", "#404e7c", "#9be564", "#d19c1d", "#7d451b"],

    numberOfEntries: 6,

    dataArray: [],

    newData: "",

    code: Ember.computed('width', 'height',
			 'title', function() {
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
		dataset.push({"data": Math.floor(newNumber),
			      "label": names[i],
			     });
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
