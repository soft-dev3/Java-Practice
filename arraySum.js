
function getArraySum(num){
    var sum=0;
    for(var i=0;i<num.length;i++){
        var element=num[i];
        sum=sum+element;
    }
    return sum;
}
var num=[56,45,34,64,23,12];
var result= getArraySum(num);
console.log("Total of the numbers: ",result);