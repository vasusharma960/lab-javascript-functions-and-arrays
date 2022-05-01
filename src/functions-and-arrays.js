// Progression #1: Greatest of the two numbers

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function greatestOfTwoNumbers(n1, n2){
  return Math.max(n1, n2);
}

function findScaryWord(words){
  if(words.length == 0)
  return null;

  if(words.length == 1)
  return words[0];

  let maxLength = words[0].length;
  let maxIndex = 0;

  for(let i = 1; i < words.length; i++){
    if(words[i].length > maxLength){
      maxLength = words[i].length;
      maxIndex = i;
    }
  }

  return words[maxIndex];
}

function netPrice(prices){
  let price = 0;

  for(let i = 0; i < prices.length; i++){
    price += prices[i];
  }

  return price;
}

function add(array){
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    let type = typeof array[i];

    if(type === 'number'){
      sum += array[i];
    }else if(type === 'string'){
      sum += array[i].length;
    }else if(type === 'boolean'){
      if(array[i])
      sum++;
    }else{
      throw new Error("Unsupported data type sir or ma'am");
    }
  }

  return sum;
}

function midPointOfLevels(levels){
  if(levels.length === 0)
  return null;

  return add(levels) / levels.length;
}

function averageWordLength(items){
  if(items.length === 0)
  return null;

  return add(items) / items.length;
}

function avg(mixedArr){
  if(mixedArr.length === 0)
  return null;

  return Math.round(((add(mixedArr) / mixedArr.length) + Number.EPSILON) * 100) / 100;
}

function searchElement(words, word){
  if(words.length === 0)
  return null;

  for(let i = 0; i < words.length; i++){
    if(word === words[i])
    return true;
  }
  return false;
}

function howManyTimesElementRepeated(words, word){
  let c = 0;

  for(let i = 0; i < words.length; i++){
    if(word === words[i])
    c++;
  }

  return c;
}

function maximumProduct(matrix){
  let p = 1, max = 0
  for(let i = 0; i < 7; i++){
    for(let y = 0; y < 7; y++){
      p = matrix[i][y] * matrix[i][y + 1] * matrix[i][y + 2] * matrix[i][y + 3]
      if(p > max)
        max = p
    }
  }
  for(let y = 0; y < 7; y++){
    for(let i = 0; i < 7; i++){
      p = matrix[i][y] * matrix[i + 1][y] * matrix[i+2][y] * matrix[i+3][y]
      if(p > max)
        max = p
    }
  }
  return max
}

function uniqueArray(item){
  if(item.length === 0)
  return null;

  return [...new Set(item)];
}
