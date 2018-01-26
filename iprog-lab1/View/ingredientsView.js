var IngredientsView = function(container, model){
	//var searchresults = container.find("#searchresults");
	//searchresults.html(""); // clear the hard coded stuff

	var dishes = model.getAllDishes("starter");
	console.log(dishes);
	var numberOfGuests = container.find("#numberOfGuests");
	console.log(numberOfGuests);

	var guests = model.getNumberOfGuests();
 

	numberOfGuests.text(guests)

	var htmlString = "";
	var totprice = 0;
	var chosenDish = model.getDish(id);
	var id = 1;

		htmlString += "<div class='col-xs-6' id='headpic'>";
	
		htmlString += "<h3>" + dishes[0].name + "</h3>";
		htmlString += "<img src='images/" + dishes[0].image +"' class='img-responsive' alt='Responsive image'>";
		htmlString += "<p>" + dishes[0].description + "</p><button type='button' class='btn btn-warning btn-arrow-left'>back to search</button>";
		htmlString += "</div>";
		

		htmlString += "<div class='col-xs-6' style='background-color:#ffdd99'>";
		htmlString += "<h4>INGREDIENTS FOR" + "<span id='numberOfGuests'></span>" + "PEOPLE</h4>";
		htmlString += "<br>";
		htmlString += "<table style='width:100%;' class='table table-condensed'>";

		
		for(var i in dishes.ingredients){
			htmlString += "<tr>";
			htmlString += "<td>" + chosenDish.ingredients[ingredient].quantity*guests + " " + chosenDish.ingredients[ingredient].unit + "</td>";
			htmlString += "<td>" + chosenDish.ingredients[ingredient].name + "</td>";
			htmlString += "<td>SEK </td>";
			htmlString += "<td>" + chosenDish.ingredients[ingredient].price*guests + "</td>";
			htmlString += "</tr>"; 
			totprice += chosenDish.ingredients[ingredient].price*guests; 
			
			htmlString += "<tr>";
			htmlString += "<hr><p class='pull-right' style='padding-right:28px'>SEK" + totprice + "</p>";
			htmlString += "<p>";
			htmlString += "<a href='index_p4.html'><button type='button' class='btn btn-warning'>Add to menu</button></a><br>";
			htmlString += "</p>";
			htmlString += "</div>";
			htmlString += "<script src='sidebarView.js'></script>";

			}

	console.log(htmlString);

	container.html(htmlString);

}