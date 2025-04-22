function fizzbuzzToN(n)
{
    let finArr = [];
    for(let i = 0; i <= n; i++)
    {
        let outputString = '';
        if(i % 3 === 0)
        {
            outputString += 'fizz';
        }
        if(i % 5 === 0)
        {
            outputString += 'buzz'
        }
        finArr.push(outputString || i.toString());
    }
    return finArr;
}

console.log(fizzbuzzToN(15));

/**
 * 
 * @param {*} tickets 
 * @return Array of tickets 
 */
function countTicketsPerEvent(tickets)
{
    let eventSales = new Map();
    for(let purchase of tickets)
    {
        let event = purchase.event;
        if(!eventSales.has(event))
        {
            eventSales.set(event, 0);
        }
        eventSales.set(event, eventSales.get(event) + purchase.tickets)
    }
}