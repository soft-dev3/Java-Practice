var student={id:110,phone:01728,name:"Abir"};
var student2={id:111,phone:01620,name:"Sakib"};

var phonePropName="phone"
var phoneNo=student[phonePropName];
var phoneNo1=student.phone;
var phoneNo2=student["phone"];
student2.phone=542015;
student2["phone"]=6546456;
student2.cinema="ogni2";
student["cinema"]="smartbd";
console.log(phoneNo);
console.log(student2);
console.log(phoneNo1);
console.log(student);