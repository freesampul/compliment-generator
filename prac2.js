function ransom(note, magazine)
{
    let freq = {};
    for(let i = 0; i < magazine.length; i++)
        {
            freq[magazine[i]] = (freq[magazine[i]] || 0) +1;
        }
    for(let j = 0; j < note.length; j++)
        {
            if(!freq[note[j]]) return false;
            freq[note[j]]--;
        }
        return true;
}



function moveAllZeros(arr) {
    let pointer = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            if (i !== pointer) {
                arr[pointer] = arr[i];
                arr[i] = 0;
            }
            pointer++; 
        }
    }
}

function returnPivot(arr)
{
    for(let i = 1; i < arr.length; i++)
    {
        for(let j = 0; j < i; j++)
        {
            let leftSum = leftSum + arr[j];
        }
        for(let k = arr.lenth; k > i; k--)
            {
                let rightSum = rightSum + arr[k];
            }
        if(leftSum === rightSum) return i;
    }
    return -1;
}

function returnPivEff(arr)
{
    const sum = arr.reduce((acc, x) => acc + x, 0);
    let leftSum = 0;
    for(let i = 1; i < arr.length; i++)
    {
        leftsum = leftsum + nums[i-1];
    
    if (leftSum === (sum - leftSum - nums[i]))
    {
        return i;
    }
}
    return -1;
}


function reverseString(string)
{
    let charArr = string.split('');
    charArr.reverse();
    let finString = charArr.join('');
    return finString;
}


function maxProfit(prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
        }
    }
    return maxProfit;
}