var ButtonSidebarView = function (container, model) {
	
	var dishes = model.getAllDishes("starter");
	console.log(dishes);
	var htmlString = "";

		htmlString += "<hr id='priceDivider'>";
		//for(var i=0; i<dishes.length; i++) {
		htmlString += "<button id='dish' class='btn btn-default btn-md btn-block' type='button'>";
		htmlString += "<div class='col-md-6 text-left'>" + dishes[0].name + "</div>";
		//htmlString += "<div class='col-md-6 text-right'>" + dishes[0].price + "</div>";
		htmlString += "</button>";

	
	console.log(htmlString);
	container.html(htmlString);

}