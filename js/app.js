'use strict';

console.log('It is working!');



function Store(name, min, max, cookies) {
    this.storeName = name;
    this.minCustomer = min;
    this.maxCustomer = max;
    this.cookiePerSale = cookies;
    this.cookiePerHour = setAvgCookie(min, max, cookies);
    this.totalCookies = setTotalCookies(cookiePerHour);
}

Store.prototype.setAvgCookie = function(min, max, cookies){
    for (var i = 0; i < hours.length; i++){
        this.cookiePerHour[i] = randomCookie(min, max, cookies);
    }
}

Store.prototype.setTotalCookies = function(cphArray){
    for (var i = 0; i < cphArray.length; i++){
        this.totalCookies += cphArray[i];
    }
}

function randomCookie(min,max,avg){
    return Math.floor((Math.random()*(max-min)+min)*avg);
}

var stores = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
var hours = ['6:am', '7:am', '8:am', '9:am', '10:am', '11am', '12:pm', '1:pm', '2:pm', '3:pm', '4:pm', '5:pm', '6:pm', '7:pm'];

var parentElement = document.getElementById('stores');
var storeTable = document.getElementById('store_table');
var storeTableHead = document.getElementById('storeHead');
var storeRow = document.getElementById('headRow');
var storeData = document.getElementById('dataHead1');
storeData.textContent = 'Store';
storeRow.appendChild(storeData);
for (var i = 0; i < hours.length; i ++){
    var storeData = document.createElement('td');
    storeData.textContent = hours[i];
    storeRow.appendChild(storeData);
}
storeData.textContent = 'Daily Location Total';
storeRow.appendChild(storeData);
storeTableHead.appendChild(storeRow);
storeTable.appendChild(storeTableHead);


parentElement.appendChild(storeTable);

var seattleStore = new Store('Seattle', 23, 65, 6.3);
seattleStore.setAvgCookie();
// seattleStore.setTotalCookies();
// var tokyoStore = new Store('Tokyo', 3, 24, 1.2);
// tokyoStore.setAvgCookie();
// tokyoStore.setTotalCookies();
// var dubaiStore = new Store('Dubai', 11, 38, 3.7);
// dubaiStore.setAvgCookie();
// dubaiStore.setTotalCookies();
// var parisStore = new Store('Paris', 20, 38, 2.3);
// parisStore.setAvgCookie();
// parisStore.setTotalCookies();
// var limaStore = new Store('Lima', 2, 16, 4.6);
// limaStore.setAvgCookie();
// limaStore.setTotalCookies();




Store.prototype.render = function() {

}

for (var i = 0; i < stores.length; i ++){
    var parentElement = document.getElementById('stores');
    var article = document.createElement('article');
    parentElement.appendChild(article);
    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    article.appendChild(h2);
    var ul = document.createElement('ul');
    article.appendChild(ul);
    for(var i = 0; i < hours.length; i++){
        var li = document.createElement('li');
        li.textContent = hours[i] + ' ' + this.cookiePerHour[i] + ' cookies';
        ul.appendChild(li);
    }
    var li = document.createElement('li');
    li.textContent = 'Total: ' + this.totalCookies;
    ul.appendChild(li);
}





// var seattleStore = {
//     name: 'Seattle',
//     minCustomer: 23,
//     maxCustomer: 65,
//     cookiePerSale: 6.3,
//     cookiePerHour: [],
//     totalCookies: 0,
//     setAvgCookie:  function() {
//         for (var i = 0; i < hours.length; i++){
//             this.cookiePerHour[i] = randomCookie(this.minCustomer, this.maxCustomer, this.cookiePerSale);
//             console.log(i, this.cookiePerHour[i])
//         }
//     },
//     setTotal: function() {
//         this.totalCookies = total(this.cookiePerHour);
//     }
// };
// seattleStore.setAvgCookie();
// seattleStore.setTotal();

// var tokyoStore = {
//     name: 'Tokyo',
//     minCustomer: 3,
//     maxCustomer: 24,
//     cookiePerSale: 1.2,
//     cookiePerHour: [],
//     totalCookies: 0,
//     setAvgCookie:  function() {
//         for (var i = 0; i < hours.length; i++){
//             this.cookiePerHour[i] = randomCookie(this.minCustomer, this.maxCustomer, this.cookiePerSale);
//             console.log(i, this.cookiePerHour[i])
//         }
//     },
//     setTotal: function() {
//         this.totalCookies = total(this.cookiePerHour);
//     }
// };
// tokyoStore.setAvgCookie();
// tokyoStore.setTotal();

// var dubaiStore = {
//     name: 'Dubai',
//     minCustomer: 11,
//     maxCustomer: 38,
//     cookiePerSale: 3.7,
//     cookiePerHour: [],
//     totalCookies: 0,
//     setAvgCookie:  function() {
//         for (var i = 0; i < hours.length; i++){
//             this.cookiePerHour[i] = randomCookie(this.minCustomer, this.maxCustomer, this.cookiePerSale);
//             console.log(i, this.cookiePerHour[i])
//         }
//     },
//     setTotal: function() {
//         this.totalCookies = total(this.cookiePerHour);
//     }
// };
// dubaiStore.setAvgCookie();
// dubaiStore.setTotal();

// var parisStore = {
//     name: 'Paris',
//     minCustomer: 20,
//     maxCustomer: 38,
//     cookiePerSale: 2.3,
//     cookiePerHour: [],
//     totalCookies: 0,
//     setAvgCookie:  function() {
//         for (var i = 0; i < hours.length; i++){
//             this.cookiePerHour[i] = randomCookie(this.minCustomer, this.maxCustomer, this.cookiePerSale);
//             console.log(i, this.cookiePerHour[i])
//         }
//     },
//     setTotal: function() {
//         this.totalCookies = total(this.cookiePerHour);
//     }
// };
// parisStore.setAvgCookie();
// parisStore.setTotal();

// var limaStore = {
//     name: 'Lima',
//     minCustomer: 2,
//     maxCustomer: 16,
//     cookiePerSale: 4.6,
//     cookiePerHour: [],
//     totalCookies: 0,
//     setAvgCookie:  function() {
//         for (var i = 0; i < hours.length; i++){
//             this.cookiePerHour[i] = randomCookie(this.minCustomer, this.maxCustomer, this.cookiePerSale);
//             console.log(i, this.cookiePerHour[i])
//         }
//     },
//     setTotal: function() {
//         this.totalCookies = total(this.cookiePerHour);
//     }
// };
// limaStore.setAvgCookie();
// limaStore.setTotal();


// function total(cookieArray){
//     var sum = 0;
//     for (var i = 0; i < cookieArray.length; i ++){
//         sum += cookieArray[i];
//     }
//     return sum;
// }

// // Seattle
// var parentElement = document.getElementById('stores');
// var article = document.createElement('article');
// parentElement.appendChild(article);
// var h2 = document.createElement('h2');
// h2.textContent = seattleStore.name;
// article.appendChild(h2);
// var ul = document.createElement('ul');
// article.appendChild(ul);
// for(var i = 0; i < hours.length; i++){
//     var li = document.createElement('li');
//     li.textContent = hours[i] + ' ' + seattleStore.cookiePerHour[i] + ' cookies';
//     ul.appendChild(li);
// }
// var li = document.createElement('li');
// li.textContent = 'Total: ' + seattleStore.totalCookies;
// ul.appendChild(li);

// // Tokyo
// var article = document.createElement('article');
// parentElement.appendChild(article);
// var h2 = document.createElement('h2');
// h2.textContent = tokyoStore.name;
// article.appendChild(h2);
// var ul = document.createElement('ul');
// article.appendChild(ul);
// for(var i = 0; i < hours.length; i++){
//     var li = document.createElement('li');
//     li.textContent = hours[i] + ' ' + tokyoStore.cookiePerHour[i] + ' cookies';
//     ul.appendChild(li);
// }
// var li = document.createElement('li');
// li.textContent = 'Total: ' + tokyoStore.totalCookies;
// ul.appendChild(li);

// // Dubai
// var article = document.createElement('article');
// parentElement.appendChild(article);
// var h2 = document.createElement('h2');
// h2.textContent = dubaiStore.name;
// article.appendChild(h2);
// var ul = document.createElement('ul');
// article.appendChild(ul);
// for(var i = 0; i < hours.length; i++){
//     var li = document.createElement('li');
//     li.textContent = hours[i] + ' ' + dubaiStore.cookiePerHour[i] + ' cookies';
//     ul.appendChild(li);
// }
// var li = document.createElement('li');
// li.textContent = 'Total: ' + dubaiStore.totalCookies;
// ul.appendChild(li);

// // Paris
// var article = document.createElement('article');
// parentElement.appendChild(article);
// var h2 = document.createElement('h2');
// h2.textContent = parisStore.name;
// article.appendChild(h2);
// var ul = document.createElement('ul');
// article.appendChild(ul);
// for(var i = 0; i < hours.length; i++){
//     var li = document.createElement('li');
//     li.textContent = hours[i] + ' ' + parisStore.cookiePerHour[i] + ' cookies';
//     ul.appendChild(li);
// }
// var li = document.createElement('li');
// li.textContent = 'Total: ' + parisStore.totalCookies;
// ul.appendChild(li);

// // Lima
// var article = document.createElement('article');
// parentElement.appendChild(article);
// var h2 = document.createElement('h2');
// h2.textContent = limaStore.name;
// article.appendChild(h2);
// var ul = document.createElement('ul');
// article.appendChild(ul);
// for(var i = 0; i < hours.length; i++){
//     var li = document.createElement('li');
//     li.textContent = hours[i] + ' ' + limaStore.cookiePerHour[i] + ' cookies';
//     ul.appendChild(li);
// }
// var li = document.createElement('li');
// li.textContent = 'Total: ' + limaStore.totalCookies;
// ul.appendChild(li);