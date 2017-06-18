var foodMenu = angular.module("FoodMenu", []);

foodMenu.controller("MenuController", function($http){
    var menuController = this;
    menuController.meals = [];
    menuController.loaded = false;
    menuController.totalQuantity = 0;
    menuController.totalPrice = 0;
    
    $http.get("https://wt-902485dbb4fca4fccee3a0efcde5b34c-0.run.webtask.io/orderfoodmenu")
    .then(function(response){
        menuController.meals = response.data;
        console.log(menuController.meals);
        menuController.loaded = true;
    });
    
    menuController.increment = function(meal){
        meal.quantity++;
        menuController.totalQuantity ++;
        menuController.totalPrice += meal.price;
    }
    menuController.decrement = function(meal){
        if(meal.quantity >= 1){
            meal.quantity--;
            menuController.totalQuantity --;
            menuController.totalPrice -= meal.price;
        }
    }
    
});