function lpass(){
    document.getElementById("pcondit").style.display = "block"
    
    let userinput = document.getElementById("pass1").value
    let up = document.getElementById("up")
    let lo = document.getElementById("lo")
    let sp = document.getElementById("sp")
    let num = document.getElementById("num")
    let leng = document.getElementById("leng")

    if( userinput.match(/[A-Z]/)){
        up.style.color = "green"
    }
    else{
        up.style.color = "red"
    }
    if( userinput.match(/[a-z]/)){
        lo.style.color = "green"
    }
    else{
        lo.style.color = "red"
    }
    if( userinput.match(/[!/@/#/$/%/^/&/*]/)){
        sp.style.color = "green"
    }
    else{
        sp.style.color = "red"
    }
    if( userinput.match(/[0-9]/)){
        num.style.color = "green"
    }
    else{
        num.style.color = "red"
    }

    if( userinput.length >=8 && userinput.length <=15){
        leng.style.color = "green"
    }
    else{
        leng.style.color = "red"
    }
    
    
}
function spass(){
    document.getElementById("pcondit2").style.display = "block"


    let input = document.getElementById("passc").value
    let upper = document.getElementById("upc")
    let lowe = document.getElementById("loc")
    let spec = document.getElementById("spc")
    let numr = document.getElementById("numc")
    let lengt = document.getElementById("lengc")



    if(input.match(/[A-Z]/)){
        upper.style.color = "green" 
    }
    else{
        upper.style.color = "red"
    }
    if(input.match(/[a-z]/))
    {
        lowe.style.color = "green" 
    }
    else{
        lowe.style.color = "red"
    }
    if(input.match(/[!/@/#/$/%/^/&/*/(/)/_/+]/))
    {
        spec.style.color = "green" 
    }
    else{
        spec.style.color = "red"
    }
    if(input.match(/[0-9]/))
    {
        numr.style.color = "green" 
    }
    else{
        numr.style.color = "red"
    }
    if( input.length >=8 && input.length <=15){
        lengt.style.color = "green"
    }
    else{
        lengt.style.color = "red"
    }
    
}



// Jquery

$("#log").click(function(){
    $("#login").toggle();
    
}
    )
    $("#sign").click(function(){
        $("#signup").toggle();
        
    }
        )    

