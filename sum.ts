let n = 5;

//for loop: Easy to use and understand, n iteration so depend on n
function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//Mathematical Formula: Run only 1 times, fastest approach, Need to use math
function sum_to_n_b(n: number): number {
  let sum = (n * (n + 1)) / 2;
  return sum;
}

//Recursion: Inefficient due to function call overhead and high memory usage
function sum_to_n_c(n: number): number {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return n + sum_to_n_c(n - 1);
}

console.log(sum_to_n_c(n));
console.log(sum_to_n_b(n));
console.log(sum_to_n_a(n));
console.log('it shows results as you type');
  
