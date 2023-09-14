function missingNumber(nums) {
    const n = nums.length;
    // Calculate the expected sum of numbers in the range [0, n]
    const expectedSum = (n * (n + 1)) / 2;
  
    // Calculate the actual sum of the numbers in the array
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
  
    // The missing number 
    return expectedSum - actualSum;
  }
  
 
  const nums1 = [3, 0, 1];
  console.log(missingNumber(nums1)); //  2
  
  const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
  console.log(missingNumber(nums2)); //  8
  
  const nums3 = [0, 1];
  console.log(missingNumber(nums3)); //  2