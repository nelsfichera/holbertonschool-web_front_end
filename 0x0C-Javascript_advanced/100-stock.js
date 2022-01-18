const stock = {
    macbook: 2,
    iphone: 4,
  };
  
  function processPayment(product_name) {
    if (stock[product_name.toLowerCase()] && stock[product_name.toLowerCase()] > 0) {
      stock[product_name.toLowerCase()] -= 1;
    }
    console.log(`Payment is being processed for item ${product_name}`);
  }
  
  function processError(product_name) {
    if (stock[product_name.toLowerCase()] != undefined) {
      console.log(`No more ${product_name} in stock`);
    } else {
      console.log(`Item ${product_name} is not offered`);
    }
    console.log("Payment is not being processed");
  }
  
  function processOrder(product_name, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${product_name}`);
    if (stock[product_name.toLowerCase()]) {
      callbackPayment(product_name);
    } else {
      callbackError(product_name);
    }
  }
  let product_name = prompt(
    "Please enter the item you would like to purchase (Macbook, iPhone)"
  );
  processOrder(product_name, processPayment, processError);