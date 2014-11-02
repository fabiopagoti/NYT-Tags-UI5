var NYT = { };

NYT.tags = {};

NYT.tags.base_url = "http://api.nytimes.com/svc/suggest/v1/timestags?";

NYT.tags.api_key = "365a84ffef66520fd6d3150fac834a1a:1:68901588";

NYT.tags.createQueryParam = function(property, param){
		if (property != "" && property !== undefined) {
			return "&" + param + "=" + property;
		} else {
			return "";
		}
	};
	
NYT.tags.createQueryURL = function(query, filter, max){

	var url = NYT.tags.base_url + 
		NYT.tags.createQueryParam(query, "query") + 
		NYT.tags.createQueryParam(filter, "filter") + 
		NYT.tags.createQueryParam(max, "max") +
		NYT.tags.createQueryParam(NYT.tags.api_key, "api-key");

	return url;

};

