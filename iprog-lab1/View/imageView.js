var ImageView = function(container, model){
	//var searchresults = container.find("#searchresults");
	//searchresults.html(""); // clear the hard coded stuff

	var dishes = model.getAllDishes("starter");
	console.log(dishes);
	var htmlString = "";


	htmlString += "<div class='row' id='searchresults'>";
	for(var i=0; i<dishes.length; i++) {
		htmlString += '<div class="col-md-2">';
		htmlString += '<div class="thumbnail">';
		htmlString += "<img src='images/" + dishes[i].image +"' class='img-responsive' alt='Responsive image'>";
		htmlString += "<p><a class='btn btn-default btn-lg btn-block'  role='button' style='align-center'>" + dishes[i].name + "</a> </p>";
		htmlString += "</div>";
		htmlString += "</div>";

	}
		htmlString += "</div>";
	console.log(htmlString);

	container.html(htmlString);
}