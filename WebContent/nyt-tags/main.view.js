sap.ui.jsview("nyt-tags.main", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf nyt-tags.main
	 */
	getControllerName : function() {
		return "nyt-tags.main";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf nyt-tags.main
	 */
	createContent : function(oController) {

		var lay_vertical = new sap.ui.commons.layout.VerticalLayout({
			
			width: "100%",
			content: [

				// Search Field
				new sap.ui.commons.SearchField({
				    search: jQuery.proxy(oController.handleSearch,oController),
				}),

				// new sap.ui.commons.TextArea({
				// 	cols: 100,
				// 	rows: 20,
				// }),

				// Result Table
				new sap.ui.table.Table("table_tags",{
					title: "Related Tags",
					footer: "www.hanabrasil.com.br",
					
					columns: [

						new sap.ui.table.Column({
							name: "Tag",
							label: new sap.ui.commons.TextView({
								text: "Tag",
							}),
							template: new sap.ui.commons.TextView().bindProperty("text",{
								path: "",
								formatter: function(raw_text){
									return oController.extractTagFromResultString(raw_text);
								},

							}),
						}),

						new sap.ui.table.Column({
							name: "Category",
							label: new sap.ui.commons.TextView({
								text: "Category",
							}),
							template: new sap.ui.commons.TextView().bindProperty("text", {
								path: "",
								formatter: function(raw_text){
									return oController.extractCategoryFromResultString(raw_text);
								},
							}),

						}),

					],
				})

			]

		});
		
		return lay_vertical;

	}

});
