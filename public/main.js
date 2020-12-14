





var customerName = document.getElementById("customerName");
var productName  = document.getElementById("productName");
var price 		 = document.getElementById("price");
var quantity 	 = document.getElementById("quantity");
var textfield 	 = document.getElementById("itemlist");

// total amount
var totalamount  = document.getElementById("totalamount");
// tax variables
var gst          = document.getElementById("gst");

function getData() {	
	console.log("Customer Name: ", customerName.value);
	console.log("Product Name: ", productName.value);
	console.log("Price Name: ", price.value);
	console.log("Quantity Name: ", quantity.value);
}

function addItem() {
	textfield.append(productName.value + '\n');
	console.log("Saved Data!");
}

// total and grand total functions
function totalAmount() {
	var total = price.value * quantity.value;
	var grandTotal = parseInt(grandTotal + (gst.value / total * 100));
	console.log("Total: ", total);
	console.log("Grand total: ", grandTotal);
	totalAmount.value = total;
}

function reset() {
	customerName.value = "";
	productName.value = "";
	price.value = 0;
	quantity.value = 0;
	textfield.value = "";
}