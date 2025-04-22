function reverseString(s)
{
    let chars = [];
    for(let i = s.length-1; i >= 0; i--)
    {
        chars.push(s[i]);
    }
    return chars.join('');
}

function firstUnqiue(s)
{
    let freqs = {};
    for(let i = 0; i < s.length; i++)
    {
        freqs[s[i]] = (freqs[s[i]] || 0) + 1;
    }
    for(let i = 0; i < s.length; i++)
        {
            if(freqs[s[i]] === 1) return i;
        }
    return -1;
}

function isAnagramq(s, t)
{
    return s.split('').sort().join('') === t.split('').sort().join('');
}

function twoSum(nums, target)
{
    for(let i = 0; i < nums.length; i++)
    {
        let newTarget = target - nums[i];
        if(nums.splice(i).includes(newTarget))
        {
            return [i, nums.indexOf(nums.splice(i).includes(newTarget))]
        }
    }
}