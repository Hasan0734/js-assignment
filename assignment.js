// https://github.com/Hasan0734/js-assignment

//Kilometer To Meter
// 1 kilometer  = 100 mter

function kilometerToMeter(kilometer) {
  var totalMeter = kilometer * 1000;
  return totalMeter;
}
kilometerToMeter(15);

// Budget Calculator
// 1 watch = 50 tk
// 1 phone = 100 tk
// 1 laptop = 500 tk

function budgetCalculator(watch, phone, laptop) {
  var watchPrice = watch * 50;
  var phonePrice = phone * 100;
  var laptopPrice = laptop * 500;
  var totalPrice = watchPrice + phonePrice + laptopPrice;
  return totalPrice;
}
budgetCalculator(1, 1, 1);

// Hotel Cost
// first 10 days = 100 tk per night
// next 10 days = 80 tk per night
// 20 days before = 50 tk per night

function hotelCost(days) {
  var totalCost = 0;
  if(days <= 10){
    totalCost = days * 100;
  }
  else if(days <= 20){
      var first10 = 10 * 100
      var remainDays = days - 10;
      var next10 = remainDays * 80;
      totalCost = first10 + next10
  }
  else{
      var first10 = 10 * 100;
      var next10 = 10 * 80;
      var remainDays = days - 20;
      var nextDays = remainDays * 50;
      totalCost = first10 + next10 + nextDays;
  }
  return totalCost;
}
hotelCost(200)



//mega friend
//find big name on friend list

function megaFriend(friends){
    var bigName =''
    for (var i = 0; i < friends.length; i++) {
        const friendName = friends[i];
        if (bigName.length == 0) {
            bigName = friendName;
        }
        if (friendName.length > bigName.length) {
            bigName = friendName
        }
    }
    return bigName
}
var friends = ['rasel', 'jahid', 'mehedi', 'kamruzzaman', 'khalilur', 'mostofa']
megaFriend(friends)
