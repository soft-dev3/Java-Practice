function reverseString(str){
    var reverse="";
    for(var i=0;i<str.length;i++){
        var char=str[i];
        reverse= char+reverse;
    }
    return reverse;
}
var statment= "Hello Alien Bhai Brother.";
var forAlien=reverseString(statment);
console.log(forAlien);
var foodVlog=reverseString("Ki Khawa jai vai");
console.log(foodVlog);