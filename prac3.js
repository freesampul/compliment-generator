// const Calls = [
//     {name: "Sam", num: 7},
//     {name: "Madi", num: 3},
//     {name: "Kevin", num: 2},
//     {name: "kaquleein", num: 100}
// ]


// function printCalls(calls)
// {
//     const list = calls.map(({name, num}) => {
//         console.log(`${name} called ${num} times`);
//     })
// }

// printCalls(Calls);


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    
    const mapS = new Map();
    const mapT = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        
        if (mapS.has(charS)) {
            if (mapS.get(charS) !== charT) return false;
        } else {
            mapS.set(charS, charT);
        }
        
        if (mapT.has(charT)) {
            if (mapT.get(charT) !== charS) return false;
        } else {
            mapT.set(charT, charS);
        }
    }
    
    return true;
};