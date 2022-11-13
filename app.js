
 var a = ["a", "b", "c", "d", "e"];
 var b = "a";
 if(a[i]==="b");
 console.log("word found")else{
    alert("word")
 } 

 var a =["a", "b", "c", "d", "e", "f", "g", "h"]
 var b = "c"
for(i=0; i<a.length; i++){
    console.log(a[i]);
  if (b == a[i]) {
    alert("word found")
  } 
} 

var a = ["a", "b", "c", "d", "e"]
var b = "e"
var d = a.indexOf("f")
if(a === -1){
    console("not found")
}

else{
    alert("found")
}

var a =["a", "b", "c", "d", "e", "f", "g", "h"]
var b = "b"
var wordfound = false;

for (var i = 0; i < a.length; i++){
    if(b ==a[i]) {
    wordfound = true;
    break;
   }
}

if (wordfound == true){
    alert("word found");
}else{
    alert("word not found")
}

var a =["a", "b", "c", "d", "e", "f", "g", "h"];
var b = [1,2,3,4,5];
for (var i = 0; i < a.length; i++) {
  for (var j = 0; j < b.length; j++) {  
    console.log(a[i],b[j]);
   }  
}







