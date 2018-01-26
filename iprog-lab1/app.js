$(function() {

	var model = new DinnerModel();
	

	var sidebarView = new SidebarView($("#leftPanel"), model);
	var imageView = new ImageView($("#searchresults"), model);
	var ingredientsView = new IngredientsView($("#headpic"), model);
	var buttonsidebarView = new ButtonSidebarView($("#priceDivider"), model);
	var overView = new OverView($("#middlecolumn"), model);
	var printoutview = new PrintOutView($("#imagecolumn"), model);



});