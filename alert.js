var calculator = document.querySelector('.add-form');
var length = document.querySelector('.length-input');
var width = document.querySelector('.width-input');
var button = document.querySelector('.add-form-button');
var square = document.querySelector('.square');
var price = document.querySelector('.price');
var delivery = document.querySelector('.delivery');

button.onclick = function() {
    var lengthText = length.value;
    var widthText = width.value;
    var squareDescription = square.querySelector('span');
    squareDescription.textContent = lengthText*widthText;
    var priceDescription = price.querySelector('span');
    if (delivery.checked)
       { priceDescription.textContent = squareDescription.textContent*1000+500;}
       else {priceDescription.textContent = squareDescription.textContent*1000;}

};

 