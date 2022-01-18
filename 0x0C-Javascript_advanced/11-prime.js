function countPrimeNumbers() {
    let prime = [];
    for (let num = 2; num <= 100; num++) {
      let isPrime = true;
      for (let index = 0; index < prime.length; index++) {
        if (num % prime[index] === 0) {
          isPrime = false;
        }
      }
      if (isPrime == true) {
        prime.push(num);
      }
    }
  }
  
  const startTime = performance.now();
  for (let a = 0; a < 100; a++) { countPrimeNumbers()}
  const endTime = performance.now();
  setTimeout(function() {
    console.log("Execution time of calculating prime numbers 100 times was " + (endTime - startTime) + " milliseconds.")
  }, 0);