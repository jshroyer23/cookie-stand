'use strict';

console.log('It is working!');

var hours = ['6am:' , '7am:', '8am:', '9am:', '10am', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

var seattleStore = {
    name: 'Seattle',
    minCustomer: 23,
    maxCustomer: 65,
    cookiePerSale: 6.3,
    cookiePerHour: [],
    totalCookies: 0,
    setAvgCookie:  function() {
        for (var i = 0; i < hours.length; i++){
            this.cookiePerHour[i] = randomCookie(this.minCustomer, this.maxCustomer, this.cookiePerSale);
            console.log(i, this.cookiePerHour[i])
        }
    },
    setTotal: function() {
        this.totalCookies = total(this.cookiePerHour);
    }
};
seattleStore.setAvgCookie();
seattleStore.setTotal();

var tokyoStore = {
    name: 'Tokyo',
    minCustomer: 3,
    maxCustomer: 24,
    cookiePerSale: 1.2,
    cookiePerHour: [],
    totalCookies: 0,
    setAvgCookie:  function() {
        for (var i = 0; i < hours.length; i++){
            this.cookiePerHour[i] = randomCookie(this.minCustomer, this.maxCustomer, this.cookiePerSale);
            console.log(i, this.cookiePerHour[i])
        }
    },
    setTotal: function() {
        this.totalCookies = total(this.cookiePerHour);
    }
};
tokyoStore.setAvgCookie();
tokyoStore.setTotal();

var dubaiStore = {
    name: 'Dubai',
    minCustomer: 11,
    maxCustomer: 38,
    cookiePerSale: 3.7,
    cookiePerHour: [],
    totalCookies: 0,
    setAvgCookie:  function() {
        for (var i = 0; i < hours.length; i++){
            this.cookiePerHour[i] = randomCookie(this.minCustomer, this.maxCustomer, this.cookiePerSale);
            console.log(i, this.cookiePerHour[i])
        }
    },
    setTotal: function() {
        this.totalCookies = total(this.cookiePerHour);
    }
};
dubaiStore.setAvgCookie();
dubaiStore.setTotal();

var parisStore = {
    name: 'Paris',
    minCustomer: 20,
    maxCustomer: 38,
    cookiePerSale: 2.3,
    cookiePerHour: [],
    totalCookies: 0,
    setAvgCookie:  function() {
        for (var i = 0; i < hours.length; i++){
            this.cookiePerHour[i] = randomCookie(this.minCustomer, this.maxCustomer, this.cookiePerSale);
            console.log(i, this.cookiePerHour[i])
        }
    },
    setTotal: function() {
        this.totalCookies = total(this.cookiePerHour);
    }
};
parisStore.setAvgCookie();
parisStore.setTotal();

var limaStore = {
    name: 'Lima',
    minCustomer: 2,
    maxCustomer: 16,
    cookiePerSale: 4.6,
    cookiePerHour: [],
    totalCookies: 0,
    setAvgCookie:  function() {
        for (var i = 0; i < hours.length; i++){
            this.cookiePerHour[i] = randomCookie(this.minCustomer, this.maxCustomer, this.cookiePerSale);
            console.log(i, this.cookiePerHour[i])
        }
    },
    setTotal: function() {
        this.totalCookies = total(this.cookiePerHour);
    }
};
limaStore.setAvgCookie();
limaStore.setTotal();

function randomCookie(min,max,avg){
    return Math.floor((Math.random()*(max-min)+min)*avg);
}

function total(cookieArray){
    var sum = 0;
    for (var i = 0; i < cookieArray.length; i ++){
        sum += cookieArray[i];
    }
    return sum;
}

// Seattle
var parentElement = document.getElementById('stores');
var article = document.createElement('article');
parentElement.appendChild(article);
var h2 = document.createElement('h2');
h2.textContent = seattleStore.name;
article.appendChild(h2);
var ul = document.createElement('ul');
article.appendChild(ul);
for(var i = 0; i < hours.length; i++){
    var li = document.createElement('li');
    li.textContent = hours[i] + ' ' + seattleStore.cookiePerHour[i] + ' cookies';
    ul.appendChild(li);
}
var li = document.createElement('li');
li.textContent = 'Total: ' + seattleStore.totalCookies;
ul.appendChild(li);

// Tokyo
var article = document.createElement('article');
parentElement.appendChild(article);
var h2 = document.createElement('h2');
h2.textContent = tokyoStore.name;
article.appendChild(h2);
var ul = document.createElement('ul');
article.appendChild(ul);
for(var i = 0; i < hours.length; i++){
    var li = document.createElement('li');
    li.textContent = hours[i] + ' ' + tokyoStore.cookiePerHour[i] + ' cookies';
    ul.appendChild(li);
}
var li = document.createElement('li');
li.textContent = 'Total: ' + tokyoStore.totalCookies;
ul.appendChild(li);

// Dubai
var article = document.createElement('article');
parentElement.appendChild(article);
var h2 = document.createElement('h2');
h2.textContent = dubaiStore.name;
article.appendChild(h2);
var ul = document.createElement('ul');
article.appendChild(ul);
for(var i = 0; i < hours.length; i++){
    var li = document.createElement('li');
    li.textContent = hours[i] + ' ' + dubaiStore.cookiePerHour[i] + ' cookies';
    ul.appendChild(li);
}
var li = document.createElement('li');
li.textContent = 'Total: ' + dubaiStore.totalCookies;
ul.appendChild(li);

// Paris
var article = document.createElement('article');
parentElement.appendChild(article);
var h2 = document.createElement('h2');
h2.textContent = parisStore.name;
article.appendChild(h2);
var ul = document.createElement('ul');
article.appendChild(ul);
for(var i = 0; i < hours.length; i++){
    var li = document.createElement('li');
    li.textContent = hours[i] + ' ' + parisStore.cookiePerHour[i] + ' cookies';
    ul.appendChild(li);
}
var li = document.createElement('li');
li.textContent = 'Total: ' + parisStore.totalCookies;
ul.appendChild(li);

// Lima
var article = document.createElement('article');
parentElement.appendChild(article);
var h2 = document.createElement('h2');
h2.textContent = limaStore.name;
article.appendChild(h2);
var ul = document.createElement('ul');
article.appendChild(ul);
for(var i = 0; i < hours.length; i++){
    var li = document.createElement('li');
    li.textContent = hours[i] + ' ' + limaStore.cookiePerHour[i] + ' cookies';
    ul.appendChild(li);
}
var li = document.createElement('li');
li.textContent = 'Total: ' + limaStore.totalCookies;
ul.appendChild(li);