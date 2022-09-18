// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = arr[0];
  max = arr[0];
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  for (let arr1 of arr) {
    sum += arr1;
  }

  avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let arr1 of arr) {
    sum += arr1;
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let arr of arrOfArr) {
    let sum = func(arr);
    if (sum > max) max = sum;
  }
  return max;
  }


// Задание 3
function worker2(arr) {
  // Ваш код
}
