 
 function greet(name, time = 45){
    console.log("my name is " + name , time);
    
 }
 
 let name = "oswin";

 let name1 = 1;
 let name2 = 2;
 let name3 = 3;
 let time= 45;
 let time1 = 55;
 greet(name,time1);
 greet(name1, time);
 greet(name2, time1);
 greet(name3);

 function total(a,b,c){
    let d= a+b+c;
   return d;
 }
let returnvalue= total(43,234,123);
console.log(returnvalue);


function oswin(one, two ,three){
   console.log(one+two+three);
}
let a= 54;
let b= 56;
let c = 56;
oswin(a,b,c);