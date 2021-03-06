sap.ui.controller("nyt-tags.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf nyt-launchpad-m.main
*/
	onInit: function() {
		sap.ui.getCore().byId("table_tags").setModel(this.getSearchResult());
		sap.ui.getCore().byId("table_tags").bindRows("/1");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf nyt-launchpad-m.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf nyt-launchpad-m.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf nyt-launchpad-m.main
*/
//	onExit: function() {
//
//	}
	

	getSearchResult: function(search_term){
		if (search_term != null) {
			return sap.ui.getCore().getModel().loadData(NYT.tags.createQueryURL(search_term));	
		};
		
	},
	
	handleSearch: function(search_object){
		jQuery.sap.log.info("Searching " + search_object.getParameters().query);
		this.getSearchResult(search_object.getParameters().query);
	},

	extractTagFromResultString: function(result_string){
		if (result_string !== null) {
			return result_string.substring(0, result_string.indexOf(" ("));
		};
		
	},

	extractCategoryFromResultString: function(result_string){
		if (result_string !== null) {
			return result_string.substring(result_string.indexOf("("));	
		};
		
	},




});