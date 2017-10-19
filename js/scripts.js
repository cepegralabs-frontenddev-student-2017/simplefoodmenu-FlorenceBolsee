var meals = [{
  text: "Super cheesy burger",
  description: "Discover our great cheesy burger with mozzarella, gorgonzola and pecorino",
  price: 8.5,
  veggie: true
}, {
  text: "Bad beef burger",
  description: "Full of angry beef, jalapeno peppers, fried onions and our special BBQ sauce",
  price: 12,
  veggie: false
}, {
  text: "Spicy chili burger",
  description: "HOT HOT HOT HOT HOT HOT",
  price: 10,
  veggie: false
}];

var source   = $("#row-template").html();
var template = Handlebars.compile(source);

var price = 0;
var quantityTotal = 0;
var existingTr = $("tr.info");
var thisMeal = template(meals);
var max = 100;

$("table").append(thisMeal, existingTr);

$(document).ready(
  function(){
    $(".overlay").fadeOut("slow");
  }
);


$(".more").click(
  function(){
    if(quantityTotal < max) {
      quantityTotal += 1;
      var quantity = $(this).closest("tr").data("quantity") +1;
      $(this).closest("tr").data("quantity", quantity);
      $(this).parent().prev().text($(this).closest("tr").data("quantity"));
      price += $(this).closest("tr").data("price");
      $(".info .price").text(price + " €");
      $(".info .quantity").text(quantityTotal);
    }
  }
);

$(".less").click(
  function(){
    if($(this).closest("tr").data("quantity") > 0) {
      quantityTotal -= 1;
      var quantity = $(this).closest("tr").data("quantity") -1;
      $(this).closest("tr").data("quantity", quantity);
      $(this).parent().prev().text($(this).closest("tr").data("quantity"));
      price -= $(this).closest("tr").data("price");
      $(".info .price").text(price + " €");
      $(".info .quantity").text(quantityTotal);
    }
  }
);
