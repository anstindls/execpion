//function check(){
//    alert("Button Clicked")
//}
var err1 =document.getElementById("err1")
function check()
{
    try{
         alsrt("button clicked")    
    }catch(error){
       console.log(error.message)
       err1.innerText=error.message
    }
}

function display(){
    var inp=document.getElementById('val').value
    var err2=document.getElementById('err2');
    console.log("btn clicked");
    try{
if(inp=="")throw"box cannot be empty"
if(isNaN(inp))throw"value is not a number"
if(inp<10) throw"value cannot be less than 10"
if(inp>20) throw"value cannot be greater than 20"
if(inp>10&&inp<20) throw"value entered correctly"
    }catch(error) {
console.log(error)
err2.innerText=error
}
finally{
    inp.innerText=""
}
}