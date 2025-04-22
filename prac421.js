
var topBuyerPerCity = function(sales) {
    // We are trying to find the top buyer in each city
    //Start with a map of the ctiies and their buyers. Count how many times each buyer shows up
    //Create an array of pairs, the city and the TOP buyer only for that city

    let citiesAndNames = new Map();

    //Populate the map with each city name and a count for tickets bought for each buyer  
    for(let purchase of sales)
    {
        let name = purchase.buyer;
        let city = purchase.city;
        if(!citiesAndNames.has(city))
        {
            citiesAndNames.set(city, new Set());
        }
        namesAndCities.get(city).set(name, (namesAndCities.get(city).get(name) || 0 ) + 1)
    }

    //Create final arr
    let finArr = [];

    //Go through each city and list of buyers 
    for(let [city, buyerList] of citiesAndNames)
    {
        buyerList.sort((a,b) => b[0] - a[0]);   //Sort the list of buyers
        finArr.push([city, buyerList[0]]); //Push the city and the first buyer to finarr
    }
    finArr.sort((a,b) => a[0].localeCompare(b[0])); // Sort finarr based on city name
    return finArr;
};

var topBuyerPerCity = function(sales) {
    let citiesAndNames = new Map();

    // Populate the map
    for (let purchase of sales) {
        let name = purchase.buyer;
        let city = purchase.city;

        if (!citiesAndNames.has(city)) {
            citiesAndNames.set(city, new Map());
        }

        let buyerMap = citiesAndNames.get(city);
        buyerMap.set(name, (buyerMap.get(name) || 0) + 1);
    }

    let finArr = [];

    // Process each city
    for (let [city, buyerMap] of citiesAndNames) {
        let buyerArr = Array.from(buyerMap);

        buyerArr.sort((a, b) => {
            if (b[1] !== a[1]) {
                return b[1] - a[1];
            } else {
                return a[0].localeCompare(b[0]);
            }
        });

        finArr.push([city, buyerArr[0][0]]);
    }

    finArr.sort((a, b) => a[0].localeCompare(b[0]));

    return finArr;
};


/**
 * @param {Object[]} sales
 * @return {string[][]}
 */
var topBuyerPerEvent = function(sales) {
    let events = new Map();
    for(let purchase of sales)
    {
        let event = purchase.event;
        if(!events.has(event))
        {
            events.set(event, new Map());
        }
        let buyersList = events.get(event);
        let buyer = purchase.buyer;
        buyersList.set(buyer, (buyersList.get(buyer) || 0) + 1 );
    }
    let finArr = [];
    for(let [event, buyerList] of events)
    {
        let buyerArr = Array.from(buyerList);
        buyerArr.sort((a,b) =>
        {
            if(b[1] !== a[1])
            {
                return b[1] - a[1];
            } else
                return a[0].localeCompare(b[0]);
        })
        finArr.push([event, buyerList[0]]);
    }
    return finArr.sort((a,b) => 
        a[0].localeCompare(b[0]));
};


