var OverView = function(container, model){
	//var searchresults = container.find("#searchresults");
	//searchresults.html(""); // clear the hard coded stuff

	var dishes = model.getAllDishes("starter");
	console.log(dishes);
	var htmlString = "";


	htmlString += "<div class='row col-md-6' id='middlecolumn'>";
	for(var i=0; i<=2; i++) {
		htmlString += "<div class='col-md-6'>";
		htmlString += "<div class='thumbnail'>";
		htmlString += "<img src='images/" + dishes[i].image +"' class='img-responsive' alt='Responsive image'>";
		htmlString += "<p><a class='btn btn-default btn-lg btn-block' role='button' style='align-center'>" + dishes[i].name + "</a></p>";
		htmlString += "<h5 class='totalCost' style='color:#990000; align-right'>SEK <span id='totalCost'></span></h5>";
		htmlString += "</div>";
		htmlString += "</div";

	}
		htmlString += "</div>";
	console.log(htmlString);

	container.html(htmlString);
}