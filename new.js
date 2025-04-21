function reverseString(string)
{
    let chars = string.split("");
    chars.reverse();
    return chars.join("");
}


console.log(reverseString("hello"));


function isPalindrome(string) {
    // let reversedString = reverseString(string);
    // return string === reversedString;
    return string === string.split("").reverse().join("");
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("madam"));


function removeDuplicates(arr) {
    const uniqueSet = new Set(arr);
    return Array.from(uniqueSet);
}

console.log(removeDuplicates([1, 2, 3, 1, 2, 3]));


function largestNum(arr)
{
    return Math.max(...arr);
    arr.sort((a,b) => a-b);
}
console.log(largestNum([6, 2, 3, 4, 5]));


function largestOccurrenceInString(s) {
    let charMap = new Map();
    for (let char of s) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }
    
    let maxChar = '';
    let maxCount = 0;
    
    for (let [char, count] of charMap) {
        if (count > maxCount) {
            maxChar = char;
            maxCount = count;
        }
    }
    return `The most common character was ${maxChar}, which appeared ${maxCount} times`;
}


console.log(largestOccuranceInString("ssammys"))


function fizzBuzz()
{
    for(let i = 1; i <= 100; i++)
    {
        var fb = '';
        if(i % 3 === 0)
        {
            fb += 'fizz'
        }
        if(i % 5 === 0) fb += 'buzz';

        console.log(fb || i);
    }
}

//fizzBuzz();


function checkAnagrams(s, t)
{
    return s.split('').sort().join('') ===  t.split('').sort().join('')
}

console.log(checkAnagrams("kevin", "kevni"))


function cycleLinkedList(head)
{
    let fast = head;
    let slow = head;
    while(fast && fast.next)
    {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true;
    }
    return false;
}


function findMatchingPairs(arr, target)
{
    let answer = [];
    let left = 0;
    let right = arr.length-1;
    while(left < right)
    {
        let sum = arr[left] + arr[right];
        if(sum === target)
        {
            let set = [arr[left], arr[right]]
            answer.push(set);
            left++;
            right--;
        }
        if(sum < target)
        {
            left++;
        }
        if(sum > target)
        {
            right--;
        }
    }
    return answer;
}

function threeSum(arr, target)
{
    let answer = [];
    arr.sort((a,b) => a-b);
    for(let i = 0; i < arr.length; i++)
    {
        let left = i+1;
        let right = arr.length -1;
        let newTarget = target - arr[i];
        while(left < right)
        {
            let sum = arr[left] + arr[right];
            if(sum === newTarget)
            {
                answer.push([arr[i], arr[left], arr[right]])
                left++;
                right--;
            }
            else if(sum < newTarget)
            {
                left++;
            } else right--;
        }
    }
    //Remove duplications
    let uniqueSet = new Set(answer);
    return Array.from(uniqueSet);
}


function maxSubarraySum(arr, k) {
    if (arr.length < k) return 0;
    
    let windowSum = 0;
    let maxSum = 0;
    
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}


function greedyAlgo(arr) {
    let last = arr.length - 1;
    let backtrack = last - 1;
    
    while (last > 0) {
        if (arr[backtrack] >= (last - backtrack)) {
            last = backtrack;
            backtrack--;
        } else {
            backtrack--;
        }
        if (backtrack < 0) return false;
        if (last === 0) return true;
    }
    
    return true;
}

function canJump(nums) {
    let farthest = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (i > farthest) return false;
        farthest = Math.max(farthest, i + nums[i]);
    }
    
    return true;
}


function minJumps(nums) {
    let farthest = 0;
    let jumps = 0;
    let currEnd = 0;
    
    for (let i = 0; i < nums.length - 1; i++) { 
        farthest = Math.max(farthest, i + nums[i]);
        
        if (i === currEnd) {
            jumps++;
            currEnd = farthest;
            
            if (currEnd >= nums.length - 1) break;
        }
    }
    
    if (currEnd < nums.length - 1) return -1;
    return jumps;
}

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let charMap = new Map();
    
    for (let i = 0; i < s.length; i++) {
        charMap.set(s[i], (charMap.get(s[i]) || 0) + 1);
    }
    for (let [char, count] of charMap) {
        if (count === 1) {
            return s.indexOf(char);
        }
    }
    return -1;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let maxLength = 0;
    let left = 0;
    
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
   let numsMap = new Map();
   for(let i = 0; i < nums.length; i++)
   {
     numsMap.set(nums[i], (numsMap.get(nums[i]) || 0) + 1)
   }
   let freqArr = Array.from(numsMap);
   freqArr.sort((a,b) => b[1] - a[1]);
   let answer = [];
   for(let i = 0; i < k; i++)
   {
    answer.push(freqArr[i][0]);
   }
   return answer;
};