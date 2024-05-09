function isPrime (n){
  for(var i=2;i<n/2;i++){
    if (n%i ===0){
      return "Not Prime"
    }
  }
  return "Prime Number"
}
console.log(isPrime(2))
