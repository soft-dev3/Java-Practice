// fibo[2]=fibo[2-1]+fibo[2-2];
// fibo[2]=fibo[3-1]+fibo[3-2];
// fibo[2]=fibo[4-1]+fibo[4-2];
// fibo[i]=fibo[i-1]+fibo[i-2];
function fibonacci(n){
var fibo=[0,1];
for(var i=2; i<=n;i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
    // console.log(fibo);
    }
    return fibo;
}
var result=fibonacci(12);
console.log(result);
