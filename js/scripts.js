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


var td3 = "<td class=\"quantity\">0</td><td><button class=\"btn btn-primary more\">+</button><button class=\"btn btn-primary less\">-</button></td>";

var price = 0;
var quantityTotal = 0;
var existingTr = $("tr.info");

function genmeal (text, description, price){
  var td1 = "<td><strong>" + text + "</strong><p>" + description + "</p></td>";
  var td2 = "<td><span class=\"price\"><strong>" + price + " €</strong></span></td>";
  return $("<tr>").attr({"data-price": price, "data-quantity": "0"}).append(td1, td2, td3);
}

function genmealVeggie (text, description, price){
  var td1 = "<td><strong>" + text + "</strong>&nbsp;<img src=\"img/vege-icon.png\"><p>" + description + "</p></td>";
  var td2 = "<td><span class=\"price\"><strong>" + price + " €</strong></span></td>";
  return $("<tr>").attr({"data-price": price, "data-quantity": "0"}).append(td1, td2, td3);
}



for (i = 0; i < meals.length; i++){
  if(meals[i].veggie == true){
    var thisMeal = genmealVeggie (meals[i].text, meals[i].description, meals[i].price);
  } else {
    var thisMeal = genmeal (meals[i].text, meals[i].description, meals[i].price);
  }
  $("table").append(thisMeal, existingTr);
}

$(".more").click(
  function(){
    quantityTotal += 1;
    var quantity = $(this).closest("tr").data("quantity") +1;
    $(this).closest("tr").data("quantity", quantity);
    $(this).parent().prev().text($(this).closest("tr").data("quantity"));
    price += $(this).closest("tr").data("price");
    $(".info .price").text(price + " €");
    $(".info .quantity").text(quantityTotal);
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

$(document).ready(
  function(){
    $(".overlay").fadeOut("slow");
  }
);
