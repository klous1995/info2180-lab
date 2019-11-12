window.onload=function(){
    this.document.getElementById("Uptop").style.backgroundColor="lightblue";
    this.document.getElementById("Uptop").style.color="white";
    this.document.getElementById("Search").style.backgroundColor="red";
    this.document.getElementById("Bar").style.width="400px";
    this.document.getElementById("Holder").style.backgroundColor="grey";
    this.document.getElementById("Search").style.color="white";
    this.document.getElementById("Search").onclick=function(){
var xhr=new XMLHttpRequest();
var query=document.getElementById("Bar").value;
var url = "http://localhost:8080/superheroes.php"+"?query="+query;
xhr.onreadystatechange = doSomething; 
xhr.open('GET', url); 
xhr.send();
function doSomething() { 
    if (xhr.readyState === XMLHttpRequest.DONE) { 
        if (xhr.status === 200) { 
            var response = xhr.responseText; 
             document.getElementById("result").innerHTML=response.trim(); 
        }  else{
            alert('There was a problem with the request.'); 

        }
    }
}
}
}
