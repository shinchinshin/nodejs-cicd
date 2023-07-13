//max
//min
//avg

export function maxNum(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("The array is empty.");
  }

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

console.log(maxNum([1, 2, 3, 4, 5, 6]));

export function minNum(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("The array is empty.");
  }

  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return min;
}

minNum([5, 7, 9, 11, 2, 4]);

export function avgNum(arr: number[]): number {
  if (!arr) {
    console.error();
  }

  //let a = arr.length;
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  const avg = total / arr.length;
  return avg;
}

avgNum([5, 7, 9, 11, 2, 4]);
