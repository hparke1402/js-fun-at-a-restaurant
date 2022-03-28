function createRestaurant(restaurantName) {
  return {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

function addMenuItem(restaurantName, foodItem) {
  var menuToAddTo = restaurantName.menus[foodItem.type];

for (i = 0; i < menuToAddTo.length; i++) {

  if (menuToAddTo[i] === foodItem) {
    menuToAddTo.splice(i, 1);

    }

}
menuToAddTo.push(foodItem);
}


//taking in restaurant object and food item ,
//
// push method array

function removeMenuItem() {

}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
