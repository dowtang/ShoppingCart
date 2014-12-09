$( document ).ready(function() {

  // var calcCart = function () {
  //   alert("Hello");
  // };

  // $var myPrice =

  // $('#calc-prices-button').click(calcCart);

  // $('.item-price')
  // $('.quantity')

  // var quantity =
  // var item-price = 

  // for (var i = 0; i < numItems; i++) {

  // }

  // <item-price>
  // <quantity>

  // var itemLists = $('.item-price');
  // var itemPrice = $(itemLists[1]).text();

  // alert(itemPrice);

// ////////
//   var itemLists = $('.quantity');
//   var itemQuantity = $(itemLists[0]).val();

//   alert(itemQuantity);
////////

  // var button = $('#calc-prices-button');
  // button.click(function() {
  //   // do something
  //   var itemLists = $('.quantity');
  //   var itemQuantity = $(itemLists[0]).val();

  //   alert(itemQuantity);

  // })

  

  var button = $('#calc-prices-button');
  button.hover(function() {
    
    var numItems = $('.quantity').length
    var total = 0;
    for (var i = 0, l = numItems; i < l; i++) {
      var priceSalmon = $($('.item-price')[i]).text().replace('$','');
      var quantitySalmon = $($('.quantity')[i]).val();
      total = total + (priceSalmon * quantitySalmon);
    }

    $('#total-price').text(total);

  })

  $('.kill-row').on('click', function(e) {
    // e.preventDefault();
    // $(this).kill-row('hide');
    $(this).parent().parent().remove();
  })

  
  


  // $('.itemLists[1]').keyup(calculate);
  // $('.quantity[1]').keyup(calculate);

  // var priceSalmon = (itemPrice, quantity) {
  //   return item-price * quantity;
  // }

  // var calcCart = function (".item-price", ".quantity") {
  //   totalPrice ("price * quantity");
  // }

});

// this.item-price

// var cart = [
//   {
//     name: 'Pen',
//     price: 199,
//     qty: 2
//   },
//   {
//     name: 'Pencil',
//     price: 33,
//     qty: 2
//   },{
//     name: 'Notepad',
//     price: 99,
//     qty: 3
//   },{
//     name: 'Pirate Outfit',
//     price: 2099,
//     qty: 1
//   },{
//     name: 'Immodium',
//     price: 599,
//     qty: 1
//   }
// ];

// cart[0].price = 

// var shoppingCart = [];
// shoppingCart[0].price = 400;
// shoppingCart[1].price = 222;
// shoppingCart[2].price = 423;
// shoppingCart[3].price = 12;
// shoppingCart[4].price = 24;
// shoppingCart[5].price = 34;
// shoppingCart[6].price = 12;
// shoppingCart[7].price = 24;
// shoppingCart[8].price = 34;











