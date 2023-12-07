var marks= [45,65,45,44,36,33,30,80];
var max=marks[0];
for(var i=0;i<marks.length;i++){
    var elemnent=marks[i];
    if(elemnent>max){
        max=elemnent;
    }
}
console.log("Heigest    value is : ", max);