var source   = $("#row-template").html();
var template = Handlebars.compile(source);

var $loader = $(".loader");
var $total = $("tr.info");

$.getJSON("https://wt-902485dbb4fca4fccee3a0efcde5b34c-0.run.webtask.io/foodmenu")
.done(function(meals){
	$loader.hide();
	var html = template(meals);
	$total.before(html);
})
.fail(function(){
	alert("Une erreur serveur est survenue");
});

$("#meals").on("click", "button", function(){
	var $button = $(this);
	var $row = $button.closest("tr");
	var price = $row.data("price");
	var qty = $row.data("quantity");
	if($button.hasClass("more")){
		qty++;
		refreshTotal(price, true);
	}
	else if($button.hasClass("less")){
		if(qty >=1){
			qty--;
			refreshTotal(price, false);
		}
	}
	$row.data("quantity", qty);
	$row.find(".quantity").text(qty);
});

function refreshTotal(price, increment){
	var totalPrice = $total.data("price");
	var totalQty = $total.data("quantity");
	if(increment){
		totalQty += 1;
		totalPrice += price;
	}
	else{
		totalQty -= 1;
		totalPrice -= price;
	}
	$total.data("price", totalPrice);
	$total.data("quantity", totalQty);
	$total.find(".price").text(totalPrice + " €");
	$total.find(".quantity").text(totalQty);
}