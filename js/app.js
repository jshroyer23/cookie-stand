'use strict';

console.log('It is working!');



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
   
    // Create column headers
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
    var totalFoot = document.getElementById('tFooter');
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

function updateTotalRow(){
    var footer = document.getElementById('tFooter');
    if(footer.hasChildNodes()){
        footer.innerHTML = '';
    }
    createTotalRow();
}

function sumArray(i){
    var total = 0;
    for (var j = 0; j < cookieTotal.length; j++){
        total += cookieTotal[j][i];
    }
    console.log(cookieTotal);
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

// Create an array of the Store objects;
var createStore = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore];

createHeaderRow();

for(var i = 0; i < createStore.length; i++){
    createStore[i].render();
}


function handleFormSubmit(event){
    
    // Prevent the default
    event.preventDefault();
    
    // Get the data about the new store from the form inputs
    var nameValue = document.getElementById('name').value;
    var minValue = parseInt(document.getElementById('min').value, 10);
    var maxValue = parseInt(document.getElementById('max').value, 10);
    var avgValue = parseFloat(document.getElementById('avg').value);
    console.log(nameValue, minValue,maxValue,avgValue);

    // Use the constuctor to create a new store instance
    var newStore = new Store(nameValue, minValue, maxValue, avgValue);
    newStore.setAvgCookie();
    newStore.setTotalCookies();
    
    // Render the new store instance to the table
    newStore.render();
    createStore.push(newStore);
    var form = document.getElementById("newStand");
    form.reset();
    updateTotalRow();
}

// Create event listener for form being submitted
var formEvent = document.getElementById('newStand');
formEvent.addEventListener('submit', handleFormSubmit);

createTotalRow();