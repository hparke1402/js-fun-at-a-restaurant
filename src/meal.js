function nameMenuItem(food) {
 return `Delicious ${food}`;
}

function createMenuItem(itemName, itemPrice, itemType) {
  menuItem = {
    name: itemName,
    price: itemPrice,
    type: itemType,
  };
  return menuItem;
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`
}

function decreasePrice(decreasedPrice) {
  return menuItem.price * .90;
}





function addIngredients(ingredientToAdd, ingredients) {
if (ingredients.includes(ingredientToAdd)) {
  return ingredients;
} else {
  ingredients.push(ingredientToAdd)
  return ingredients;
}
}



function createRecipe(title, ingredients, menuItemType) {
  return recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
}





module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
