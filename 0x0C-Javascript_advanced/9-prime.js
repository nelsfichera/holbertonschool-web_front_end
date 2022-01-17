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
  countPrimeNumbers();  
  const endTime = performance.now();
  console.log("Execution time of printing countPrimeNumbers was " + (endTime - startTime) + " milliseconds.");