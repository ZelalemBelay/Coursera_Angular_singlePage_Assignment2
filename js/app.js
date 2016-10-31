(function(){
  angular.module('ShoppingListCheckOff', [])

  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.inject = ['$scope', 'ShoppingListCheckOffFactory'];
  AlreadyBoughtController.inject = ['$scope', 'ShoppingListCheckOffFactory'];

  function ToBuyController(ShoppingListCheckOffService){
  var Tobuy = this;
  Tobuy.toBuyItems = ShoppingListCheckOffService.GetItemsToBuy();
  Tobuy.buyItem = function(index) {
    console.log(Tobuy.toBuyItems.length);
    ShoppingListCheckOffService.buyItem(index);
  };

};

function AlreadyBoughtController(ShoppingListCheckOffService) {
  var isBought = this;
  isBought.Allitems = ShoppingListCheckOffService.GetBoughtItems();
};

  function ShoppingListCheckOffService()
  {
    var service = this;
    var toBuyItems = [
      { name: "Cookies", quantity: 10 },
      { name: "Milk", quantity: 1 },
      { name: "Chips", quantity: 5},
      { name: "Sugary Drinks", quantity: 10 },
      { name: "Peptin Bezmo", quantity: 2 }
    ];
    var boughtItems = [];

    service.GetItemsToBuy = function() {
      return toBuyItems;
    };

    service.GetBoughtItems = function() {
      return boughtItems;
    };

    service.buyItem = function(itemIndex) {
      var item = toBuyItems[itemIndex];
      boughtItems.push(item);
      toBuyItems.splice(itemIndex, 1);
    };
  };

})();
