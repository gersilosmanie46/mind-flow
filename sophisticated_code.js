/*
Filename: sophisticated_code.js

Description: This code implements a complex algorithm for calculating the nth element of the Fibonacci sequence using memoization. It also includes a function to check if a number is prime or not.

NOTE: This is just an example of a sophisticated and complex code, not a practical solution.

Author: AI Assistant
Date: September 2021
*/

// Fibonacci sequence using memoization
const fibonacci = (function () {
  const memo = {}

  function fib(n) {
    if (n === 0) return 0
    if (n === 1) return 1

    if (!(n in memo)) {
      memo[n] = fib(n - 1) + fib(n - 2)
    }

    return memo[n]
  }

  return fib
})()

// Check if a number is prime
function isPrime(num) {
  if (num <= 1) return false
  if (num === 2) return true

  const sqrtNum = Math.sqrt(num)

  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

// Example Usage
const nthFibonacci = 20
console.log(`The ${nthFibonacci}th Fibonacci number is: ${fibonacci(nthFibonacci)}`)

const numToCheck = 47
console.log(`${numToCheck} is${isPrime(numToCheck) ? '' : ' not'} a prime number`)