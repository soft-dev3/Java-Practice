var num=[3,4,2,5,6,2,3,5,6,7,2,7,4,7,8];
var uniqueName=[];
for(var i=0;i<num.length;i++){
    var element=num[i];
    var index=uniqueName.indexOf(element);
    if(index==-1){
        uniqueName.push(element);
       
    }
   
   
}
console.log(uniqueName);