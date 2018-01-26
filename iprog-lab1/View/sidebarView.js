var SidebarView = function (container, model) {
	


	var numberOfGuests = container.find("#numberOfGuests");
	console.log(numberOfGuests);



	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");


	
	var guests = model.getNumberOfGuests();
 

	numberOfGuests.text(guests)

}
 
