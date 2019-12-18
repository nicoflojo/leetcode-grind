var singleNumber = function(nums) {
  return nums.reduce((a, b) => (a ^= b));
};

// Input [1, 1, 2]
// Expected output: 2
// Notes
// We use reduce and the XOR bitwise operator to filter out the duplicates
// Algorithm has scaling issues as it ONLY removes the duplicates
// If there were triples or quadruples in algorithm solution will not work
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR
