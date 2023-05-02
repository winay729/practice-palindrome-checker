function validate(){
    var input= document.getElementById("string").value;
    var len=input.length;
    var result= document.getElementById("result");
    if(len!=0){
    if(len%2==0){
        var first=input.slice(0,len/2);
        var second=input.slice(len/2,len);
        second=second.split("").reverse().join("");
        if(first==second){
            result.innerHTML="The string is a palindrome";
            result.style.color="white";            
        }
        else{
            result.innerHTML="The string is not a palindrome";
            result.style.color="#8c43d5";
        }
        result.style.display="block";
    }
    else{
        var first=input.slice(0,len/2);
        var second=input.slice(len/2+1,len);
        second=second.split("").reverse().join("");
        if(first==second){
            result.innerHTML="The string is a palindrome";
            result.style.color="white";            
        }
        else{
            result.innerHTML="The string is not a palindrome";
            result.style.color="#8c43d5";
        }
        result.style.display="block";
    }
    }
    else{
        alert("Please enter a string");
    }
}