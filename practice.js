function returnNumber(nums, target) {
    const map = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
  
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
  
      map.set(nums[i], i);
    }
  
    return false;
  }
  

  function isAnagram(s, t) {
    if (s.length !== t.length) return false;
  
    const freq = {};
  
    // Step 1: Count letters in s
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      freq[char] = (freq[char] || 0) + 1;
    }
  
    // Step 2: Subtract letters in t
    for (let i = 0; i < t.length; i++) {
      const char = t[i];
      if (!freq[char]) return false; // not found or overused
      freq[char]--;
    }
  
    return true;
  }

  function intersection(arr1, arr2)
  {
    let finArray = new Array();
    for(let i = 0; i < arr1.length; i++)
        {
            if(arr2.includes(arr1[i]) && !finArray.includes(arr1[i]))
                {
                    finArray.push(arr1[i]);
                }
        }
        return finArray;
  }
  function intersection(arr1, arr2)
  {
    let arr2Set = new Set(arr2);
    let finArray = new Array();
    for(let i = 0; i < arr1.length; i++)
        {
            if(arr2Set.has(arr1[i]) && !finArray.includes(arr1[i]))
                {
                    finArray.push(arr1[i]);
                }
        }
        return finArray;
  }


  function firstNonRepeating(string) {
    const charMap = new Map();
  
    // First pass: count all characters
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      charMap.set(char, (charMap.get(char) || 0) + 1);
    }
  
    // Second pass: find first char with count 1
    for (let i = 0; i < string.length; i++) {
      if (charMap.get(string[i]) === 1) {
        return i;
      }
    }
  
    return -1;
  }
  // === TESTER ===
//   function testReturnNumber() {
//     const tests = [
//       { nums: [2, 7, 11, 15], target: 9, expectedSum: 9 },
//       { nums: [3, 2, 4], target: 6, expectedSum: 6 },
//       { nums: [3, 3], target: 6, expectedSum: 6 },
//       { nums: [1, 2, 3], target: 7, expectedSum: null },
//     ];
  
//     tests.forEach(({ nums, target, expectedSum }, index) => {
//       const result = returnNumber(nums, target);
//       const pass =
//         expectedSum === null
//           ? result === false
//           : result &&
//             nums[result[0]] + nums[result[1]] === expectedSum &&
//             result[0] !== result[1];
  
//       console.log(
//         `Test ${index + 1}: ${pass ? "✅ Passed" : "❌ Failed"} — ` +
//           `Input: [${nums}], target: ${target}, result: ${JSON.stringify(result)}`
//       );
//     });
//   }

function testReturnNumber() {
    const tests = [
      { s: "rat", t: "tar", expectedOutput: true },
      { s: "rat", t: "car", expectedOutput: false },
    ];
  
    tests.forEach(({ s, t, expectedOutput }, index) => {
      const result = isAnagram(s, t);
      const pass =
        expectedSum === true
          ? result === false
          : result &&
            nums[result[0]] + nums[result[1]] === expectedSum &&
            result[0] !== result[1];
  
      console.log(
        `Test ${index + 1}: ${pass ? "✅ Passed" : "❌ Failed"} — ` +
          `Input: [${nums}], target: ${target}, result: ${JSON.stringify(result)}`
      );
    });
  }
  testReturnNumber();