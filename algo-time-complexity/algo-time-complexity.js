/**
 * Identify the Big-O time complexity of the following functions,
 * relative to the size of the input
 */

var TimeComplexity = {
  FIX_ME: 'wrong answer',
  CONSTANT: 'constant',
  LOGARITHMIC: 'logarithmic',
  LINEAR: 'linear',
  QUADRATIC: 'quadratic',
  EXPONENTIAL: 'exponential'
};


var sortedIndexOfTimeComplexity =  TimeComplexity.LOGARITHMIC;
// because it is binary search  


var sortedIndexOf = function(array, targetElement) {
  var minIndex = 0;
  var maxIndex = array.length - 1;
  var currentIndex;
  var currentElement;
 
  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < targetElement) {
      minIndex = currentIndex + 1;
    } else if (currentElement > targetElement) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
 
  return -1;
};


var findDuplicatesTimeComplexity =  TimeComplexity.LINEAR; 
// itterating over string is linear

var findDuplicates = function(string) {
  var tracker = {};
  var result = [];
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    tracker[letter] = tracker[letter] || 0;

    if (tracker[letter] === 1) {
      result.push(letter);
    }

    tracker[letter] += 1;
  }
  return result;
};


var bruteForcePasswordTimeComplexity =  TimeComplexity.EXPONENTIAL 
// because itterating over the alphabet and in every attempt it will increase

var bruteForcePassword = function(max) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';

  var findPassword = function(attempt) {
    if (attempt.length > 0) {
      console.log('Trying ' + attempt);
    }
    if (attempt.length <= max) {
      for (var i = 0; i < alphabet.length; i++) {
        findPassword(attempt.concat(alphabet[i]));
      }
    }
  };

  findPassword('');
};


var hasDuplicatesTimeComplexity =  TimeComplexity.QUADRATIC
 // in the beginig is linear but after that w slice new array and becomes n^2

var hasDuplicates = function(array) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (array.slice(i + 1).indexOf(item) !== -1) {
      return true;
    }
  }
  return false;
};



var removeLastThreeElementsTimeComplexity =  TimeComplexity.CONSTANT
 // the number is fixed meaning it is constant 

var removeLastThreeElements = function(array) {
  var numberOfElementsToRemove = 3;

  while (numberOfElementsToRemove-- > 0) {
    array.pop();
  }
};


var increasingStepTimeComplexity =  TimeComplexity.LOGARITHMIC;
 // the number is dubloled 

var increasingStep = function(number) {
  for (var i = 1; i < number; i = i * 2) {
    console.log(i);
  }
};


var makeRangeTimeComplexity =  TimeComplexity.CONSTANT; 
// the number we atterting over is always less than 10

var makeRange = function(array) {
  array.forEach(function(item) {
    for (var i = 1; i < 10; i++) {
      console.log(item + i);
    }
  });
};

