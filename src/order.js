/*function takeOrder(deliveryOrders, orderNum) {
  if (orderNum.length < 3) {
    return orderNum.push(deliveryOrders);
  } else {
  return deliveryOrders;
}
};
*/
function takeOrder(orderObjNum, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(orderObjNum);
  } else {
  return deliveryOrders;
}
};



function refundOrder(orderNumber, deliveryOrders) {
  for (i = 0; i < deliveryOrders.length; i++) {
    //for loop is saying starting at index value 0 in deliveryOrders array,
    //fun through whole length of loop
     if (orderNumber === deliveryOrders[i].orderNumber) {
       //defining condition that if orderNumber entered strictly
       //equals the order number in the array at index value[i]
      return deliveryOrders.splice(i, 1);
      //return the array with one value spliced off at the index value that
      //matches above condition
    }
    }
    };



function listItems(deliveryOrders) {
  var listItems = "";

  for (i = 0; i < deliveryOrders.length; i++) {
    if (i === deliveryOrders.length - 1) {
      listItems += deliveryOrders[i].item
    } else {
      listItems += deliveryOrders[i].item  + ", ";;
    }
  } return listItems
}







//deliveryOrders.values
// function listItems(deliveryOrders) {
//   return deliveryOrders[i].item;
//   };


function searchOrder(deliveryOrders, foodItem) {
  for (i = 0; i < deliveryOrders.length; i++) {
   if (deliveryOrders[i].item === foodItem) {
     return true;
   }
 }
 return false;
}

//check array to see of food item is property value of object in array



















// remove order[1, 2, 3] object from deliveryOrders by accessing
// orderNumber value from key "orderNumber"
//
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
