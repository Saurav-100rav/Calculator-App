let element = document.getElementsByClassName('second');
console.log(element.length,element,typeof(element[0].innerHTML));    
var result = "";

for(let i=0;i<element.length;i++){
    let elementwise=element[i];
    let val=elementwise.innerHTML;
    
    if(val=='X')
        val='*';
    elementwise.addEventListener('click',()=>{
    //     console.log(e.target);  
    //     var val = e.target.innerHtml;
        console.log(val,typeof(val));
        if(val=="="){
            result=eval(result);
            document.getElementById('user').value=result;
            // result="";
        }
        else if(val=='AC'){
            result="";
            document.getElementById('user').value=result;
        }
        else{
            result+=val;
            console.log(result);
            document.getElementById('user').value=result;
        }
    });
}
