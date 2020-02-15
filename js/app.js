'use strict';

console.log('It is working!');


// var stores = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var cookieTotal = [];


function Store(name, min, max, avg) {
    this.storeName = name;
    this.minCustomer = min;
    this.maxCustomer = max;
    this.cookiePerSale = avg;
    this.cookiePerHour = [];
    this.totalCookies = 0;
}

Store.prototype.setAvgCookie = function(){
    for (var i = 0; i < hours.length; i++){
        this.cookiePerHour[i] = randomCookie(this.minCustomer, this.maxCustomer, this.cookiePerSale);
    }
};

Store.prototype.setTotalCookies = function(){
    for (var i = 0; i < this.cookiePerHour.length; i++){
        this.totalCookies += this.cookiePerHour[i];
    }
};

function randomCookie(min, max, avg){
    return Math.floor((Math.random() * (max-min) + min) * avg);
}


var parentElement = document.getElementById('stores');
var storeTable = document.getElementById('store_table');

function createHeaderRow(){
    var storeTableHead = document.getElementById('storeHead');
    var storeRow = document.getElementById('headRow');
    var storeData = document.createElement('td');
    storeRow.appendChild(storeData);
    // Create rows of store data
    for (var i = 0; i < hours.length; i ++){
        var hourData = document.createElement('td');
        hourData.textContent = hours[i];
        storeRow.appendChild(hourData);
    }
    storeData.textContent = 'Daily Location Total';
    storeRow.appendChild(storeData);
    storeTableHead.appendChild(storeRow);
    storeTable.appendChild(storeTableHead);
}


// Function to add a store to the table
Store.prototype.render = function() {
    var storeBody =document.getElementById('table-body');
    // var storeBody = document.createElement('tbody');
    var storeRow = document.createElement('tr');
    var storeData = document.createElement('td');
    var cookieSales = [];
    storeData.textContent = this.storeName;
    storeRow.appendChild(storeData);
    for (var i = 0; i < hours.length; i++){
        var salesData = document.createElement('td');
        salesData.textContent = this.cookiePerHour[i];
        storeRow.appendChild(salesData);
        cookieSales[i] = this.cookiePerHour[i];    
    }
    cookieSales.push(this.totalCookies);
    cookieTotal.push(cookieSales);
    var storeData = document.createElement('td');
    storeData.textContent = this.totalCookies;
    storeRow.appendChild(storeData);
    storeBody.appendChild(storeRow);
}

// Function to create footer row
function createTotalRow(){
    var totalFoot = document.createElement('tfoot');
    var totalRow = document.createElement('tr');
    var totalData = document.createElement('td');
    totalData.textContent = 'Totals';
    totalRow.appendChild(totalData);
    for (var i = 0; i < hours.length+1; i++){
        var ctData = document.createElement('td');
        ctData.textContent = sumArray(i);
        totalRow.appendChild(ctData);
    }
    totalFoot.appendChild(totalRow);
    storeTable.appendChild(totalFoot);
    parentElement.appendChild(storeTable);
}

function sumArray(i){
    var total = 0;
    for (var j = 0; j < cookieTotal.length; j++){
        total += cookieTotal[j][i];
    }
    return total;
}

var seattleStore = new Store('Seattle', 23, 65, 6.3);
seattleStore.setAvgCookie();
seattleStore.setTotalCookies();
var tokyoStore = new Store('Tokyo', 3, 24, 1.2);
tokyoStore.setAvgCookie();
tokyoStore.setTotalCookies();
var dubaiStore = new Store('Dubai', 11, 38, 3.7);
dubaiStore.setAvgCookie();
dubaiStore.setTotalCookies();
var parisStore = new Store('Paris', 20, 38, 2.3);
parisStore.setAvgCookie();
parisStore.setTotalCookies();
var limaStore = new Store('Lima', 2, 16, 4.6);
limaStore.setAvgCookie();
limaStore.setTotalCookies();

// //Create an array of the Store objects;
var createStore = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore];

createHeaderRow();

for(var i = 0; i < createStore.length; i++){
    createStore[i].render();
}


function handleFormSubmit(event){
    console.log(event);
    // Prevent the default
    event.preventDefault();
    // Get the data about the new store from the form inputs
    var nameInput = document.getElementById('name');
    var minInput = document.getElementById('min');
    var maxInput = document.getElementById('max');
    var avgInput = document.getElementById('avg');
    var nameValue = nameInput.value;
    var minValue = minInput.value;
    var maxValue = maxInput.value;
    var avgValue = avgInput.value;
    console.log(nameValue, minValue,maxValue,avgValue);
    // Use the constuctor to create a new store instance
    var newStore = new Store(nameValue, minValue, maxValue, avgValue);
    console.log('Pre-prototype ', newStore);
    newStore.setAvgCookie();
    newStore.setTotalCookies();
    console.log('Prototype ', newStore);
    // Render the new store instance to the table
    newStore.render();
    var form = document.getElementById("newStand");
    form.reset();
}

// Create event listener for form being submitted
var formEvent = document.getElementById('newStand');
formEvent.addEventListener('submit', handleFormSubmit);

createTotalRow();