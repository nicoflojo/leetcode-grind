// Solution 2 Reverse using temp variable and swap

var reverseString = function(s) {
  let temp = [];
  for (let i = 0; i < s.length; i++) {
    temp[i] = s[s.length - i - 1];
  }
  return temp;
};

// Extra O(1) memory for using another array.
