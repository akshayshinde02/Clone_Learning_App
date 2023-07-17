function fun(){

    alert("Registrated")
}

function compareStrings(s1,s2){

    if(s1==s2)
    return 1;
    else
    return 0;
}

function run(){

    let var1 = document.getElementById("search").value;

    let str1 = {"python":"python.html",  "aws":"aws.html",  "exel":"Exel.html", "javascript":"javascript.html",  "web":"web.html"};
    
    let obj1 = Object.keys(str1);   
    let obj2 = Object.values(str1); 

    let flag=0;

    for(let i = 0;i<obj1.length;i++){
        if(compareStrings(obj1[i].toUpperCase(),var1.toUpperCase())){
            
            window.open(obj2[i]); 
            flag=1;
        }
    }
    
    if(flag==1){
    alert("Welcome to "+var1)
    }
    else{
        alert("Sorry! Tour Not Found!")
        
}
}