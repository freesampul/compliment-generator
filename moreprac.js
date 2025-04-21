/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let cur = s[i];

        if (cur === '(' || cur === '[' || cur === '{') {
            stack.push(cur);
        } else {
            if (stack.length === 0) return false; // Nothing to match

            let last = stack.pop();
            if (last === '(' && cur !== ')') return false;
            if (last === '[' && cur !== ']') return false;
            if (last === '{' && cur !== '}') return false;
        }
    }

    return stack.length === 0; // Stack must be empty if valid
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
   let minLength = Math.min(word1.length, word2.length)
   let fin = '';
   for(let i = 0; i < minLength; i++)
   {
        fin += word1[i];
        fin += word2[i];
   }
   if(word1.length > word2.length)
   {
     fin += word1.slice(minLength, word1.length);
   }
   if(word2.length > word1.length)
   {
    fin += word2.slice(minLength, word2.length);
   }
   return fin;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let numMap = new Map();
    for(let i = 0; i < nums.length; i++)
    {
        numMap.set(nums[i], (numMap.get(nums[i]) || 0) + 1)
    }
    for(let [num, value] of numMap)
    {
        if(value === 1) return num;
    }
    return 0;
};

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        
        if (stack.length > 0 && curr === stack[stack.length - 1]) {
            stack.pop(); 
        } else {
            stack.push(curr); 
        }
    }
    return stack.join('');
};


/**
 * @param {Object[]} events
 * @return {string}
 */
var findShortestEventName = function(events) {
    let bestEvent = events[0]; 
    for (let i = 1; i < events.length; i++) {
        let curr = events[i];

        if (curr.attendees < bestEvent.attendees) {
            bestEvent = curr;
        } else if (curr.attendees === bestEvent.attendees) {
            if (curr.name.length < bestEvent.name.length) {
                bestEvent = curr;
            } else if (curr.name.length === bestEvent.name.length && curr.name < bestEvent.name) {
                bestEvent = curr;
            }
        }
    }

    return bestEvent.name;

};


/**
 * @param {Object[]} seats
 * @return {number} best seat 
 */

function findBestSeat(seats) {
    let bestSeat = seats[0];

    for (let i = 1; i < seats.length; i++) {
        let curr = seats[i];

        if (curr.distanceFromStage < bestSeat.distanceFromStage) {
            bestSeat = curr;
        } else if (curr.distanceFromStage === bestSeat.distanceFromStage) {
            if (curr.seatNumber < bestSeat.seatNumber) {
                bestSeat = curr;
            }
        }
    }

    return bestSeat.seatNumber;
}


/**
 * @param {Object[]} tickets
 * @return {Object}
 */
var groupTicketsByBuyer = function(tickets) {
    let ticketBuyers = {};

    for (let ticket of tickets) {
        let name = ticket.buyer;
        let ticketId = ticket.ticketId;

        if (!ticketBuyers[name]) {
            ticketBuyers[name] = [];
        }
        ticketBuyers[name].push(ticketId);
    }

    // Now sort each buyer's tickets
    for (let buyer in ticketBuyers) {
        ticketBuyers[buyer].sort((a, b) => a - b);
    }

    return ticketBuyers;
};


/**
 * @param {Object[]} tickets
 * @return {Object}
 */
var countTicketsByBuyer = function(tickets) {
    let ticketBuyers = {};

    for (let ticket of tickets) {
        let name = ticket.buyer; 

        if (!(name in ticketBuyers)) {
            ticketBuyers[name] = 0;
        }
        ticketBuyers[name]++; 
    }

    return ticketBuyers;
};