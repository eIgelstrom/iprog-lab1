var ExampleView = function (container, model) {
	


	this.numberOfGuests = container.find("#numberOfGuests");
	console.log(this.numberOfGuests);



	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");


	console.log("Hej")
	var guests = model.getNumberOfGuests();
 

	var searchresults = $("#searchresults");
	searchresults.html(""); // clear the hard coded stuff

 	var dishDiv = $('<div class="col-md-2">');
 	var dishThumbDiv = $('<div class="thumbnail">');
 	var dishImg = $('<img src="images/"' + 'you will get the name from model' +' class="img-responsive" alt="Responsive image">')

 	dishThumbDiv.append(dishImg);
 	dishDiv.append(dishThumbDiv);

 	searchresults.append(dishDiv);



	console.log(container)
	this.numberOfGuests.text(guests)

}
 
