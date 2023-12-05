function factorial(num){
    var i=1;
var fact=1;
while(i<num){
    fact=fact*i;
    console.log(i,fact);
    i++;
}
return fact;
// console.log(factorial);
}
var result=factorial(6);
console.log(result);
