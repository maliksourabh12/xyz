itemName = ['Laptop','Mobile','HeadPhone','Printer','Joystick'];
itemPrice = [30000,10000,1500,25000,3000];
var i;
for(i=0;i<itemName.length;i++){
    var nameDisplay = document.querySelector('#item_name');
    nameDisplay.innerHTML += <option value="${itemPrice[i]}">${itemName[i]}</option>;
}
var j;
for(j=1;j<10;j++){
    var quantity = document.querySelector('#qty');
    quantity.innerHTML += <option value="${j}">${j}</option>;
}
function addItem(){
    var displayItem = document.querySelector('#displayItem');
    var itemName = document.querySelector('#item_name').options[document.querySelector('#item_name').selectedIndex].text;

    var itemPrice = document.querySelector('#index_name').value;
    var qty = document.querySelector('#qty').value;
}