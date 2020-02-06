'use strict';

console.log('It is working!');

var hours = ['6am:' , '7am:', '8am:', '9am:', '10am', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'Total:'];

var seattleStore = {
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
        this.totalCookies = total(this.cookiePerHour)
    }
};
seattleStore.setAvgCookie();
seattleStore.setTotal();

console.log(seattleStore.totalCookies);

var tokyoStore = {
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
        this.totalCookies = total(this.cookiePerHour)
    }
};
tokyoStore.setAvgCookie();
tokyoStore.setTotal();

var dubaiStore = {
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
        this.totalCookies = total(this.cookiePerHour)
    }
};
dubaiStore.setAvgCookie();
dubaiStore.setTotal();

var parisStore = {
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
        this.totalCookies = total(this.cookiePerHour)
    }
};
parisStore.setAvgCookie();
parisStore.setTotal();

var limaStore = {
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
        this.totalCookies = total(this.cookiePerHour)
    }
};
limaStore.setAvgCookie();
limaStore.setTotal();

function randomCookie(min,max,avg){
    return Math.floor((Math.random()*(max-min)+min)*avg);
}

function total(cookieArray){
    total = 0;
    for (var i = 0; i < cookieArray.length; i ++){
        total += cookieArray[i];
    }
    return total;
}

