function area(a){
  return 3.14*a*a
}
function area(l,b){
  return l*b
}
function areaSquare(n){
  return n*n
}
// No Function Overloading in JS
// Area requires two arguements unless handled
console.log(area(30,20))
console.log(areaSquare(5))
